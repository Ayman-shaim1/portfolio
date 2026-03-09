import SectionWrapper from "@/components/shared/SectionWrapper";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper>
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-20">
        <h2 className="mb-10 w-full text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>
        <div className="flex w-full flex-col gap-6">
          {experience.map((exp) => (
            <Card key={exp.id} className="w-full">
              <CardHeader>
                <CardTitle className="text-lg">{exp.role}</CardTitle>
                <CardDescription className="text-base font-medium">
                  {exp.company}
                </CardDescription>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-3 text-muted-foreground">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
