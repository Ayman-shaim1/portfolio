import SectionWrapper from "@/components/shared/SectionWrapper";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/data/skills";
import {
  SiReact,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiJavascript,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

const iconMap = {
  SiReact,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiJavascript,
  DiJava,
};

export default function Skills() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-2xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Skills
        </h2>
        <div className="flex flex-col items-center space-y-6">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <div key={skill.name} className="w-full max-w-md space-y-2">
                <div className="flex items-center gap-3">
                  {Icon && (
                    <span className="flex size-8 items-center justify-center text-xl">
                      <Icon />
                    </span>
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{skill.name}</p>
                    <Progress
                      value={skill.level}
                      className="mt-1.5 *:data-[slot=progress-track]:h-2"
                    />
                  </div>
                  <span className="shrink-0 text-sm tabular-nums text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
