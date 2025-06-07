
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  serviceType: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, serviceType, message }: ContactEmailRequest = await req.json();
    
    console.log('Processing contact form submission:', { firstName, lastName, email, serviceType });

    // Send confirmation email to the user
    const userEmailResponse = await resend.emails.send({
      from: "ET Linguistic <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting ET Linguistic!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">ET Linguistic</h1>
            <p style="color: white; margin: 10px 0 0 0; opacity: 0.9;">Professional Translation Services</p>
          </div>
          
          <h2 style="color: #333; margin-bottom: 20px;">Thank you for reaching out, ${firstName}!</h2>
          
          <p style="color: #666; line-height: 1.6; margin-bottom: 20px;">
            We have received your inquiry regarding <strong>${serviceType || 'our services'}</strong> and appreciate your interest in ET Linguistic.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="margin: 0 0 10px 0; color: #333;">What happens next?</h3>
            <ul style="color: #666; line-height: 1.8; margin: 0; padding-left: 20px;">
              <li>Our team will review your requirements within 24 hours</li>
              <li>We'll prepare a customized quote for your project</li>
              <li>You'll receive a detailed proposal via email</li>
              <li>We'll schedule a consultation call if needed</li>
            </ul>
          </div>
          
          <p style="color: #666; line-height: 1.6; margin: 20px 0;">
            In the meantime, feel free to explore our website to learn more about our comprehensive translation and interpretation services.
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <p style="color: #666; margin: 0;">Need immediate assistance?</p>
            <p style="color: #667eea; font-weight: bold; margin: 5px 0 0 0;">📞 +1 (555) 123-4567</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #999; font-size: 14px; text-align: center; margin: 0;">
            Best regards,<br>
            <strong>The ET Linguistic Team</strong><br>
            Professional Translation & Interpretation Services
          </p>
        </div>
      `,
    });

    // Send notification email to your business email
    const adminEmailResponse = await resend.emails.send({
      from: "ET Linguistic Contact Form <onboarding@resend.dev>",
      to: ["egyed.tamas456@gmail.com"], // Updated to your specific email address
      subject: `New Contact Form Submission - ${serviceType || 'General Inquiry'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #667eea; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🆕 New Contact Form Submission</h1>
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #333; margin: 0 0 15px 0;">Contact Information</h2>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 5px 0;"><strong>Service Type:</strong> ${serviceType || 'Not specified'}</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #333; margin: 0 0 15px 0;">Message</h3>
            <p style="color: #666; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #e8f4f8; border-radius: 8px;">
            <p style="margin: 0; color: #0066cc; font-size: 14px;">
              💡 <strong>Quick Actions:</strong> Reply to this email to respond directly to ${firstName}, or log into your CRM to track this lead.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { userEmailResponse, adminEmailResponse });

    return new Response(
      JSON.stringify({ 
        success: true, 
        userEmail: userEmailResponse,
        adminEmail: adminEmailResponse 
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
