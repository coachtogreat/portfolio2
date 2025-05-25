import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { ClipLoader } from 'react-spinners';
import { z } from 'zod';

import { Section } from '@/components/layouts/section';
import { Button } from '@/components/ui/button';
import { Form, FormField } from '@/components/ui/form';
import FormStatusDialog from '@/components/ui/form-status-dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'Name must be at most 50 characters long'),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Please enter a valid email address'),
  message: z
    .string({
      required_error: 'Message is required',
    })
    .min(20, 'Message must be at least 20 characters long')
    .max(500, 'Message must be at most 500 characters long'),
});

const ContactForm = () => {
  const [loading, setLoading] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);
  const [variant, setVariant] = React.useState<'success' | 'error'>('success');

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      form.reset();
      setVariant('success');
    } catch (error) {
      console.error('Error sending email:', error);
      setVariant('error');
    } finally {
      setShowDialog(true);
      setLoading(false);
    }
  }

  return (
    <div className='w-full'>
      <Section id='contacts' title='' subtitle='' className=''>
        <div className='flex flex-col items-center justify-center gap-8 md:flex-row'>
          <div className='text-center md:text-left'>
            <h2 className='text-display-sm md:text-display-2xl mb-4 font-extrabold text-neutral-100'>
              Contact Me
            </h2>
            <p className='text-sm-regular md:text-md text-neutral-200'>
              Feel free to drop a message for any inquiries or collaborations.
            </p>
          </div>
          <div className='h-[302px] w-full rounded-3xl bg-[#262626] pt-6 md:h-[420px] md:w-[480px] md:rounded-4xl'>
            <Form {...form}>
              <form
                className='h-full w-full space-y-4 p-4'
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <FormField
                  control={form.control}
                  name='name'
                  render={({ field }) => (
                    <Input
                      disabled={loading}
                      placeholder='Name'
                      className='w-full bg-black placeholder:text-white'
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                      }}
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name='email'
                  render={({ field }) => (
                    <Input
                      disabled={loading}
                      placeholder='Email'
                      className='w-full bg-black placeholder:text-white'
                      {...field}
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name='message'
                  render={({ field }) => (
                    <Textarea
                      disabled={loading}
                      placeholder='Message'
                      className='w-full bg-black placeholder:text-white'
                      {...field}
                    />
                  )}
                />

                <Button
                  type='submit'
                  disabled={loading}
                  className='md:text-md w-full md:font-semibold'
                >
                  {loading ? <ClipLoader size={20} /> : 'Send'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </Section>
      <FormStatusDialog
        open={showDialog}
        variant={variant}
        loading={loading}
        onOpenChange={setShowDialog}
      />
    </div>
  );
};

export default ContactForm;
