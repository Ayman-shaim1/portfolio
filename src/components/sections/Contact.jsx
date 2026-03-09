import { useState } from "react";
import { toast } from "sonner";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "YOUR_FORM_ID";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        toast.success("Message sent!", {
          description: "I'll get back to you soon.",
        });
      } else {
        const data = await res.json();
        const msg = data.error || "Something went wrong";
        setError(msg);
        setStatus("idle");
        toast.error("Failed to send", { description: msg });
      }
    } catch {
      setError("Failed to send. Please try again.");
      setStatus("idle");
      toast.error("Failed to send", {
        description: "Please check your connection and try again.",
      });
    }
  }

  return (
    <SectionWrapper>
      <div className="mx-auto max-w-xl px-6 py-20">
        <h2 className="mb-2 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Get in touch
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Have a project in mind? Let&apos;s talk.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Your message..."
              rows={5}
              required
            />
          </div>
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
                ? "Sent!"
                : "Send message"}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}
