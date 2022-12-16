'use client';

import { useState } from 'react';

export default function Sidebar() {
  const [active, setActive] = useState('Button');
  const [list, setList] = useState([
    {
      title: 'Components',
      items: ['Button', 'Spinner']
    }
  ]);

  const isHTMLElementInView = (element: HTMLElement) => {
    const rect = element?.getBoundingClientRect();

    if (!rect) return;
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  };

  return (
    <div className="sticky top-0 h-screen p-6">
      {list.map((sub, subkey) => (
        <div className="List" key={subkey}>
          <p className="mb-4 font-bold text-md">{sub.title}</p>
          <div className="flex flex-col">
            {sub.items.map((entry, entrykey) => (
              <div
                key={entrykey}
                className={`anchor py-2 pl-4 text-sm border-l ${
                  active === entry ? 'border-primary-500' : 'border-slate-700'
                }`}
              >
                <a
                  key={entrykey}
                  className={`transition ${
                    active === entry
                      ? 'text-primary-500'
                      : 'visible:text-primary-500 hover:text-primary-500'
                  }`}
                  href={`#${entry}`}
                >
                  {entry}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
