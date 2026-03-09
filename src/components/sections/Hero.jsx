import { Button } from "@/components/ui/button";
import profileImage from "@/assets/images/ph.jpeg";

export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-24">
      <img
        src={profileImage}
        alt="Ayman Shaim"
        className="mb-6 size-36 rounded-full object-cover ring-2 ring-border ring-offset-4 ring-offset-background sm:size-44"
      />
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Hello, I'm
      </p>
      <h1 className="mb-3 text-4xl font-bold tracking-tight sm:text-5xl">
        AYMAN SHAIM
      </h1>
      <p className="mx-auto mb-8 max-w-md text-center text-muted-foreground">
        Full Stack Developer building web & mobile apps with React, React
        Native, Node.js & Spring Boot.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button render={<a href="#contact" />} size="lg">
          Get in touch
        </Button>
        <Button variant="outline" size="lg" render={<a href="#projects" />}>
          View projects
        </Button>
      </div>
    </section>
  );
}
