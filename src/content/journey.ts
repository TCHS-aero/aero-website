import design1 from '../assets/uploads/our-journey/drone mechanism.png';
import design2 from '../assets/uploads/our-journey/3d modle drone.png';
import design3 from '../assets/uploads/our-journey/designing.jpg';
import design4 from '../assets/uploads/our-journey/bracket-cad.png';

import wiring from '../assets/uploads/our-journey/build 1/wiring.JPG';
import threeD_print from '../assets/uploads/our-journey/build 1/3d print cad.JPG';
import battery_holder from '../assets/uploads/our-journey/build 1/battery holder.JPG';
import motor_holder from '../assets/uploads/our-journey/build 1/motor holder.JPG';
import soldering from '../assets/uploads/our-journey/build 1/soldering.JPG';
import wiring_2 from '../assets/uploads/our-journey/build 1/wiring_2.JPG';



import battery_pack from '../assets/uploads/our-journey/build 2/battery-pack.JPG';
import drone_assemble from '../assets/uploads/our-journey/build 2/drone-assembleStage.JPG';
import motor_assemble from '../assets/uploads/our-journey/build 2/motor-assemble.JPG';
import motor_assembled from '../assets/uploads/our-journey/build 2/motor_assembled.JPG';

import test_map from '../assets/uploads/our-journey/test-laps.png';
import test_ppl from '../assets/uploads/our-journey/test_ppl.JPG';
import test from '../assets/uploads/our-journey/test.JPG';



// ── journey data ──────────────────────────────────────────────────────────────
export interface journeyPhase {
  title:   string;
  image:   any[];
  video?: string | null;
  alt:     string;
  body:    string[];   
}

export const journey: journeyPhase[] = [
  {
    title: 'Design',
    image: [design1,design2,design3,design4],
    alt:   'Team members gathered around CAD models on a laptop during the design phase',
    body: [
      'Before a single part is cut, the team defines the mission requirements from the SUAS rulebook: payload mass, minimum flight time, waypoint accuracy, and the imagery the drone must capture.',
      'From those targets we run trade studies comparing airframe layouts, motor and propeller combinations, and battery chemistries. The winning configuration then gets modeled in full 3D CAD, every bracket and wire run included, so weight and center-of-gravity problems surface on screen instead of on the flight line.',
    ],
  },
  {
    title: 'Build 1',
    image: [threeD_print,battery_holder,motor_holder, wiring,soldering,wiring_2],
    alt:   'Student soldering the electronics harness for the first prototype on a workbench',
    body: [
      'Build 1 is where the theory meets reality.',
      'To start the build of the drone, the team 3D printed cad models of clamps, motor mounts, leg mounts, leg tpu covers. Then they wired the electrical systems independently, made the payload sacks, drilled holes and cutted the carbon fiber plates for the drone.',
    ],
  },
  {
    title: 'Build 2',
    image: [battery_pack,drone_assemble,motor_assemble,motor_assembled],
    alt:   '',
    body: [
      'Once the team printed all the essential components, it\'s time to assemble. ',
      'The team first screwed on the mounts to connect the arms to the motors. They also clamped to the two carbon fiber plates, and screwed on the latches to the clamps. They screwed the leg mounts to the plates as well, and attached the leg coveres. For electronics, the team scrwed them to the plates and made battery mountes and screwed them to the plates. To secure them, the team used zip ties. Then, they wired all the electronics together. For the motors, the team made customed prop mounts to attach to the props to the motors. ',
    ],
  },
  {
    title: 'Flight Testing',
    image: [test_map,test_ppl,test],
    video: '/uploads/flight_test_video.mp4',
    alt:   '',
    body: [
      'After the drone was fully built, it\'s time to test!',
      'Flight testing began with a successful 1 mile flight, proving the airframe and power systems were fundamentally sound. Subsequent sessions surfaced the challenges that only real-world conditions can reveal — an unexpected wind gust draining the battery mid-flight, and a series of motor and propeller checks that exposed how critical prop inspection is before every single flight.',

'Each setback became a lesson the team documented and corrected. By the final sessions, pre-flight checklists were tightened and the crew had built the kind of operational discipline that separates a hobby build from a competition aircraft. The knowledge gained on the field directly shaped every decision made going into the final build before the competition begin.',
    ],
  },
];
