
CREATE TABLE public.rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL CHECK (char_length(guest_name) BETWEEN 1 AND 80),
  attendance TEXT NOT NULL CHECK (attendance IN ('attending','not_attending')),
  party_size INT NOT NULL DEFAULT 1 CHECK (party_size BETWEEN 1 AND 10),
  message TEXT CHECK (message IS NULL OR char_length(message) <= 500),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.rsvps TO anon;
GRANT INSERT ON public.rsvps TO authenticated;
GRANT ALL ON public.rsvps TO service_role;
ALTER TABLE public.rsvps ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone_can_rsvp" ON public.rsvps FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.wishes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL CHECK (char_length(guest_name) BETWEEN 1 AND 80),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 1 AND 500),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.wishes TO anon;
GRANT SELECT, INSERT ON public.wishes TO authenticated;
GRANT ALL ON public.wishes TO service_role;
ALTER TABLE public.wishes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone_can_read_wishes" ON public.wishes FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "anyone_can_write_wishes" ON public.wishes FOR INSERT TO anon, authenticated WITH CHECK (true);
