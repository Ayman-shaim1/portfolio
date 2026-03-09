import SectionWrapper from "@/components/shared/SectionWrapper";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { projects } from "@/data/projects";
import { ExternalLink, Github, Play } from "lucide-react";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

const videoMap = {};

function isEmbeddableVideo(project) {
  const v = project.video;
  return videoMap[v] ?? (typeof v === "string" && v.startsWith("/") ? v : null);
}

function isExternalVideoLink(project) {
  const v = project.video;
  return typeof v === "string" && (v.includes("drive.google.com") || v.startsWith("http"));
}

export default function Projects() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="flex w-full min-w-80 max-w-md shrink-0 flex-col sm:w-96"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-muted px-2 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex-wrap gap-2">
                {project.video &&
                  (isEmbeddableVideo(project) ? (
                    <Dialog>
                      <DialogTrigger
                        render={
                          <Button variant="outline" size="sm" type="button" />
                        }
                      >
                        <Play className="mr-2 size-4" />
                        Watch demo
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl p-0">
                        <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-muted">
                          <video
                            src={isEmbeddableVideo(project)}
                            controls
                            playsInline
                            className="size-full object-contain"
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                        <div className="p-4">
                          <p className="font-medium">{project.title}</p>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ) : isExternalVideoLink(project) ? (
                    <Button
                      variant="outline"
                      size="sm"
                      render={
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      <Play className="mr-2 size-4" />
                      Watch demo
                    </Button>
                  ) : null)}
                {project.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    render={
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <ExternalLink className="mr-2 size-4" />
                    Live
                  </Button>
                )}
                {project.githubUrl && !project.isPrivate && (
                  <Button
                    variant="outline"
                    size="sm"
                    render={
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <Github className="mr-2 size-4" />
                    Code
                  </Button>
                )}
                {project.playStoreLink && (
                  <Button
                    variant="outline"
                    size="sm"
                    render={
                      <a
                        href={project.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <SiGoogleplay className="mr-2 size-4" />
                    Play Store
                  </Button>
                )}
                {project.appStoreLink && (
                  <Button
                    variant="outline"
                    size="sm"
                    render={
                      <a
                        href={project.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    }
                  >
                    <SiAppstore className="mr-2 size-4" />
                    App Store
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
