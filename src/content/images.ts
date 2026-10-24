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
  // HR & Office Staff
  hrOffice: {
    src: "/media/hr-portrait-office.jpeg",
    alt: "HR and administrative office at All Grace Schools",
    width: 960,
    height: 1280,
  },
  // New Front Page & School Community Assets
  pupilSmileUniform: {
    src: "/media/pupil-smile-peace-uniform.jpeg",
    alt: "Happy pupil in All Grace Schools uniform giving a peace sign",
    width: 1088,
    height: 1280,
  },
  pupilReadingBookfair: {
    src: "/media/pupil-reading-bookfair.jpeg",
    alt: "Pupil reading book at the school book exhibition",
    width: 960,
    height: 1280,
  },
  pupilCareerStairs: {
    src: "/media/pupil-career-stairs.jpeg",
    alt: "Pupils celebrating career day on the school steps",
    width: 960,
    height: 1280,
  },
  welcomePupilsArch: {
    src: "/media/welcome-pupils-balloon-arch.jpeg",
    alt: "Welcome balloon arch with happy pupils",
    width: 960,
    height: 1280,
  },
  welcomeGirlFrame: {
    src: "/media/welcome-girl-frame.jpeg",
    alt: "Young pupil posing at the welcome back frame",
    width: 960,
    height: 1280,
  },
  pupilBoyTieFrame: {
    src: "/media/pupil-boy-tie-frame.jpeg",
    alt: "Smartly dressed pupil celebrating the new academic term",
    width: 960,
    height: 1280,
  },
  pupilGirlRibbonFrame: {
    src: "/media/pupil-girl-ribbon-frame.jpeg",
    alt: "Pupil in school tartan uniform with hair ribbon",
    width: 960,
    height: 1280,
  },
  pupilGirlTartanFrame: {
    src: "/media/pupil-girl-tartan-frame.jpeg",
    alt: "Smiling student in official uniform celebrating at school",
    width: 960,
    height: 1280,
  },

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
    alt: "Mrs. B. B. Eshiet, Executive Director, All Grace Schools",
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
  // Upper Grade & Playground
  upperGrade: {
    src: "/media/upper-grade.png",
    alt: "Upper Grade pupils actively learning in class at All Grace Schools",
    width: 1268,
    height: 1240,
  },
  playground: {
    src: "/media/playground-main.png",
    alt: "Outdoor playground facilities and play area at All Grace Schools",
    width: 1086,
    height: 1448,
  },
  // School Leadership & Staff Team
  chairmanBot: {
    src: "/media/chairman-bot.jpeg",
    alt: "Chairman, Board of Trustees (BOT), All Grace Schools",
    width: 960,
    height: 1280,
  },
  directorAdmin: {
    src: "/media/director-admin-ben-esshiet.png",
    alt: "Mr. Ben Esshiet, Director of Administration, All Grace Schools",
    width: 1086,
    height: 1448,
  },
  hrManagerPortrait: {
    src: "/media/hr-manager-ubong-abasi-edet.jpeg",
    alt: "Ubong Abasi Edet, HR Manager & Admissions Officer",
    width: 960,
    height: 1280,
  },
  hrAssistantPortrait: {
    src: "/media/hr-assistant-rebecca-edem.jpeg",
    alt: "Rebecca Edem, HR Assistant",
    width: 720,
    height: 1280,
  },
  supervisorMoswill: {
    src: "/media/supervisor-victory-moswill.jpeg",
    alt: "Victory Moswill, School Supervisor",
    width: 1350,
    height: 1800,
  },
  assistantSupervisorJohn: {
    src: "/media/assistant-supervisor-david-john.png",
    alt: "David John, Assistant Supervisor",
    width: 1086,
    height: 1448,
  },
  secretarySmart: {
    src: "/media/secretary-henrietta-smart.jpeg",
    alt: "Henrietta Smart, School Secretary",
    width: 960,
    height: 1280,
  },
  nurseUdo: {
    src: "/media/nurse-mfon-udo.jpeg",
    alt: "Nurse Mfon Udo, School Healthcare & First Aid Officer",
    width: 497,
    height: 609,
  },
  // Preserved website photography
  classroomWriting: {
    src: "/media/classroom-pupils-desks.jpeg",
    alt: "Pupils in neat uniforms writing and focused at their classroom desks",
    width: 960,
    height: 1280,
  },
  crechePlayroom: {
    src: "/media/playground-main.png",
    alt: "Main campus playground and outdoor early learning facilities at All Grace Schools",
    width: 1086,
    height: 1448,
  },
  classroomTeacher: {
    src: "/media/teacher-pupils-highfive.jpeg",
    alt: "Inspiring teacher encouraging pupils with a high-five in class",
    width: 720,
    height: 1280,
  },
  kindergartenRoom: {
    src: "/media/welcome-pupils-balloon-arch.jpeg",
    alt: "Vibrant early years learning area and welcoming school celebration",
    width: 960,
    height: 1280,
  },
  pupilsFirstDay: p(pupilsFirstDay, "Pupils with school bags in front of a welcome-to-school banner", 600, 480),
  kindergartenClass: {
    src: "/media/kindergarten-circle-class.jpeg",
    alt: "Kindergarten pupils seated in their bright classroom circle with learning materials",
    width: 1280,
    height: 934,
  },
  graduandCertificate: {
    src: "/media/pupils-stairs-gold-balloons.jpeg",
    alt: "Pupils on the staircase celebrating academic achievement",
    width: 960,
    height: 1280,
  },
  awardsCeremony: {
    src: "/media/welcome-back-full-group.jpeg",
    alt: "All Grace Schools welcome celebration with students and teachers",
    width: 1280,
    height: 960,
  },
  pupilsGroup: {
    src: "/media/image-3.jpeg",
    alt: "Pupils at their learning desks in the classroom at All Grace Schools",
    width: 960,
    height: 1280,
  },
  graduandSpeech: p(graduandSpeech, "A graduating pupil speaking into a microphone", 640, 960),
  pupilPresentation: {
    src: "/media/teacher-pupils-crest-stairs.jpeg",
    alt: "Pupils and teacher gathered proudly by the school crest",
    width: 960,
    height: 1280,
  },
  classParticipation: p(classParticipation, "Pupils raising their hands during a lesson", 926, 720),
};
