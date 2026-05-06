'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observers = new Map();
    
    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    });

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Offset for sticky headers
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-hide">
      <div className="flex flex-col gap-1 border-l border-neutral-200 py-2 dark:border-neutral-800">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleClick(e, item.id)}
            className={cn(
              "relative block py-1.5 transition-all duration-200",
              item.level === 1 ? "pl-4 text-sm font-semibold" : "pl-8 text-[13px] font-medium",
              activeId === item.id 
                ? "text-primary opacity-100" 
                : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 opacity-60 hover:opacity-100"
            )}
          >
            {activeId === item.id && (
              <span className="absolute left-0 top-0 h-full w-[2px] bg-primary transition-all duration-200" />
            )}
            {item.text}
          </a>
        ))}
      </div>
    </nav>
  );
}
