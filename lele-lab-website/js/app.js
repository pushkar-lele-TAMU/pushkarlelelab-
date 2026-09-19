/* ============================================================
   APP.JS — page navigation + dynamic member rendering.

   You should not usually need to edit this file. To add or edit
   a lab member, edit js/members-data.js instead — this file reads
   that data automatically and builds the Members grid + each
   person's profile page.
   ============================================================ */

// ----- Shared nav / footer markup (used on every generated profile page) -----
var SHARED_NAV = '<div class="nav"><div class="brandbox"><svg class="logo-svg" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="10" r="4.5" fill="#1a4d8f"/><circle cx="10" cy="20" r="4.5" fill="#2b7fd4"/><circle cx="38" cy="20" r="4.5" fill="#2b7fd4"/><circle cx="15" cy="37" r="4.5" fill="#1a4d8f"/><circle cx="33" cy="37" r="4.5" fill="#1a4d8f"/><line x1="24" y1="10" x2="10" y2="20" stroke="#9fbfe0" stroke-width="2"/><line x1="24" y1="10" x2="38" y2="20" stroke="#9fbfe0" stroke-width="2"/><line x1="10" y1="20" x2="15" y2="37" stroke="#9fbfe0" stroke-width="2"/><line x1="38" y1="20" x2="33" y2="37" stroke="#9fbfe0" stroke-width="2"/><line x1="15" y1="37" x2="33" y2="37" stroke="#9fbfe0" stroke-width="2"/><line x1="10" y1="20" x2="38" y2="20" stroke="#9fbfe0" stroke-width="2"/></svg><div><div class="brandname">Pushkar Lele Lab</div><div class="brandsub">Biomolecular engineering and biological soft-matter</div></div></div><div class="menu"><span onclick="go(\'home\')">Home</span><span onclick="go(\'research\')">Research</span><span onclick="go(\'pubs\')">Publications</span><span class="on" onclick="go(\'members\')">Members</span><span onclick="go(\'facilities\')">Facilities</span><span class="cta" onclick="go(\'contact\')">Contact</span></div></div>';

var SHARED_FOOT = '<div class="foot"><div class="fcol"><h4>Pushkar Lele Lab</h4><div>Biomolecular engineering &amp; biological soft-matter</div></div><div class="fcol"><h4>Location</h4><div>241 Jack E. Brown Building</div><div>Texas A&amp;M University</div><div>College Station, TX 77843-3122</div></div><div class="fcol"><h4>Contact</h4><div>(979) 458-2790</div><div><a>plele@tamu.edu</a></div></div><div class="fcol"><h4>Navigation</h4><div>Home &middot; Research &middot; Members</div></div></div>';

// ----- Page switching -----
// Every top-level section of the site is a <div class="page" id="...">.
// go('someId') hides all pages and shows only the one requested.
function go(id) {
  document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('show'); });
  var el = document.getElementById(id);
  if (el) el.classList.add('show');
  window.scrollTo({ top: 0 });
}

// ----- Build one member's grid card (Members page) -----
// Design rule: the front card shows ONLY a photo + name. Role, research,
// education etc. only appear after clicking through to the profile page.
function memberCardHTML(m) {
  return (
    '<div class="mcard" onclick="go(\'profile-' + m.slug + '\')" style="cursor:pointer;">' +
      '<div class="av" style="background-image:url(\'' + m.photo + '\')"></div>' +
      '<div class="nm">' + m.name + '</div>' +
      '<div style="font-family:var(--sans); font-size:11.5px; color:var(--blue-bright); font-weight:700; margin-top:6px;">View profile &rarr;</div>' +
    '</div>'
  );
}

// ----- Build one member's full profile page -----
function memberProfileHTML(m) {
  var links = m.email ? '<a href="mailto:' + m.email + '">&#9993; Email</a>' : '';
  if (m.scholar) links += '<a href="' + m.scholar + '" target="_blank">Google Scholar</a>';
  if (m.linkedin) links += '<a href="' + m.linkedin + '" target="_blank">LinkedIn</a>';

  var tags = (m.interests || []).map(function (t) { return '<span>' + t + '</span>'; }).join('');
  var funBlock = m.fun ? '<p>Outside the lab: ' + m.fun + '</p>' : '';
  var headingName = m.profileName || m.name; // allows a richer heading (e.g. "pending" tag) than the card name

  return (
    '<div class="page" id="profile-' + m.slug + '">' +
      SHARED_NAV +
      '<div class="prof-hero"><div class="prof-inner">' +
        '<div class="prof-photo" style="background-image:url(\'' + m.photo + '\')"></div>' +
        '<div class="prof-head">' +
          '<span class="back" onclick="go(\'members\')">&larr; Back to members</span>' +
          '<h1>' + headingName + '</h1>' +
          '<div class="r">' + m.title + '</div>' +
          '<div class="links">' + links + '</div>' +
        '</div>' +
      '</div></div>' +
      '<div class="prof-body">' +
        '<div>' +
          '<h3>About</h3><p>' + m.background + '</p>' + funBlock +
          '<h3>Research</h3><p>' + m.research + '</p>' +
        '</div>' +
        '<div class="prof-side">' +
          '<h4>At a glance</h4>' +
          '<div class="row"><b>Role</b>' + m.role + '</div>' +
          '<div class="row"><b>Department</b>' + m.dept + '</div>' +
          '<div class="row"><b>Email</b>' + (m.email || '<span class="ph">[pending]</span>') + '</div>' +
          '<div class="row"><b>Education</b>' + m.education + '</div>' +
          '<div class="row"><b>Research interests</b><div class="prof-tags">' + tags + '</div></div>' +
        '</div>' +
      '</div>' +
      SHARED_FOOT +
    '</div>'
  );
}

// ----- On page load: render the members grid + all profile pages -----
document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('members-grid');
  if (grid && typeof MEMBERS !== 'undefined') {
    grid.innerHTML = MEMBERS.map(memberCardHTML).join('\n');
  }

  var profilesContainer = document.getElementById('profiles-container');
  if (profilesContainer && typeof MEMBERS !== 'undefined') {
    profilesContainer.innerHTML = MEMBERS.map(memberProfileHTML).join('\n');
  }
});
