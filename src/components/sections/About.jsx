import SectionWrapper from "@/components/shared/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-2xl px-6 py-20 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
          About Me
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-muted-foreground">
          I'm a Full Stack Developer passionate about creating smooth, scalable
          experiences across web and mobile. I enjoy turning ideas into reality
          with clean code and modern tools.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Whether it's a React web app, a React Native mobile experience, or a
          robust Node.js / Spring Boot backend — I focus on delivering
          well-crafted solutions that users love.
        </p>
      </div>
    </SectionWrapper>
  );
}
