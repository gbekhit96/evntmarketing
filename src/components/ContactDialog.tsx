import { useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EMAIL = "info@evntmarketing.co";

const ContactDialog = ({ children }: { children: ReactNode }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const t = document.createElement("textarea");
      t.value = EMAIL;
      document.body.appendChild(t);
      t.select();
      document.execCommand("copy");
      t.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-wine-deep border-cream/10 text-cream sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl text-cream">Let's talk pipeline.</DialogTitle>
          <DialogDescription className="text-cream/60">
            Reach out directly to discuss your upcoming events and experiential strategy.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 flex flex-col gap-3 rounded-md border border-cream/10 p-4">
          <span className="select-all break-all text-lg tracking-tight text-cream">{EMAIL}</span>
          <Button variant="editorial" onClick={copy} className="w-full">
            {copied ? <><Check size={16} /> Copied to clipboard</> : <><Copy size={16} /> Copy Email</>}
          </Button>
          <a href={`mailto:${EMAIL}`} className="text-center text-xs text-cream/50 hover:text-cream transition-colors">
            Open in email app
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
