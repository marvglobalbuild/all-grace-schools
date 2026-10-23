/**
 * Verified school content.
 *
 * Every fact here was taken from the official website (allgraceschools.com)
 * on 23 October 2026. `source` fields record where it was found. Anything the
 * site contradicts or leaves unclear is listed in REVIEW_ITEMS and surfaced in
 * the UI with <ReviewNote>, never silently resolved.
 */

export const SITE_URL = "https://allgraceschools.com";

/** Set to false once the school has confirmed every item in REVIEW_ITEMS. */
export const SHOW_REVIEW_NOTES = false;

export const SOURCES = {
  home: "https://allgraceschools.com/",
  about: "https://allgraceschools.com/about-our-school/",
  admissionProcess: "https://allgraceschools.com/admission-process/",
  admissionForm: "https://allgraceschools.com/academics/",
  contacts: "https://allgraceschools.com/contacts/",
  whyChoose: "https://allgraceschools.com/why-you-should-choose-all-grace-schools/",
  proprietor: "https://allgraceschools.com/meet-our-proprietor/",
  proprietorProfile: "https://allgraceschools.com/teachers/mrs-b-b-eshiet/",
  enroll: "https://allgraceschools.com/how-to-enroll-your-child-in-a-class/",
  media: "https://allgraceschools.com/events/",
} as const;

export const school = {
  name: "All Grace Schools",
  shortName: "AGS",
  /** about-our-school, admission-process, home */
  founded: { iso: "2014-09-15", label: "15 September 2014" },
  city: "Uyo",
  state: "Akwa Ibom State",
  country: "Nigeria",
  /** about-our-school */
  mission:
    "To evolve an academic rooted in God, hard work, and discipline for the actualisation of integrity and excellence.",
  vision:
    "To build an educational institution founded on Christian principles, and to raise outstanding leaders through a proper foundation.",
  coreValues: [
    "To educate with Christian principles",
    "Discipline in all ramifications",
    "Transparency in all our dealings",
    "Accountability",
    "Excellence in all endeavours",
  ],
  portalUrl: "https://app.edusuite.ng/ags/login",
  facebookUrl: "https://web.facebook.com/allgraceschools",
  videoUrl: "https://www.youtube.com/watch?v=JKp9cOm5GUY",
} as const;

/* ------------------------------------------------------------------ */
/* Contacts                                                            */
/* ------------------------------------------------------------------ */

export type Phone = { display: string; tel: string };

const phone = (display: string, e164: string): Phone => ({ display, tel: `tel:${e164}` });

/** Admission Officer — listed with the same number and email on both
 * /admission-process/ and /contacts/, and in the site header. */
export const admissions = {
  officer: "Miss Ubongabasi J. Edet",
  role: "Admission Officer",
  phone: phone("+234 708 962 5023", "+2347089625023"),
  email: "admin@allgraceschools.com",
  /** admission-process + academics (Admission Form) */
  deskHours: "Weekdays, 9 a.m. – 3 p.m.",
} as const;

/** /contacts/ and site footer */
export const campus = {
  gates: [
    {
      label: "Gate 1",
      address: "Professor Offiong Street, off Evarist Drive, Shelter Afrique Estate, Uyo",
    },
    { label: "Gate 2", address: "Ring Road 3, end by Oron Road, Uyo" },
  ],
  officePhones: [phone("+234 806 712 3248", "+2348067123248"), phone("+234 701 023 2509", "+2347010232509")],
  generalEmail: "info@allgraceschools.com",
  /** footer */
  officeHours: "Monday – Friday, 8 a.m. – 4 p.m.",
  /** Coordinates of the map embedded on /contacts/ */
  map: { lat: 4.9872183, lng: 7.9578427 },
} as const;

/** WhatsApp contacts published in the site-wide chat widget. */
export const whatsapp = [
  { name: "Victory Moswill", role: "HR", number: "+234 806 712 3248", href: "https://wa.me/2348067123248" },
  { name: "Ekom Charles", role: "Supervisor", number: "+234 701 023 2509", href: "https://wa.me/2347010232509" },
  { name: "Dr Uyai Eshiet", role: "Board of Trustees", number: "+234 703 017 3737", href: "https://wa.me/2347030173737" },
] as const;

/* ------------------------------------------------------------------ */
/* Admissions — /admission-process/ and /academics/ (Admission Form)   */
/* ------------------------------------------------------------------ */

export const admissionRules = {
  registrationFeeNaira: 5000,
  registrationFeeAppliesTo: "nursery and primary education",
  passportPhotos: 2,
  passportPhotoSpec: "Coloured, with a white background",
  deskOpenHour: 9,
  deskCloseHour: 15,
  deskDays: "weekdays",
} as const;

