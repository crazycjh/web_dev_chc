import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'self',
    title: 'Dictation Language Learning',
    description:
      'Choose a video and improve your listening skills + through sentence-by-sentence dictation practice',
    imgSrc: '/static/images/projects/dictation.png',
    repo: 'crazycjh/language-learning-transcribe',
    builtWith: ['Next.js', 'Tailwind', 'Typescript', 'Cloudflare'],
  },
];

export default projectsData;
