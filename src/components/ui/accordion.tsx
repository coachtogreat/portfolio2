'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { PlusIcon, MinusIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('mb-4 last:mb-0 md:mb-8', className)}
      {...props}
    >
      <div className='relative rounded-2xl bg-gradient-to-r from-[#dc49a6] to-[#8746eb] p-[1px] md:rounded-4xl'>
        <div className='rounded-[inherit] bg-black p-4 text-white md:p-6'>
          {children}
        </div>
      </div>
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group/trigger flex flex-1 cursor-pointer items-start justify-between gap-4 text-left transition-all',
          '!text-md-semibold md:text-lg-semibold hover:text-primary-200 text-white',
          className
        )}
        {...props}
      >
        <div className='flex-1 text-left'>{children}</div>
        <div className='shrink-0'>
          <PlusIcon
            color='#ffffff'
            className='group-data-[state=open]/trigger:hidden'
          />
          <MinusIcon
            color='#ffffff'
            className='group-data-[state=closed]/trigger:hidden'
          />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className={cn(
        'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden',
        className
      )}
      {...props}
    >
      <div className='text-sm-regular mt-4 text-white'>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
