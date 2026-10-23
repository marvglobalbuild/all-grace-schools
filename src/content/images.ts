import logo from "@/assets/ags-logo.png.asset.json";
import crest from "@/assets/ags-crest.png.asset.json";
import campusBuilding from "@/assets/campus-building.webp.asset.json";
import classroomWriting from "@/assets/classroom-writing.webp.asset.json";
import crechePlayroom from "@/assets/creche-playroom.webp.asset.json";
import classroomTeacher from "@/assets/classroom-teacher.webp.asset.json";
import proprietorOffice from "@/assets/proprietor-office.webp.asset.json";
import kindergartenRoom from "@/assets/kindergarten-room.webp.asset.json";
import pupilsFirstDay from "@/assets/pupils-first-day.webp.asset.json";
import kindergartenClass from "@/assets/kindergarten-class.webp.asset.json";
import graduandCertificate from "@/assets/graduand-certificate.webp.asset.json";
import awardsCeremony from "@/assets/awards-ceremony.webp.asset.json";
import pupilsGroup from "@/assets/pupils-group.webp.asset.json";
import graduandSpeech from "@/assets/graduand-speech.webp.asset.json";
import pupilPresentation from "@/assets/pupil-presentation.webp.asset.json";
import classParticipation from "@/assets/class-participation.webp.asset.json";

/** Photographs and marks taken from the official website and verified school assets. */
export type Photo = { src: string; alt: string; width: number; height: number };

const p = (a: { url: string }, alt: string, width: number, height: number): Photo => ({
  src: a.url,
  alt,
  width,
  height,
});

export const brand = {
  logo: p(logo, "All Grace Schools", 600, 191),
  crest: p(crest, "All Grace Schools crest", 240, 240),
};

export const photos = {
  // Official Hero campus picture
  campus: {
    src: "/media/hero-campus.jpeg",
    alt: "The All Grace Schools campus building and entrance in Uyo, Akwa Ibom State",
    width: 1800,
    height: 1213,
  },
  // Leadership / Proprietor portrait: Mrs. B. B. Eshiet, Proprietor
  proprietor: {
    src: "/media/mrs-b-b-eshiet.jpeg",
    alt: "Mrs. B. B. Eshiet, Proprietor, All Grace Schools",
    width: 1200,
    height: 960,
  },
  // Play Group learning environment
  playgroup: {
    src: "/media/playgroup-classroom.jpeg",
    alt: "The Play Group classroom with colorful early learning facilities and play materials",
    width: 1080,
    height: 720,
  },
  // Student Leadership & Election Campaign Flyers
  voteGames: {
    src: "/media/flyer-vote-games.jpeg",
    alt: "Student election flyer: Vote for Games Prefect",
    width: 800,
    height: 1000,
  },
  voteSanitary: {
    src: "/media/flyer-vote-sanitary.jpeg",
    alt: "Student election flyer: Vote for Sanitary Prefect",
    width: 800,
    height: 1000,
  },
  voteTimekeeper: {
    src: "/media/flyer-vote-timekeeper.jpeg",
    alt: "Student election flyer: Vote for Timekeeper",
    width: 800,
    height: 1000,
  },
  // Co-curricular & Clubs
  scoutsClub: {
    src: "/media/scouts-club.jpeg",
    alt: "All Grace Schools Scouting Club pupils in uniform",
    width: 1000,
    height: 750,
  },
  // Teaching & Staff Faculty
  teachersStaff: {
    src: "/media/teachers-staff-team.jpeg",
    alt: "Dedicated teaching faculty and management at All Grace Schools",
    width: 1000,
    height: 750,
  },
  // Pupils & Campus Life
  pupilsStaircase: {
    src: "/media/pupils-staircase-uniform.jpeg",
    alt: "Pupils in neat school uniform on the school staircase",
    width: 800,
    height: 1000,
  },
  teacherHighfive: {
    src: "/media/pupils-teacher-highfive.jpeg",
    alt: "Teacher encouraging pupil with an inspiring high-five",
    width: 1000,
    height: 750,
  },
  bookfairBoy: {
    src: "/media/pupil-boy-bookfair.jpeg",
    alt: "Pupil discovering literature at the school book fair",
    width: 800,
    height: 1000,
  },
  bookfairGirl: {
    src: "/media/pupil-girl-bookfair.jpeg",
    alt: "Pupil reading books at the school book fair",
    width: 800,
    height: 1000,
  },
  gradesClassroom: {
    src: "/media/grades-classroom-desks.jpeg",
    alt: "Grade school pupils engaged in learning at their desks",
    width: 1000,
    height: 750,
  },
  frontOffice: {
    src: "/media/front-office-manager.jpeg",
    alt: "Front office and administration desk",
    width: 1000,
    height: 750,
  },
  hrManager: {
    src: "/media/hr-manager-portrait.jpeg",
    alt: "Ubong Abasi Edet, HR Manager",
    width: 800,
    height: 1000,
  },
  trophiesAdmin: {
    src: "/media/office-trophies-admin.jpeg",
    alt: "Academic excellence trophies and competition awards",
    width: 1000,
    height: 750,
  },
  weAreOpen: {
    src: "/media/we-are-open.jpeg",
    alt: "All Grace Schools admission open banner",
    width: 1000,
    height: 600,
  },
  pupilSmile: {
    src: "/media/pupil-smile-peace.jpeg",
    alt: "Happy pupil in All Grace Schools uniform",
    width: 800,
    height: 1000,
  },
  // Preserved website photography
  classroomWriting: p(classroomWriting, "Pupils in uniform writing at blue desks in a bright classroom", 1400, 933),
  crechePlayroom: {
    src: "/media/playgroup-classroom.jpeg",
    alt: "The Play Group classroom with soft learning materials and child-friendly seating",
    width: 1080,
    height: 720,
  },
  classroomTeacher: p(classroomTeacher, "A teacher leads a lesson at the whiteboard while pupils sit at their desks", 1400, 933),
  kindergartenRoom: p(kindergartenRoom, "A kindergarten room with a curved table, small chairs and a blue carpet", 1080, 720),
  pupilsFirstDay: p(pupilsFirstDay, "Pupils with school bags in front of a welcome-to-school banner", 600, 480),
  kindergartenClass: p(kindergartenClass, "Young pupils seated around low tables in a kindergarten class", 768, 1024),
  graduandCertificate: p(graduandCertificate, "A graduating pupil in gown and cap holding a certificate", 768, 960),
  awardsCeremony: p(awardsCeremony, "A teacher and pupil at the school ceremony and awards day", 670, 670),
  pupilsGroup: p(pupilsGroup, "A group of pupils in red tartan uniforms posing together", 593, 395),
  graduandSpeech: p(graduandSpeech, "A graduating pupil speaking into a microphone", 640, 960),
  pupilPresentation: p(pupilPresentation, "A pupil in a white lab coat giving a presentation with a microphone", 640, 960),
  classParticipation: p(classParticipation, "Pupils raising their hands during a lesson", 926, 720),
};
