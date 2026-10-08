import { SkillGroup } from './models';

export const SKILL_GROUPS: readonly SkillGroup[] = [
  { label: 'Languages', skills: ['Java', 'SQL', 'TypeScript', 'JavaScript'] },
  {
    label: 'Backend',
    skills: ['Spring Boot', 'Spring MVC', 'Microservices', 'REST', 'gRPC', 'Protocol Buffers', 'HTTP/2'],
  },
  { label: 'Data & Messaging', skills: ['Kafka', 'Redis', 'MongoDB', 'MySQL'] },
  { label: 'Cloud & DevOps', skills: ['AWS', 'Kubernetes', 'Docker', 'CI/CD'] },
  { label: 'Frontend', skills: ['Angular', 'RxJS'] },
  {
    label: 'Architecture',
    skills: [
      'Distributed Systems',
      'Event-Driven Architecture',
      'High Availability',
      'Caching',
      'Database Sharding',
      'SOLID',
      'Design Patterns',
      'Observability',
    ],
  },
  { label: 'Testing', skills: ['JUnit', 'Mockito', 'SonarQube', 'TDD', 'Code Review'] },
];