export const formatNaira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const admissionSteps = [
  {
    title: "Present your child",
    body: "Every child seeking admission is interviewed by the Head of School when presented by a parent or guardian.",
  },
  {
    title: "Receive the application form",
    body: "Once your child meets the criteria for admission, the school presents you with the application (registration) form.",
  },
  {
    title: "Submit the completed form",
    body: "Return the completed, signed form to the school with the registration fee and two coloured passport photographs on a white background.",
  },
] as const;

export const feesInfo = [
  "School fees are paid termly, in the bank, with tellers bearing the child’s name for proper documentation.",
  "New pupils pay at the start of the admission process for the academic year. Returning pupils pay during the holidays before a new term resumes.",
  "Fees depend on the pupil’s class and on whether they are new or returning. The admissions desk officer shares the amount in person.",
  "Optional extracurricular clubs attract a separate fee.",
] as const;

/* ------------------------------------------------------------------ */
/* Learning stages — /admission-process/ "What we offer"               */
/* ------------------------------------------------------------------ */

export type Stage = {
  id: string;
  name: string;
  classes?: string;
  ages: string;
  summary: string;
  detail: string[];
  subjects?: string[];
};

export const stages: Stage[] = [
  {
    id: "creche",
    name: "The Crèche / Reception",
    ages: "6 months – 2 years",
    summary: "Care, rest and early learning through play in a home-away-from-home crèche.",
    detail: [
      "Well-trained caregivers and nannies, good sleeping space and a hygienic feeding environment.",
      "Basic education that supports cognitive, social and physical development.",
      "Well-ventilated rooms with child-friendly learning facilities and security. CCTV cameras monitor staff and children’s activities.",
    ],
  },
  {
    id: "kindergarten",
    name: "Kindergarten",
    classes: "KG1 & KG2",
    ages: "3 – 5+ years",
    summary: "The first official school year: letters, sounds, words and the fundamentals of number.",
    detail: [
      "Pupils write upper- and lower-case letters, draw shapes and pictures, sing rhymes and learn sight words.",
      "They begin to read, learn key fundamentals of mathematics, write their names, play educational games and go on excursions.",
    ],
    subjects: [
      "Number work",
      "Letter work",
      "Social habit",
      "Health habit",
      "Writing pattern",
      "Computer",
      "Music",
      "Physical exercises",
      "Story telling",
      "Creative arts",
      "Colouring",
    ],
  },
  {
    id: "lower-grade",
    name: "Lower Grade",
    classes: "Grades 1 – 3",
    ages: "6 – 7+ years",
    summary: "The move from play-based learning to stronger academic skills.",
    detail: [
      "Pupils read more complex words of two to five syllables.",
      "Teachers guide home-economics practicals such as sewing, cooking, moulding, and arts and crafts. Pupils also go on excursions.",
    ],
    subjects: [
      "English language",
      "Mathematics",
      "Verbal reasoning",
      "Spelling",
      "Quantitative reasoning",
      "Basic Science",
      "Social Studies",
      "Health Education",
      "Security Education",
      "Vocational Studies",
      "Bible Knowledge",
      "Creative Arts",
      "French",
      "Diction",
      "Agricultural Science",
      "Home Economics",
      "Civic Education",
      "Handwriting",
    ],
  },
  {
    id: "upper-grade",
    name: "Upper Grade",
    classes: "Grades 4 – 5",
    ages: "8 – 10 years",
    summary: "Problem solving, critical thinking and certificate examinations.",
    detail: [
      "Teachers act as facilitators while pupils apply what they learned in the lower grades to new levels of abstraction and bigger ideas.",
      "Certificate examinations are written at this level.",
    ],
  },
];

export const clubs = [
  "Film club (cinema-hall viewing and acting)",
  "Swimming club",
  "Taekwondo",
  "Music / Dance",
  "Scouting",
] as const;

