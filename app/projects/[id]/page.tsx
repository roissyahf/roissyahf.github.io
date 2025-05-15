import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, ChevronLeft, ExternalLink, Users, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MarkdownContent } from "@/components/markdown-content" // compability issue by 15 May
import { projects } from "@/data/projects"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params; // Await params

  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  const isTeamProject = project.categories.includes("team-project")

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" className="mb-4">
          <Link href="/projects">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>
        </Button>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            <span>{project.date}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {isTeamProject && (
            <Badge className="bg-primary/20 text-primary">
              <Users className="mr-1 h-3 w-3" /> Team Project
            </Badge>
          )}
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="mb-12 aspect-video relative overflow-hidden rounded-lg">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" priority />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-8">
          {/* Project Description - Now with Markdown */}
          <section>
            <MarkdownContent content={project.fullDescription} />
          </section>

          {/* Background - Now with Markdown */}
          <section>
            <MarkdownContent content={project.background} />
          </section>

          {/* Methodology - Now with Markdown */}
          <section>
            <MarkdownContent content={project.methodology} />
          </section>

          {/* Conclusion - Now with Markdown */}
          <section>
            <MarkdownContent content={project.conclusion} />
          </section>

          {/* Project Assets - Now with Markdown */}
          {project.assetsContent && (
            <section>
              <MarkdownContent content={project.assetsContent} />
            </section>
          )}
        </div>

        <div className="space-y-6">
          {/* Categories - Kept as is */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold tracking-tight mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {project.categories
                  .filter((category) => category !== "team-project")
                  .map((category) => (
                    <Badge key={category} variant="outline" className="capitalize">
                      {category.replace("-", " ")}
                    </Badge>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Objectives - Kept as is */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold tracking-tight mb-4">Objectives</h3>
              <ul className="ml-6 list-disc text-muted-foreground">
                {project.objectives.map((objective, index) => (
                  <li key={index} className="mb-2">
                    {objective}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Tools & Technologies - Kept as is */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold tracking-tight mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <Badge key={tool} variant="outline">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Source - Kept as is */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold tracking-tight mb-4">Data Source</h3>
              <div className="flex items-start gap-2">
                <Database className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground">{project.dataSource}</p>
                  {project.dataSourceUrl && (
                    <div className="mt-2">
                      <Button asChild variant="link" size="sm" className="h-auto p-0 text-primary">
                        <Link href={project.dataSourceUrl} target="_blank" rel="noopener noreferrer">
                          View Dataset <ExternalLink className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Links - Kept as is */}
          {project.links.length > 0 && (
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold tracking-tight mb-4">Important Links</h3>
                <div className="flex flex-col gap-2">
                  {project.links.map((link, index) => (
                    <Button key={index} asChild variant="outline" className="justify-start bg-muted/50 hover:bg-muted">
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        <span className="flex-1 text-left">{link.title}</span>
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
