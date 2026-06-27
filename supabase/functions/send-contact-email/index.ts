
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resendApiKey = Deno.env.get("RESEND_API_KEY") ?? "d75007e8e45ca99a46d4040f801a6ddf8052db9e65ae5b6d2a9b39a42f97caf8";
const resend = new Resend(resendApiKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  serviceType: string;
  message: string;
  attachmentUrl?: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, serviceType, message, attachmentUrl }: ContactEmailRequest = await req.json();

    console.log('Processing contact form submission:', { firstName, lastName, email, serviceType, hasAttachment: !!attachmentUrl });

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "ET Linguistic <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting ET Linguistic!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; margin-bottom: 20px;">Thank you for your message!</h2>
          
          <p>Dear ${firstName} ${lastName},</p>
          
          <p>We have received your message and will get back to you as soon as possible. Here's a summary of what you sent us:</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="margin-left: 20px;">${message}</p>
            ${attachmentUrl ? `<p><strong>Attachment:</strong> <a href="${attachmentUrl}" target="_blank">View attached file</a></p>` : ''}
          </div>
          
          <p>Our team of professional linguists will review your request and respond within 24 hours. If your project is urgent, please don't hesitate to call us at +1 (555) 123-4567.</p>
          
          <p>Best regards,<br>
          The ET Linguistic Team</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            ET Linguistic - Professional Translation and Linguistic Services<br>
            Email: info@etlinguistic.com | Phone: +1 (555) 123-4567
          </p>
        </div>
      `,
    });

    console.log('User confirmation email response:', userEmailResponse);

    // Send notification email to business
    const businessEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["egyed.tamas456@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #dc2626; margin-bottom: 20px;">New Contact Form Submission</h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
            <p><strong>Message:</strong></p>
            <p style="margin-left: 20px; white-space: pre-wrap;">${message}</p>
            ${attachmentUrl ? `<p><strong>Attachment:</strong> <a href="${attachmentUrl}" target="_blank">View attached file</a></p>` : ''}
          </div>
          
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent through the ET Linguistic contact form.
          </p>
        </div>
      `,
    });

    console.log('Business notification email response:', businessEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true, 
        userEmailResponse, 
        businessEmailResponse 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
