
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  serviceType: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // First, save to database
      const { error: dbError } = await supabase
        .from('Form_submissions')
        .insert([
          {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            message: `Service Type: ${data.serviceType}\n\nMessage: ${data.message}`
          }
        ]);

      if (dbError) {
        throw dbError;
      }

      // Then, send emails via Edge Function
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          serviceType: data.serviceType,
          message: data.message
        }
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
        // Don't throw here - form submission was successful, just email failed
        toast({
          title: "Form submitted successfully!",
          description: "We received your message. Email confirmation may be delayed.",
        });
      } else {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you as soon as possible. Check your email for confirmation.",
        });
      }

      return true;
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};