/** "Why you should choose All Grace Schools" article (26 Sep 2024) */
export const reasons = [
  {
    title: "A blended curriculum",
    body: "A specially designed curriculum that blends the Nigerian and British curricula, with a pupil-centred approach that builds critical thinking, collaboration, digital literacy, good citizenship and communication.",
  },
  {
    title: "Every child is unique",
    body: "Drawing on the philosophy of Jean Piaget and Lev Vygotsky, teachers adapt the learning style to suit each child.",
  },
  {
    title: "Christian foundation",
    body: "The school supports and extends the work of the Christian home and church, reinforcing the same values as a foundation for raising Godly children.",
  },
  {
    title: "Educating for a digital future",
    body: "ICT skills are developed from Kindergarten, where Computer is a subject. Pupils have also been enrolled in robotics.",
  },
  {
    title: "Clean, caring and secure",
    body: "Cleanliness is emphasised in classrooms, uniforms, laboratories and hallways. Security personnel are on duty from 7 a.m. until the close of the school day.",
  },
  {
    title: "Listening to parents",
    body: "The school values parents’ complaints, suggestions and ideas, and treats them as part of finding solutions together.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Leadership — /meet-our-proprietor/ and /teachers/mrs-b-b-eshiet/    */
/* ------------------------------------------------------------------ */

export const proprietor = {
  name: "Mrs. B. B. Eshiet",
  role: "Proprietor",
  qualifications: [
    "Bachelor of Arts in English",
    "Master of Arts in English",
    "Postgraduate Diploma in Education",
  ],
  career: [
    "Taught in schools, then worked in the Akwa Ibom State Ministry of Education and the State Universal Basic Education Board.",
    "Appointed Permanent Secretary by the Akwa Ibom State Government and posted to the Ministry of Women Affairs and Child Development.",
    "Served as Permanent Secretary and Chief of Staff in the Deputy Governor’s Office until retirement.",
    "Author of three books used in educational institutions in the State.",
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Achievements — /admission-process/ (History) and home page          */
/* ------------------------------------------------------------------ */

export const achievements = {
  documented: "Awards for environmental excellence from Doctors for Good Governance in 2020 and 2021.",
  general:
    "The school reports awards and competition success in mathematics, essay writing, music and diction.",
  governance:
    "The school has a Board of Governors, a management team, qualified teachers and trained caregivers.",
} as const;

/* ------------------------------------------------------------------ */
/* News — existing posts, all dated 26 September 2024                  */
/* ------------------------------------------------------------------ */

export const articles = [
  {
    slug: "why-you-should-choose-all-grace-schools",
    title: "Why you should choose All Grace Schools",
    category: "Admission",
    date: "2024-09-26",
    excerpt:
      "Our curriculum, our Christian foundation, our environment and how we prepare children for a digital future.",
  },
  {
    slug: "how-to-enroll-your-child-in-a-class",
    title: "How to enrol your child in a class",
    category: "Academics",
    date: "2024-09-26",
    excerpt: "Check age eligibility and the optional clubs, then contact the Admissions Department.",
  },
  {
    slug: "meet-our-proprietor",
    title: "Meet our Proprietor",
    category: "General",
    date: "2024-09-26",
    excerpt: "Mrs. B. B. Eshiet’s career in education and public service, and why she founded the school.",
  },
] as const;

export type ArticleSlug = (typeof articles)[number]["slug"];

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

/* ------------------------------------------------------------------ */
/* Items the school must confirm                                       */
/* ------------------------------------------------------------------ */

export const REVIEW_ITEMS = {
  stages:
    "The home page lists “Creche, Kindergarten, Junior Grade, Senior Grade”, while the Admission Process page lists Crèche (6 months–2 years), KG1–KG2, Grades 1–3 and Grades 4–5. Ages 2–3 are not covered, and the About page mentions “pupils and students”. Please confirm the stages and ages currently offered.",
  years:
    "The site says the school has achieved excellence “for the past 7 years”, “10 years” and “12 years” on different pages. Only the founding date is shown here.",
  address:
    "The About page gives “Clement Isong Avenue, Ring Road 3”, while Contacts lists two gates (Professor Offiong Street and Ring Road 3 by Oron Road). The map pin on the current Contacts page also sits away from the “All Grace Schools” label on Google Maps. Please confirm the address and map location parents should use.",
  phones:
    "Different pages list different enquiry numbers (07089625023, 07010232509, 07030173737, 08067123248, 08052725687, 08022232076). Only the Admission Officer’s number appears consistently.",
  supervisor:
    "The supervisor on 07010232509 is named Ekom Charles on the Admission Process page and Mrs Rebecca Bassey on the Contacts page.",
  fee:
    "The ₦5,000 registration form fee and admissions instructions are published without a date. Please confirm they are current.",
  accepting:
    "The site says it is “currently accepting applications for all classes for the academic year” without naming the session.",
  proprietor:
    "The profile says she taught for 10 years; the article says 12 years. It also lists engineering honours (e.g. National Academy of Engineering) that appear to be template text. Her title appears as Proprietor, Director and Executive Director, and her surname as Eshiet and Eshiett.",
  facilities:
    "Library, computer room and laboratories are mentioned in a testimonial and an article but are not described elsewhere. Please confirm the facilities to show.",
  testimonials:
    "Three parent testimonials appear on the home page without dates. They are not shown until the school confirms they are current and approved.",
} as const;

export type ReviewKey = keyof typeof REVIEW_ITEMS;
