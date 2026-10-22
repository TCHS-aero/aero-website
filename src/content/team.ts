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
import aMorgan from '../assets/uploads/the-team/aston.jpg';
import wLee from '../assets/uploads/the-team/wynston.jpg';
import jYoung from '../assets/uploads/the-team/joseph.png';
import aWen from '../assets/uploads/the-team/anson.jpg';
import bBarrios from '../assets/uploads/the-team/bryan.JPG';
import kMolina from '../assets/uploads/the-team/keilah_molina.jpg';

import jMa from '../assets/uploads/the-team/jesslyn.jpg';
import hHan from '../assets/uploads/the-team/haley.png';
import tChu from '../assets/uploads/the-team/tyler.jpg';
import cMorales from '../assets/uploads/the-team/colin.jpg';


import iPan from '../assets/uploads/the-team/ian_pan.jpg';
import aChong from '../assets/uploads/the-team/alex_chong.JPG';


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
      { name: 'Jasmine Lee',   role: 'Co-Mechatronics Lead',    bio: '', photo: jLee },
      { name: 'Ian Pan',   role: 'Co-Mechatronics Lead',    bio: '', photo: iaPan },
      { name: 'Yvonne Wang', role: 'Co-Operations Lead', bio: '', photo: yWang },
      { name: 'Gracie Guan', role: 'Co-Operations Lead', bio: '', photo: gGuan },
      { name: 'Thu Htet Myat', role: 'Co-Software Lead', bio: '', photo: tMyat },
      { name: 'Matthew Hannon', role: 'Co-Software Lead', bio: '', photo: mHannon },
  
    ],
  },
  {
    name: 'Software',
    description: 'Writes the flight stack, autonomy pipeline, and computer vision systems that give our drone its brain.',
    members: [

    ],
  },
  {
    name: 'Mechatronics',
    description: 'Designs the power distribution, wiring harnesses, and avionics that keep everything running.',
    members: [      

    ],
  },
  {
    name: 'Operations',
    description: '',
    members: [

    ],
  },
  
];
