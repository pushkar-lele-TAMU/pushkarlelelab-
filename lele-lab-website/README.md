# Pushkar Lele Lab — Website Codebase

This is a static mockup of the redesigned lab website. It runs by opening
`index.html` directly in a browser — no build step, no server, no install
required.

## Folder structure

```
lele-lab-website/
├── index.html              ← all static page content, clearly commented
├── css/
│   └── style.css           ← every color, font, and layout rule
├── js/
│   ├── app.js               ← page-switching logic + member rendering (rarely needs editing)
│   └── members-data.js      ← ⭐ EDIT THIS to add/update lab members
└── assets/
    └── images/
        ├── hero.jpg, pillar-*.jpg, group-photo.jpg
        └── members/*.jpg    ← one photo per person, named by slug
```

## The one file you'll edit most: `js/members-data.js`

To add, remove, or update a member, open `js/members-data.js`. Each person
is one JavaScript object in the `MEMBERS` array. Copy an existing block,
change the values, save. The Members page grid and that person's profile
page are both generated automatically — you never need to touch `index.html`
or `app.js` for a routine member update.

To add a photo: drop a `.jpg` into `assets/images/members/`, named after
the person's `slug` (e.g. `jane-doe.jpg`), and set `photo:
"assets/images/members/jane-doe.jpg"` in their entry.

## Editing other pages (Research, Publications, Facilities, etc.)

These are plain HTML inside `index.html`, each wrapped in a labeled
comment block (`<!-- HOME PAGE -->`, `<!-- RESEARCH PAGE -->`, etc.) so
you can find the right section quickly. Edit the text directly.

## Editing colors / fonts / spacing

Everything is in `css/style.css`. The color palette is defined once at
the top as CSS variables (`:root { --blue: ...; }`) — change those to
re-theme the whole site at once.

## Known pending items (as of this handoff)

- Dr. Pushkar Lele (PI): photo and bio pending — currently a placeholder
  photo and `[PI bio to be added]` text on the Members page.
- Dr. Sayak Mukhopadhyay: no photo yet (member said "will upload later" on
  the intake form) — currently shows an initials placeholder.
- Dr. Vibhor: surname, role, and bio pending — currently shows only his
  photo and first name; profile page marks the rest `[pending]`.
- No real alumni testimonials collected yet — the Join the Lab page shows
  placeholder quotes clearly marked as such.
- PI photo on the Members page is a temporary stock placeholder (external
  Unsplash link) — replace with a real photo file when available.

## Deploying this site

This is a static site — no database, no backend required. It can be
hosted as-is on:
- Vercel or Netlify (free, recommended), or
- The existing HostGator account, as plain static files (no WordPress
  needed).

Just upload the whole `lele-lab-website/` folder contents to the hosting
root.
