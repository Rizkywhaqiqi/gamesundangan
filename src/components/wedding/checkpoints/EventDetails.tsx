import { wedding } from "@/lib/wedding-config";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, MapPin } from "lucide-react";

type EventInfo = { label: string; date: string; time: string; venue: string; address: string; maps: string };
function Card({ event }: { event: EventInfo }) {
  return (
    <div className="rounded-2xl border border-accent/30 bg-cream/60 p-4">
      <h4 className="text-center font-serif text-xl font-semibold text-primary">
        {event.label}
      </h4>
      <ul className="mt-3 space-y-2 text-sm">
        <li className="flex items-start gap-2"><CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />{event.date}</li>
        <li className="flex items-start gap-2"><Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" />{event.time}</li>
        <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-foreground" /><span>{event.venue}<br/><span className="text-xs text-muted-foreground">{event.address}</span></span></li>
      </ul>
      <Button asChild variant="outline" size="sm" className="mt-3 w-full">
        <a href={event.maps} target="_blank" rel="noreferrer">Buka Google Maps</a>
      </Button>
    </div>
  );
}

export function EventDetails() {
  return (
    <div className="space-y-3">
      <Card event={wedding.akad} />
      <Card event={wedding.resepsi} />
    </div>
  );
}
