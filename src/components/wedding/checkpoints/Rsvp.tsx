import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { submitRsvp } from "@/lib/wedding.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function RsvpForm({ defaultName }: { defaultName: string }) {
  const submit = useServerFn(submitRsvp);
  const [name, setName] = useState(defaultName);
  const [attendance, setAttendance] = useState<"attending" | "not_attending">("attending");
  const [partySize, setPartySize] = useState(1);
  const [message, setMessage] = useState("");
  const [done, setDone] = useState(false);

  const mutation = useMutation({
    mutationFn: () =>
      submit({
        data: {
          guest_name: name.trim(),
          attendance,
          party_size: partySize,
          message: message.trim() || null,
        },
      }),
    onSuccess: () => {
      toast.success("Terima kasih, konfirmasi terkirim!");
      setDone(true);
    },
    onError: (e: Error) => toast.error(e.message || "Gagal mengirim RSVP"),
  });

  if (done) {
    return (
      <div className="rounded-2xl bg-primary/10 p-4 text-center text-sm">
        <p className="font-serif text-lg">Terima kasih 💐</p>
        <p className="mt-1 text-muted-foreground">Konfirmasi kehadiranmu sudah kami terima.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); mutation.mutate(); }}
      className="space-y-3 text-sm"
    >
      <div>
        <Label htmlFor="rsvp-name">Nama Tamu</Label>
        <Input id="rsvp-name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={80} />
      </div>
      <div>
        <Label>Kehadiran</Label>
        <div className="mt-1 grid grid-cols-2 gap-2">
          {(["attending","not_attending"] as const).map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => setAttendance(v)}
              className={`rounded-lg border px-3 py-2 text-xs font-medium transition ${
                attendance === v ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background"
              }`}
            >
              {v === "attending" ? "Hadir ❤" : "Berhalangan"}
            </button>
          ))}
        </div>
      </div>
      <div>
        <Label htmlFor="rsvp-party">Jumlah Tamu</Label>
        <Input
          id="rsvp-party"
          type="number"
          min={1}
          max={10}
          value={partySize}
          onChange={(e) => setPartySize(Math.min(10, Math.max(1, Number(e.target.value) || 1)))}
        />
      </div>
      <div>
        <Label htmlFor="rsvp-msg">Pesan (opsional)</Label>
        <Textarea id="rsvp-msg" value={message} onChange={(e) => setMessage(e.target.value)} maxLength={500} rows={3} />
      </div>
      <Button type="submit" className="w-full" disabled={mutation.isPending || !name.trim()}>
        {mutation.isPending ? "Mengirim..." : "Kirim Konfirmasi"}
      </Button>
    </form>
  );
}
