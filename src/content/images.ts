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

/** Photographs and marks taken from the official website (allgraceschools.com). */
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
  campus: p(campusBuilding, "The All Grace Schools building, a three-storey blue and white block with a red roof, seen from the forecourt", 1800, 1213),
  classroomWriting: p(classroomWriting, "Pupils in uniform writing at blue desks in a bright classroom", 1400, 933),
  crechePlayroom: p(crechePlayroom, "The crèche playroom with a soft play pen, cot and small colourful chairs", 1400, 933),
  classroomTeacher: p(classroomTeacher, "A teacher leads a lesson at the whiteboard while pupils sit at their desks", 1400, 933),
  proprietor: p(proprietorOffice, "Mrs. B. B. Eshiet, Proprietor, seated at her desk", 1200, 960),
  kindergartenRoom: p(kindergartenRoom, "A kindergarten room with a curved table, small chairs and a blue carpet", 1080, 720),
  pupilsFirstDay: p(pupilsFirstDay, "Pupils with school bags in front of a welcome-to-school banner", 600, 480),
  kindergartenClass: p(kindergartenClass, "Young pupils seated around low tables in a kindergarten class", 768, 1024),
  graduandCertificate: p(graduandCertificate, "A graduating pupil in gown and cap holding a certificate", 768, 960),
  awardsCeremony: p(awardsCeremony, "A teacher and pupil at the school’s ceremony and awards day", 670, 670),
  pupilsGroup: p(pupilsGroup, "A group of pupils in red tartan uniforms posing together", 593, 395),
  graduandSpeech: p(graduandSpeech, "A graduating pupil speaking into a microphone", 640, 960),
  pupilPresentation: p(pupilPresentation, "A pupil in a white lab coat giving a presentation with a microphone", 640, 960),
  classParticipation: p(classParticipation, "Pupils raising their hands during a lesson", 926, 720),
};
