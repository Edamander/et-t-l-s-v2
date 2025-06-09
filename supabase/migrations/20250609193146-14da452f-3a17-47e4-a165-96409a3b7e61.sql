
-- Create a storage bucket for contact form attachments
INSERT INTO storage.buckets (id, name, public) 
VALUES ('contact-attachments', 'contact-attachments', true);

-- Create policy to allow anyone to upload files to contact-attachments bucket
CREATE POLICY "Anyone can upload contact attachments" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'contact-attachments');

-- Create policy to allow anyone to view contact attachments
CREATE POLICY "Anyone can view contact attachments" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'contact-attachments');

-- Add attachment_url column to form_submissions table
ALTER TABLE form_submissions 
ADD COLUMN attachment_url TEXT;
