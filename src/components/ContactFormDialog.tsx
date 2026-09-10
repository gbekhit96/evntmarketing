import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;

const BUDGETS = [
  "Under $25k",
  "$25k – $75k",
  "$75k – $150k",
  "$150k – $500k",
  "$500k+",
  "Not sure yet",
];

const TIMELINES = [
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Exploring options",
];

interface ContactFormDialogProps {
  triggerLabel?: string;
  triggerVariant?: "default" | "editorial" | "editorialOutline" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  triggerSize?: "default" | "sm" | "lg" | "icon";
  triggerClassName?: string;
}

const ContactFormDialog = ({
  triggerLabel = "Let's Talk",
  triggerVariant = "editorial",
  triggerSize = "lg",
  triggerClassName = "px-10 py-6",
}: ContactFormDialogProps) => {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    projectDetails: "",
    website: "",
  });

  const set = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      if (!response.ok || data?.error) {
        setError("Something went wrong. Please email us directly and we'll follow up.");
      } else {
        setSubmitted(true);
      }
    } catch {
      setError("Something went wrong. Please email us directly and we'll follow up.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      setSubmitted(false);
      setError(null);
      setForm({ name: "", email: "", company: "", budget: "", timeline: "", projectDetails: "", website: "" });
    }
  };

  const labelClass = "font-sans text-[11px] uppercase tracking-[0.15em] text-cream/50";
  const fieldClass =
    "bg-transparent border-cream/20 text-cream placeholder:text-cream/30 focus-visible:ring-cream/30";

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant={triggerVariant} size={triggerSize} className={triggerClassName}>
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-cream/10 bg-wine-deep text-cream sm:max-w-[560px]">
        {submitted ? (
          <div className="py-8 text-center">
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl leading-tight text-cream">
                Thanks for reaching out.
              </DialogTitle>
              <DialogDescription className="font-sans text-sm text-cream/60 pt-3">
                We've received your details and someone from our team will be in touch within one business day.
              </DialogDescription>
            </DialogHeader>
            <Button
              variant="editorialOutline"
              className="mt-8"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-3xl leading-tight text-cream">
                Let's talk.
              </DialogTitle>
              <DialogDescription className="font-sans text-sm text-cream/60">
                Tell us about the room you need built. We'll respond within one business day.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-4 space-y-5">
              <div
                aria-hidden="true"
                className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
              >
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.website}
                  onChange={(e) => set("website", e.target.value)}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className={labelClass}>Name *</Label>
                  <Input
                    id="name"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    className={fieldClass}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className={labelClass}>Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className={labelClass}>Company</Label>
                <Input
                  id="company"
                  maxLength={150}
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  className={fieldClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label className={labelClass}>Budget</Label>
                  <Select value={form.budget} onValueChange={(v) => set("budget", v)}>
                    <SelectTrigger className={fieldClass}>
                      <SelectValue placeholder="Select a range" />
                    </SelectTrigger>
                    <SelectContent className="border-cream/10 bg-wine-deep text-cream">
                      {BUDGETS.map((b) => (
                        <SelectItem key={b} value={b}>{b}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className={labelClass}>Timeline</Label>
                  <Select value={form.timeline} onValueChange={(v) => set("timeline", v)}>
                    <SelectTrigger className={fieldClass}>
                      <SelectValue placeholder="Select a timeline" />
                    </SelectTrigger>
                    <SelectContent className="border-cream/10 bg-wine-deep text-cream">
                      {TIMELINES.map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectDetails" className={labelClass}>Project Details *</Label>
                <Textarea
                  id="projectDetails"
                  required
                  rows={5}
                  maxLength={4000}
                  value={form.projectDetails}
                  onChange={(e) => set("projectDetails", e.target.value)}
                  placeholder="Audience, objectives, format, location — anything that helps us understand the goal."
                  className={fieldClass}
                />
              </div>

              {error && (
                <p className="font-sans text-sm text-red-400">{error}</p>
              )}

              <Button
                type="submit"
                variant="editorial"
                size="lg"
                disabled={submitting}
                className="w-full px-10 py-6"
              >
                {submitting ? "Sending…" : "Send Inquiry"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormDialog;
