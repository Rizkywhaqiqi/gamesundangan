import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { checkpoints, type CheckpointId } from "@/lib/wedding-config";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type Props = {
  openId: CheckpointId | null;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export function CheckpointModal({ openId, onOpenChange, children }: Props) {
  const cp = checkpoints.find((c) => c.id === openId);
  return (
    <Dialog open={!!openId} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[92vw] sm:max-w-md p-0 overflow-hidden border-0 bg-transparent shadow-none"
      >
        <VisuallyHidden asChild>
          <DialogTitle>{cp ? cp.title : "Checkpoint"}</DialogTitle>
        </VisuallyHidden>
        <div className="relative rounded-3xl bg-card p-6 shadow-2xl ring-1 ring-border max-h-[85vh] overflow-y-auto">
          {cp && (
            <div className="mb-4 text-center">
              <p
                className="inline-block rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white"
                style={{ backgroundColor: cp.color }}
              >
                Checkpoint {cp.index}
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-foreground">
                {cp.title}
              </h2>
              <p className="text-xs text-muted-foreground italic">{cp.subtitle}</p>
              <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </div>
          )}
          {children}
        </div>
      </DialogContent>
    </Dialog>
  );
}
