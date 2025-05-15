"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"
import { ProjectFilter } from "@/components/project-filter"
import { projects } from "@/data/projects"

type ProjectCategory = "all" | "machine-learning" | "deep-learning" | "visualization" | "applications" | "team-project"

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "all") return true
    return project.categories.includes(activeCategory)
  })

  return (
    <div className="container py-12">
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
        <p className="text-xl text-muted-foreground">A showcase of my data science and machine learning projects</p>
      </div>

      <ProjectFilter activeCategory={activeCategory} onFilterChange={setActiveCategory} />

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              date={project.date}
              isTeamProject={project.categories.includes("team-project")}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
          <p className="text-center text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  )
}
