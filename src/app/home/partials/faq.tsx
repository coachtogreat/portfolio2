import React from 'react';

import { Section } from '@/components/layouts/section';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { FAQData } from '@/constants/faq-data';

const FAQ = () => {
  return (
    <Section
      title='Frequently Asked Question'
      subtitle='Find answers to some of the frequently asked question'
      id='faq'
    >
      <Accordion type='single' collapsible className='w-full'>
        {FAQData.map((item, index) => (
          <AccordionItem key={index} value={index.toString()}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent className='w-full text-white'>
              {item.description}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
};

export default FAQ;
