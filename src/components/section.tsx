'use client';

import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, title, subtitle, id }) => {
  return (
    <section id={id} className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400">{subtitle}</p>
      </div>
      {children}
    </section>
  );
};

export { Section };
