import type { CV, Basics, Work, Volunteer, Education, Awards, Certificates, Publications, Skills, Languages, Interests, References, Projects } from "./cv.d"
import rawCv from "../cv.json"

const defaultBasics: Basics = {
  name: "",
  label: "",
  image: "",
  email: "",
  phone: "",
  url: "",
  summary: "",
  location: {
    address: "",
    postalCode: "",
    city: "",
    countryCode: "",
    region: ""
  },
  profiles: []
}

export const cv: CV = {
  basics: {
    ...defaultBasics,
    ...rawCv.basics,
    profiles: (rawCv.basics && "profiles" in rawCv.basics && Array.isArray((rawCv.basics as any).profiles))
      ? (rawCv.basics as any).profiles
      : []
  },
  work: Array.isArray(rawCv.work) ? (rawCv.work as unknown as Work[]) : [],
  volunteer: Array.isArray(rawCv.volunteer) ? (rawCv.volunteer as unknown as Volunteer[]) : [],
  education: Array.isArray(rawCv.education) ? (rawCv.education as unknown as Education[]) : [],
  awards: Array.isArray(rawCv.awards) ? (rawCv.awards as unknown as Awards[]) : [],
  certificates: Array.isArray(rawCv.certificates) ? (rawCv.certificates as unknown as Certificates[]) : [],
  publications: Array.isArray(rawCv.publications) ? (rawCv.publications as unknown as Publications[]) : [],
  skills: Array.isArray(rawCv.skills) ? (rawCv.skills as unknown as Skills[]) : [],
  languages: Array.isArray(rawCv.languages) ? (rawCv.languages as unknown as Languages[]) : [],
  interests: Array.isArray(rawCv.interests) ? (rawCv.interests as unknown as Interests[]) : [],
  references: Array.isArray(rawCv.references) ? (rawCv.references as unknown as References[]) : [],
  projects: Array.isArray(rawCv.projects) ? (rawCv.projects as unknown as Projects[]) : []
}

export const {
  basics,
  work,
  volunteer,
  education,
  awards,
  certificates,
  publications,
  skills,
  languages,
  interests,
  references,
  projects
} = cv

export default cv
