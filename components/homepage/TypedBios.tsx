import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/ui/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I'm <b className="font-medium">Andy</b>, your friendly neighborhood developer{' '}
          <Twemoji emoji="technologist" />.
        </li>
        <li>
          I live in <b className="font-medium">Taiwan</b> <Twemoji emoji="flag-taiwan" />.
        </li>
        <li>
          My background: <b className="font-medium">EE → CS</b> (Bachelor to Master's).
        </li>
        <li>
          I code mainly with <b className="font-medium">Vue/Nuxt & Next.js</b>.
        </li>
        <li>
          I love automating boring stuff with <b className="font-medium">n8n</b> and scripts.
        </li>
        <li>
          I deploy on <b className="font-medium">Cloudflare</b> <Twemoji emoji="cloud" />.
        </li>
        <li>
          I write to <b className="font-medium">share what I learn</b> and grow together.
        </li>
        <li>
          Coffee <Twemoji emoji="hot-beverage" /> fuels my code.
        </li>
        <li>
          I'm into <b className="font-medium">side projects</b> and experiments.
        </li>
        <li>
          Learning new tech is my <Twemoji emoji="fire" /> passion.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;
