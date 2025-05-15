"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type ProjectCategory = "all" | "machine-learning" | "deep-learning" | "visualization" | "applications" | "team-project"

interface ProjectFilterProps {
  onFilterChange: (category: ProjectCategory) => void
  activeCategory: ProjectCategory
}

export function ProjectFilter({ onFilterChange, activeCategory }: ProjectFilterProps) {
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "machine-learning", label: "Machine Learning" },
    { value: "deep-learning", label: "Deep Learning" },
    { value: "visualization", label: "Visualization" },
    { value: "applications", label: "Applications" },
    { value: "team-project", label: "Team Project" },
  ]

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((category) => (
        <Button
          key={category.value}
          variant={activeCategory === category.value ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(category.value)}
          className={cn("transition-all", activeCategory === category.value && "bg-primary text-primary-foreground")}
        >
          {category.label}
        </Button>
      ))}
    </div>
  )
}
