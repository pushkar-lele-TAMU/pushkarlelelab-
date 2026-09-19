/* ============================================================
   MEMBERS DATA — the single file to edit when adding, removing,
   or updating a lab member.

   TO ADD A NEW MEMBER:
   1. Copy one whole { ... } block below and paste it before the
      closing bracket ].
   2. Fill in the details. "slug" must be unique, lowercase,
      hyphenated (used to build the profile page id).
   3. Drop the person's photo in assets/images/members/<slug>.jpg
      and set "photo" to that same path.
   4. Save this file. Nothing else needs to change — the Members
      grid and every profile page are generated automatically from
      this list by js/app.js.

   NOTE: the Members grid only ever shows a photo + name (no role
   text) per the site design. Role, department, research, etc. only
   appear once someone clicks through to that person's profile page.

   Fields marked "pending" mean the real info hasn't been provided
   yet — replace the placeholder text once you have it.
   ============================================================ */

const MEMBERS = [
  {
    slug: "romit-bishayi",
    name: "Romit Bishayi",
    role: "PhD Student",
    title: "3rd-Year PhD Student",
    dept: "Department of Biomedical Engineering, Texas A&M University",
    photo: "assets/images/members/romit-bishayi.jpg",
    research: "I study how bacteria dynamically regulate membrane transport and energy state to survive antibiotic stress, using E. coli as a model to understand how outer membrane proteins called porins, proton motive force (PMF), and metabolism shape antibiotic tolerance.",
    background: "I joined the lab as a Student Tech in 2022 after completing my B.Tech in Biotechnology from Vellore Institute of Technology, Vellore, India. I transitioned to a PhD student in Biomedical Engineering in 2023 with a focus in antimicrobial resistance and biomaterial engineering.",
    interests: ["Antimicrobial resistance", "Single-cell assays", "Microfluidics", "Fluorescence imaging", "Flow cytometry", "Bacterial physiology"],
    education: "B.Tech Biotechnology, Vellore Institute of Technology, India (2022) &middot; Business Diploma, Mays Business School, Texas A&amp;M (2023) &middot; PhD in progress, Biomedical Engineering, Texas A&amp;M",
    fun: "Serial side-quest hunter: strength training, marathons, bouldering, hiking, and good music.",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/romit-bishayi2808",
    email: "rbishayi2808@tamu.edu"
  },
  {
    slug: "sayak-mukhopadhyay",
    name: "Dr. Sayak Mukhopadhyay",
    role: "Postdoctoral Scholar",
    title: "Postdoctoral Scholar",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/sayak-mukhopadhyay.jpg",
    research: "I study how bacteria sense their environment, tolerate antibiotics, and power their movement. My work combines synthetic biology, microfluidics, single-cell imaging, and AlphaFold-guided protein structure prediction to uncover the biophysical mechanisms behind chemotaxis, membrane physiology, and flagellar motor stator assembly.",
    background: "I joined Dr. Lele's lab in 2022 after completing my PhD in Synthetic and Systems Biology from Saha Institute of Nuclear Physics, Kolkata, India.",
    interests: ["Bacterial chemosensing", "Flagellar motor biophysics", "Antibiotic tolerance", "Membrane protein dynamics", "Synthetic biology", "AlphaFold structure prediction"],
    education: "PhD, Synthetic &amp; Systems Biology, Saha Institute of Nuclear Physics, Kolkata, India",
    fun: "FPS gaming.",
    scholar: "https://scholar.google.com/citations?user=afcIO5oAAAAJ&hl=en",
    linkedin: "",
    email: "Sayak@tamu.edu"
  },
  {
    slug: "abey-jacob-john",
    name: "Abey Jacob John",
    role: "PhD Student",
    title: "1st Year PhD Student",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/abey-jacob-john.jpg",
    research: "I study the chemotaxis of Helicobacter pylori in confined microchannels with chemical gradients.",
    background: "I joined the lab in 2025 after completing my Bachelor of Technology in Chemical Engineering at NIT Warangal, India.",
    interests: ["Bacterial chemotaxis", "Helicobacter pylori", "Microscopy"],
    education: "B.Tech Chemical Engineering, NIT Warangal, India (2021&ndash;2025) &middot; PhD in progress, Texas A&amp;M (2025&ndash;present)",
    fun: "Guitarist and amateur cook.",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/abey-jacob-john-197ab9237",
    email: "ateam1237@tamu.edu"
  },
  {
    slug: "nathan-pham",
    name: "Nathan Pham",
    role: "Masters Student",
    title: "2nd-Year MS Student",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/nathan-pham.jpg",
    research: "Biofilm formation is crucial to the life cycle and pathogenesis of Vibrio cholerae. I aim to characterize the transition from planktonic cells to biofilm, using microscopic techniques.",
    background: "I joined in 2025 after completing my BS at the University of Dallas.",
    interests: ["Bacterial chemotaxis & motility", "Protein & enzymatic interactions", "Biofilm formation"],
    education: "BS Biochemistry, University of Dallas, Irving (2024)",
    fun: "Owns a sourdough starter named the Black Plague.",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/nathan-pham-23bb9931b",
    email: "nbananepham@tamu.edu"
  },
  {
    slug: "amirtheswari-ganapathi",
    name: "Amirtheswari Ganapathi",
    role: "PhD Student",
    title: "2nd Year PhD Student",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/amirtheswari-ganapathi.jpg",
    research: "I study the motility and chemotactic behavior of Clostridium ljungdahlii towards carbon dioxide.",
    background: "I joined in Fall 2024 after completing my B.Tech at Anna University.",
    interests: ["Anaerobic physiology", "Bacterial chemotaxis"],
    education: "B.Tech Chemical Engineering, Anna University (2024) &middot; PhD in progress, Texas A&amp;M",
    fun: "Avid reader and self-taught artist.",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/amirtheswari-ganapathi-415517233",
    email: "amirtheswarig02@tamu.edu"
  },
  {
    slug: "reyhaneh-sarkarat",
    name: "Reyhaneh Sarkarat",
    role: "Research Assistant",
    title: "Research Assistant",
    dept: "Department of Chemical Engineering / Biomedical Engineering, Texas A&M University",
    photo: "assets/images/members/reyhaneh-sarkarat.jpg",
    research: "I study neutrophil-bacterial interactions in confined environments and the factors that affect the response of neutrophils to E. coli.",
    background: "After receiving my MS at Texas A&M, I joined the Department of Biomedical Engineering to work on bacterial preservation, which reinforced my interest in E. coli structure and behavior. In 2026, I joined Dr. Lele's lab to study E. coli interactions with neutrophils.",
    interests: ["Engineered microenvironments", "Immunostaining & cell imaging", "Tissue engineering", "Biomaterial characterization"],
    education: "BS Chemical Engineering, University of Tehran (2020) &middot; MS Food Science &amp; Technology, Texas A&amp;M (2024)",
    fun: "",
    scholar: "https://scholar.google.com/citations?hl=en&user=kz2_5nEAAAAJ",
    linkedin: "https://linkedin.com/in/reyhaneh-sarkarat",
    email: "reyhaneh_s23@tamu.edu"
  },
  {
    slug: "pravin-subrahmaniyan",
    name: "Pravin Subrahmaniyan",
    role: "PhD Student",
    title: "4th Year PhD Student",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/pravin-subrahmaniyan.jpg",
    research: "I work in bacterial transport, with a particular focus on how motile cells move through complex and restrictive environments &mdash; combining experimental observations with quantitative and theoretical analysis to understand how biological systems overcome transport barriers in low-Reynolds-number environments.",
    background: "I joined the lab after finishing my bachelor's from Anna University, Chennai. Prior to joining, I worked in the materials domain; inspired by the underlying physics in biological transport, I changed fields, and it was the best decision I've ever made.",
    interests: ["Bacterial transport", "Microfluidics", "Bioseparations", "TIRF microscopy", "Transport modeling"],
    education: "B.Tech Chemical Engineering, Anna University, Chennai (2023) &middot; PhD in progress, Texas A&amp;M",
    fun: "Rookie chef, amateur trekker, pro badminton player.",
    scholar: "https://scholar.google.com/citations?user=7i49Bs0AAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/pravin-subrahmaniyan-80908b204",
    email: "pravinhks_1507@tamu.edu"
  },
  {
    slug: "ayush-joshi",
    name: "Ayush Joshi",
    role: "PhD Student",
    title: "3rd Year PhD Student",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/ayush-joshi.jpg",
    research: "My research explores the assembly, regulation, and mechanosensitive remodeling of the bacterial flagellar motor. Using quantitative biophysical assays and genetic approaches, I aim to understand how stator protein dynamics control proton-powered motility and bacterial adaptation to changing mechanical environments.",
    background: "I joined in spring 2024 after completing my MS at Oklahoma State University.",
    interests: ["Fluorescence microscopy", "Growth assays", "Tethered cell assays"],
    education: "B.Tech Petroleum Engineering, Rajiv Gandhi Institute of Petroleum Technology (2021) &middot; MS Petroleum Engineering, Oklahoma State University (2023) &middot; PhD in progress, Texas A&amp;M",
    fun: "Passionate about singing and expressing himself through music.",
    scholar: "https://scholar.google.com/citations?hl=en&user=NKMihAoAAAAJ",
    linkedin: "",
    email: "ayushjoshi2911@tamu.edu"
  },
  {
    slug: "varsha-viswanathan",
    name: "Varsha Viswanathan",
    role: "PhD Student",
    title: "2nd-Year PhD Student",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/varsha-viswanathan.jpg",
    research: "I am developing a technology to study the motor dynamics of Helicobacter pylori and Vibrio cholerae.",
    background: "I joined in 2025 after completing my B.E. at BITS Pilani.",
    interests: ["Bacterial motor dynamics", "Live-cell imaging", "Antibiotic resistance"],
    education: "B.E. Chemical Engineering, BITS Pilani (2025) &middot; PhD in progress, Texas A&amp;M",
    fun: "Carnatic vocalist, travel enthusiast, and amateur sketch artist.",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/varsha-viswanathan-695124239",
    email: "varsha10viswa@tamu.edu"
  },
  {
    slug: "adelie-lorge",
    name: "Adelie M. Lorge",
    role: "Undergraduate Researcher",
    title: "Senior Undergraduate Researcher",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/adelie-lorge.jpg",
    research: "Researching low-cost microfluidic mold fabrication and evaluating PDMS replication quality and durability.",
    background: "I joined the lab in fall 2025 after starting my 3rd year at Texas A&M. I emailed Dr. Lele about joining his lab, and he offered me a project.",
    interests: ["Microfluidic fabrication", "Materials engineering", "Surface engineering"],
    education: "BS Chemical Engineering, Texas A&amp;M (expected 2027)",
    fun: "Sports enthusiast, always up for trying a new activity.",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/adelie-lorge-316425382",
    email: "adelie-lorge@tamu.edu"
  },
  {
    slug: "thahal-venkateshkumar",
    name: "Thahal Venkateshkumar",
    role: "Undergraduate Researcher",
    title: "2nd-Year Undergraduate Student",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/thahal-venkateshkumar.jpg",
    research: "I assist with bead and tethered cell assay experiments for various projects within the lab.",
    background: "I joined during the Summer 2026 semester after completing my freshman year of engineering.",
    interests: ["Bacterial motility", "Flagellar dynamics", "Mechanosensing"],
    education: "BS Chemical Engineering in progress, Texas A&amp;M",
    fun: "Avid motorsport fan and home chef.",
    scholar: "",
    linkedin: "https://www.linkedin.com/in/thahal-venkateshkumar-5a13323a1",
    email: "thahalv12@tamu.edu"
  },
  {
    slug: "parisa-zangoui",
    name: "Parisa Zangoui",
    role: "Postdoctoral Scholar",
    title: "Postdoctoral Scholar",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/parisa-zangoui.jpg",
    research: "Antibiotic tolerance and flagellar motility.",
    background: "I joined the group in 2025 after my postdoctoral research on acid stress response in Salmonella sp.",
    interests: ["Bacterial physiology", "Gene regulation", "Single-molecule imaging"],
    education: "PhD in Bacterial Genetics, Indian Institute of Science, Bangalore, India",
    fun: "",
    scholar: "",
    linkedin: "",
    email: "pazangoui@tamu.edu"
  },
  {
    slug: "vibhor",
    name: "Dr. Vibhor",
    profileName: "Dr. Vibhor <span class=\"ph\">[surname pending]</span>",
    role: "[role pending]",
    title: "[role & title pending]",
    dept: "Artie McFerrin Department of Chemical Engineering, Texas A&M University",
    photo: "assets/images/members/vibhor.jpg",
    research: "[Research focus pending — to be added once provided.]",
    background: "[Bio pending — to be added once provided.]",
    interests: [],
    education: "[pending]",
    fun: "",
    scholar: "",
    linkedin: "",
    email: ""
  },
];
