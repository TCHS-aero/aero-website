/**
 * src/content/team.ts — Content for The Team page.
 *
 * To add a member: copy one object into the right division array.
 * `photo` — import the image at the top and reference it here,
 *            or set to null for a placeholder avatar.
 * `role`  — their title within the division.
 * `bio`   — one short sentence about them (optional, can be "").
 */

// ── Photo imports ──────────────────────────────────────────────────────────────
// Add your member photos to src/assets/uploads/team/ and import them here.
// Example:
import bXu from '../assets/uploads/the-team/bright.jpg';
import jLee from '../assets/uploads/the-team/jasmine_lee.jpg';
// import aMorgan from '../assets/uploads/the-team/';
import wLee from '../assets/uploads/the-team/wynston.jpg';
import jYoung from '../assets/uploads/the-team/joseph.png';
import aWen from '../assets/uploads/the-team/anson.jpg';
import bBarrios from '../assets/uploads/the-team/bryan.jpg';
import kMolina from '../assets/uploads/the-team/keilah_molina.jpg';
import jMa from '../assets/uploads/the-team/jesslyn.jpg';
import hHan from '../assets/uploads/the-team/haley.png';
import tChu from '../assets/uploads/the-team/tyler.jpg';
import cMorales from '../assets/uploads/the-team/colin.jpg';


import iPan from '../assets/uploads/the-team/ian_pan.jpg';
import aChong from '../assets/uploads/the-team/alex_chong.jpg';


import hSabol from '../assets/uploads/the-team/hakan.png';
import mHannon from '../assets/uploads/the-team/matthew.png';
import tMyat from '../assets/uploads/the-team/thu_htet_myat.jpg';
import zSun from '../assets/uploads/the-team/zonglei_sun.jpg';
import zZhang from '../assets/uploads/the-team/zibo_zhang.png';
import tChen from '../assets/uploads/the-team/timothy.png';
import lZhang from '../assets/uploads/the-team/liang.png';
import wWei from '../assets/uploads/the-team/winter.jpg';



import yWang from '../assets/uploads/the-team/yvonne.jpg';
import gGuan from '../assets/uploads/the-team/gracie.jpg';
import { gunzip } from 'three/examples/jsm/libs/fflate.module.js';


// ── Types ──────────────────────────────────────────────────────────────────────
export interface TeamMember {
  name:  string;
  role:  string;
  bio:   string;
  photo: any | null;
}

export interface Division {
  name:        string;
  description: string;
  members:     TeamMember[];
}

// ── Data ───────────────────────────────────────────────────────────────────────
export const DIVISIONS: Division[] = [
  {
    name: 'Leadership',
    description: 'The captains and leads who keep the team coordinated and the project on track.',
    members: [
      { name: 'Bright Xu', role: 'Mechanical Lead', bio: '', photo: bXu },
      { name: 'Jasmine Lee',   role: 'Electrical Lead',    bio: '.', photo: jLee },
      { name: 'Hakan Sabol',   role: 'Co-Software Lead',    bio: '.', photo: hSabol },
      { name: 'Liang Zhang', role: 'Co-Software Lead',       bio: '', photo: lZhang },
    { name: 'Yvonne', role: 'Co-Operations Lead', bio: '', photo: yWang },
      { name: 'Gracie', role: 'Co-Operations Lead', bio: '', photo: gGuan },
  
    ],
  },
  {
    name: 'Software',
    description: 'Writes the flight stack, autonomy pipeline, and computer vision systems that give our drone its brain.',
    members: [
      { name: 'Hakan Sabol',   role: 'Co-Software Lead',    bio: '.', photo: hSabol },
      { name: 'Liang Zhang', role: 'Co-Software Lead & Computer Vision',       bio: '', photo: lZhang },
      { name: 'Timonthy Chen', role: 'Computer Vision',bio: '', photo: tChen },
      { name: 'Matthew Hannon', role: 'Lead Developer',bio: ' ', photo: mHannon },
      { name: 'Thu Htet Myat', role: 'Telemetry Dashboard & Pilot',bio: '', photo: tMyat },
      { name: 'Zibo Zhang', role: 'Helped with Computer Vision',bio: '', photo: zZhang },
      { name: 'Zonglei Sun', role: 'Mission Mode Code and App Development',bio: '', photo: zSun },
      { name: 'Winter Wei', role: 'Website Building',bio: '', photo: wWei },
      

    ],
  },
  {
    name: 'Mechanical - Electrical',
    description: 'Designs the power distribution, wiring harnesses, and avionics that keep everything running.',
    members: [
      { name: 'Bright Xu', role: 'Mechanical Lead', bio: 'Structural analysis.', photo: bXu },
      { name: 'Jasmine Lee',   role: 'Electrical Lead',    bio: 'Managed all electrical wiring, oversaw the build process, and coordinated team efforts.', photo: jLee },
      { name: 'Aston Morgan',   role: '',    bio: 'Assisted with carbon fiber fabrication and payload sack assembly.', photo: null },
      { name: 'Colin Morales',   role: '',    bio: '', photo: cMorales },

      { name: 'Anson Wen',   role: '',    bio: 'Led overall assembly CAD, designed clamps and detachable leg mounts, and supported carbon fiber and metal fabrication.', photo: aWen },

      { name: 'Bryan Barrios',   role: '',    bio: 'Supported battery mount fabrication, drone assembly, carbon fiber work, and payload sack production.', photo: bBarrios },
      { name: 'Wynston Lee',   role: '',    bio: 'Conducted initial design research and assisted with carbon fiber fabrication and payload sacks.', photo: wLee },
      { name: 'Joseph Young',   role: '',    bio: 'Contributed to payload design and developed the first battery mount for the new batteries.', photo: jYoung },
      { name: 'Tyler Chu',   role: '',    bio: 'Supported payload design and fabricated the leg covers.', photo: tChu },
      { name: 'Haley Han',   role: '',    bio: '', photo: hHan },
      { name: 'Keilah Molina',   role: '',    bio: 'Conducted initial design research and co-designed the original battery mount.', photo: kMolina },
      { name: 'Jesslyn Ma',   role: '',    bio: 'Co-designed the original battery mount and assisted with initial wiring.', photo: jMa },

      { name: 'Ian Pan', role: '',        bio: 'Designed motor mounts, initial leg mounts, and the current battery mount; performed flight testing with software and supported full drone assembly and fabrication.', photo: iPan },
      { name: 'Alex Chong', role: '',        bio: 'Assisted with carbon fiber fabrication and payload sack assembly.', photo: aChong },
    ],
  },
  {
    name: 'Operations',
    description: '',
    members: [
      { name: 'Yvonne', role: 'Co-Operations Lead', bio: 'Outreach and cold emailing for sponsorships.', photo: yWang },
      { name: 'Gracie', role: 'Co-Operations Lead', bio: 'Manages social media of Aero.', photo: gGuan },],
  },
  
];
