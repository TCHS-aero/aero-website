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
// import namespace from 'path';

// Leadership
import yWang from '../assets/uploads/the-team/yWang.jpg';
import gGuan from '../assets/uploads/the-team/gGuan.jpg';
import mHannon from '../assets/uploads/the-team/mHannon.jpg';
import tMyat from '../assets/uploads/the-team/tMyat.jpg';
import iaPan from '../assets/uploads/the-team/iaPan.jpg';
import jLee from '../assets/uploads/the-team/jLee.jpg';

// Software
import aNiu from '../assets/uploads/the-team/aNiu.jpg';
import bWong from '../assets/uploads/the-team/bWong.jpg';
import cQian from '../assets/uploads/the-team/cQian.jpg';
import dDu from '../assets/uploads/the-team/dDu.png';
import dFong from '../assets/uploads/the-team/dFong.jpg';
import dKim from '../assets/uploads/the-team/dKim.jpg';
import eWu from '../assets/uploads/the-team/eWu.jpg';
// import iZuo from '../assets/uploads/the-team/iZuo.jpg';
import jWong from '../assets/uploads/the-team/jWong.jpg';
import jDiep from '../assets/uploads/the-team/jDiep.jpg';
import jTang from '../assets/uploads/the-team/jTang.png';
import pTo from '../assets/uploads/the-team/pTo.jpg';
import zWu from '../assets/uploads/the-team/zWu.jpeg';
import zSun from '../assets/uploads/the-team/zSun.jpg';

// Mechatronics
import aTeng from '../assets/uploads/the-team/aTeng.jpg';
import aHoang from '../assets/uploads/the-team/aHoang.jpg';
import aChoi from '../assets/uploads/the-team/aChoi.png';
// import eLee from '../assets/uploads/the-team/eLee.jpg';
import fTran from '../assets/uploads/the-team/fTran.png';
import hMau from '../assets/uploads/the-team/hMau.jpg';
import ivPan from '../assets/uploads/the-team/ivPan.jpg';
import jChen from '../assets/uploads/the-team/jChen.jpg';
import jTamashiro from '../assets/uploads/the-team/jTamashiro.jpg';
import jHuang from '../assets/uploads/the-team/jHuang.jpeg';
import kChien from '../assets/uploads/the-team/kChien.jpg';
import nLam from '../assets/uploads/the-team/nLam.jpg';
import sWang from '../assets/uploads/the-team/sWang.png';
import wLee from '../assets/uploads/the-team/wLee.jpg';


// Operations
import eHe from '../assets/uploads/the-team/eHe.jpg';
import hBai from '../assets/uploads/the-team/hBai.jpg';
import jWang from '../assets/uploads/the-team/jWang.jpg';
import jKwan from '../assets/uploads/the-team/jKwan.jpg';
import kChu from '../assets/uploads/the-team/kChu.jpg';
import lLee from '../assets/uploads/the-team/lLee.png';
import mSiah from '../assets/uploads/the-team/mSiah.jpg';

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
    description: 'The captains and leads who keep the team coordinated and the projects on track.',
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
    description: 'Writes the flight stack, autonomy pipeline, and computer vision systems that give our drone its brain. Tries their hand in seperate applications to ease the development process.',
    members: [
      { name: 'Arthur Niu',   role: '',    bio: '', photo: aNiu },
      { name: 'Brian Wong',   role: '',    bio: '', photo: bWong },
      { name: 'Claire Qian', role: '', bio: '', photo: cQian },
      { name: 'Dexter Du', role: '', bio: '', photo: dDu },
      { name: 'Duke Fong', role: '', bio: '', photo: dFong },
      { name: 'Dustin Kim', role: '', bio: '', photo: dKim },
      { name: 'Ethan Wu', role: '', bio: '', photo: eWu },
      { name: 'Isabella Zuo',   role: '',    bio: '', photo: '' },
      { name: 'Jayden Wong',   role: '',    bio: '', photo: jWong },
      { name: 'John Diep', role: '', bio: '', photo: jDiep },
      { name: 'Julien Tang', role: '', bio: '', photo: jTang },
      { name: 'Priscilla To', role: '', bio: '', photo: pTo },
      { name: 'Zacheus Wu', role: '', bio: '', photo: zWu },
      { name: 'Zonglei Sun', role: '', bio: '', photo: zSun },
    ],
  },
  {
    name: 'Mechatronics',
    description: 'Designs the power distribution, wiring harnesses, and avionics that keep everything running.',
    members: [      
      { name: 'Aaron Teng',   role: '',    bio: '', photo: aTeng },
      { name: 'Andy Hoang',   role: '',    bio: '', photo: aHoang },
      { name: 'Annie Choi', role: '', bio: '', photo: aChoi },
      { name: 'Ethan Y. Lee', role: '', bio: '', photo: '' },
      { name: 'Felix Tran', role: '', bio: '', photo: fTran },
      { name: 'Holly Mau', role: '', bio: '', photo: hMau },
      { name: 'Ivan Pan', role: '', bio: '', photo: ivPan },
      { name: 'Jackson Chen',   role: '',    bio: '', photo: jChen },
      { name: 'Jon Tamashiro',   role: '',    bio: '', photo: jTamashiro },
      { name: 'Joseph Huang', role: '', bio: '', photo: jHuang },
      { name: 'Kaden Chien', role: '', bio: '', photo: kChien },
      { name: 'Nicholas Lam', role: '', bio: '', photo: nLam },
      { name: 'Skyler Wang', role: '', bio: '', photo: sWang },
      { name: 'Wynston Lee', role: '', bio: '', photo: wLee },
    ],
  },
  {
    name: 'Operations',
    description: 'Manages papers, sponsorhips, team bonding, and fundraising events; organizing ways for Aero to take part in the community.',
    members: [
      { name: 'Emily He',   role: '',    bio: '', photo: eHe },
      { name: 'Howard Bai',   role: '',    bio: '', photo: hBai },
      { name: 'Jeffy Wang', role: '', bio: '', photo: jWang },
      { name: 'Jeremiah Kwan', role: '', bio: '', photo: jKwan },
      { name: 'Kaitlyn Chu', role: '', bio: '', photo: kChu },
      { name: 'Landon Lee', role: '', bio: '', photo: lLee },
      { name: 'Mason Siah', role: '', bio: '', photo: mSiah },
    ],
  },
  
];
