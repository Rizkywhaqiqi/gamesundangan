
-- Replace permissive WITH CHECK (true) policies with validated checks.

DROP POLICY IF EXISTS anyone_can_rsvp ON public.rsvps;
CREATE POLICY anyone_can_rsvp ON public.rsvps
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(btrim(guest_name)) BETWEEN 1 AND 120
    AND attendance IN ('yes', 'no', 'maybe')
    AND party_size BETWEEN 1 AND 20
    AND (message IS NULL OR length(message) <= 1000)
  );

DROP POLICY IF EXISTS anyone_can_write_wishes ON public.wishes;
CREATE POLICY anyone_can_write_wishes ON public.wishes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(btrim(guest_name)) BETWEEN 1 AND 120
    AND length(btrim(message)) BETWEEN 1 AND 1000
  );
