import Image from 'next/image';
import React from 'react';

import { Button } from './button';
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './dialog';

interface FormStatusDialogProps extends React.ComponentProps<typeof Dialog> {
  variant: 'success' | 'error';
  loading?: boolean;
}

const FormStatusDialog: React.FC<FormStatusDialogProps> = ({
  variant,
  loading,
  ...props
}) => {
  return (
    <Dialog {...props}>
      <DialogContent className='max-w-md w-full'>
        <DialogHeader 
          className='relative h-48 bg-gradient-to-br from-[#0093DD]/90 to-[#46AEE2]/90 rounded-t-2xl shadow-lg flex items-center justify-center'
        >
          <Image
            src={
              variant === 'success'
                ? '/icons/icon-form-message-success.svg'
                : '/icons/icon-form-message-error.svg'
            }
            alt={variant === 'success' ? 'success' : 'error'}
            width={220}
            height={242}
            className='animate-bounce-slow scale-125 md:scale-150'
          />
        </DialogHeader>
        <DialogBody className='bg-neutral-900 rounded-b-2xl p-6 text-center'>
          <DialogTitle className='text-2xl font-bold text-white mb-2'>
            {variant === 'success'
              ? 'Message Sent Successfully!'
              : 'Failed to Send Message'}
          </DialogTitle>
          <DialogDescription className='text-neutral-400 mb-6'>
            {variant === 'success'
              ? 'Thank you for reaching out. Our team will get back to you soon.'
              : 'Please try again later. If the issue persists, check your internet connection.'}
          </DialogDescription>
          <DialogClose asChild>
            <Button 
              className='w-full bg-gradient-to-r from-[#0093DD] to-[#46AEE2] hover:from-[#0085C9] hover:to-[#3F9ED0] transition-all duration-300'
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <span className="mr-2">Loading...</span>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>
              ) : (
                'Return Home'
              )}
            </Button>
          </DialogClose>
        </DialogBody>
      </DialogContent>
    </Dialog>
  );
};

export default FormStatusDialog;
