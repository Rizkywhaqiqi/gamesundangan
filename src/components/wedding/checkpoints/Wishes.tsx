import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { submitWish, listWishes } from "@/lib/wedding.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export function Wishes({ defaultName }: { defaultName: string }) {
  const submit = useServerFn(submitWish);
  const list = useServerFn(listWishes);
  const qc = useQueryClient();
  const [name, setName] = useState(defaultName);
  const [message, setMessage] = useState("");

  const q = useQuery({
    queryKey: ["wishes"],
    queryFn: () => list(),
  });

  const mutation = useMutation({
    mutationFn: () => submit({ data: { guest_name: name.trim(), message: message.trim() } }),
    onSuccess: () => {
      toast.success("Ucapanmu terkirim, terima kasih!");
      setMessage("");
      qc.invalidateQueries({ queryKey: ["wishes"] });
    },
    onError: (e: Error) => toast.error(e.message || "Gagal mengirim ucapan"),
  });

  return (
    <div className="space-y-4 text-sm">
      <form
        onSubmit={(e) => { e.preventDefault(); mutation.mutate(); }}
        className="space-y-2 rounded-2xl border border-accent/30 bg-cream/50 p-3"
      >
        <div>
          <Label htmlFor="wish-name">Nama</Label>
          <Input id="wish-name" value={name} onChange={(e) => setName(e.target.value)} required maxLength={80} />
        </div>
        <div>
          <Label htmlFor="wish-msg">Ucapan &amp; Doa</Label>
          <Textarea id="wish-msg" value={message} onChange={(e) => setMessage(e.target.value)} required maxLength={500} rows={3} />
        </div>
        <Button type="submit" className="w-full" disabled={mutation.isPending || !name.trim() || !message.trim()}>
          {mutation.isPending ? "Mengirim..." : "Kirim Ucapan"}
        </Button>
      </form>

      <div>
        <p className="mb-2 text-center text-xs uppercase tracking-widest text-muted-foreground">
          Ucapan Tamu
        </p>
        {q.isLoading && <p className="text-center text-xs text-muted-foreground">Memuat...</p>}
        {q.data && q.data.wishes.length === 0 && (
          <p className="text-center text-xs text-muted-foreground italic">
            Jadilah yang pertama memberi ucapan 💌
          </p>
        )}
        <ul className="max-h-56 space-y-2 overflow-y-auto pr-1">
          {q.data?.wishes.map((w) => (
            <li key={w.id} className="rounded-xl bg-secondary/60 p-2">
              <p className="font-semibold text-foreground">{w.guest_name}</p>
              <p className="text-foreground/80">{w.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
