import { Education, Highlight, NavItem, Profile } from './models';

export const PROFILE: Profile = {
  name: 'Navneet Kumar',
  title: 'Senior Software Engineer',
  specialization: 'Java · Spring Boot · Distributed Systems · Cloud',
  currentRole: 'Currently at Miratech, building for Five9',
  headline: 'Senior Software Engineer building scalable backend systems.',
  intro:
    '9 years of experience designing and building Java and Spring Boot systems across distributed ' +
    'platforms, investment management, digital banking, payments and enterprise applications.',
  about: [
    'I’m a backend engineer who has spent the last nine years building Java and Spring Boot systems ' +
      'for businesses where reliability is not optional — contact-center platforms handling real-time ' +
      'voice and messaging, investment management systems processing portfolio and market data, and ' +
      'digital banking and payment flows.',
    'Most of my work is in distributed systems: designing microservices on Kubernetes and AWS, ' +
      'connecting them with gRPC, REST and Kafka, and owning features end to end — from system design ' +
      'and code review through testing and production support.',
    'At PureSoftware I led a team of five engineers, setting technical direction for a digital banking ' +
      'platform and mentoring junior developers on design patterns and testing practices.',
  ],
  email: 'nitume00@gmail.com',
  linkedin: {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/navneeet-kumar-96120763',
    display: 'linkedin.com/in/navneeet-kumar-96120763',
  },
  github: {
    label: 'GitHub',
    href: 'https://github.com/nitume00',
    display: 'github.com/nitume00',
  },
  resumeUrl: 'resume/Navneet_Kumar_Senior_Software_Engineer.pdf',
  photo: { src: 'images/navneet-kumar.jpg', alt: 'Navneet Kumar, Senior Software Engineer' },
  heroSkills: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'gRPC', 'AWS', 'Kubernetes'],
};

export const HIGHLIGHTS: readonly Highlight[] = [
  { value: '9+', label: 'Years experience', detail: 'Building enterprise Java systems since 2016' },
  { value: '5', label: 'Engineers led', detail: 'Technical lead on the Artha banking platform' },
  { value: '95%', label: 'Unit test coverage', detail: 'Raised on BlackRock’s Astra platform' },
  { value: '5', label: 'Industry domains', detail: 'Contact center, investments, banking, identity, lab compliance' },
];

export const EDUCATION: readonly Education[] = [
  {
    degree: 'Master of Computer Applications',
    short: 'MCA',
    institution: 'Maharshi Dayanand University, Rohtak',
    year: 2015,
  },
  {
    degree: 'Bachelor of Computer Applications',
    short: 'BCA',
    institution: 'Maharshi Dayanand University, Rohtak',
    year: 2009,
  },
];

export const NAV_ITEMS: readonly NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

