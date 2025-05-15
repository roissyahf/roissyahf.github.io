"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type SkillCategory = "all" | "techniques" | "programming" | "tools"

interface Skill {
  name: string
  category: "techniques" | "programming" | "tools"
}

interface InteractiveSkillsProps {
  skills: Skill[]
}

export function InteractiveSkills({ skills }: InteractiveSkillsProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("all")

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === "all") return true
    return skill.category === activeCategory
  })

  const categories: { value: SkillCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "techniques", label: "Techniques" },
    { value: "programming", label: "Programming Languages/Library" },
    { value: "tools", label: "Tools" },
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={activeCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.value)}
              className={cn(
                "transition-all",
                activeCategory === category.value && category.value === "techniques" && "bg-blue-600 hover:bg-blue-700",
                activeCategory === category.value &&
                  category.value === "programming" &&
                  "bg-emerald-600 hover:bg-emerald-700",
                activeCategory === category.value && category.value === "tools" && "bg-amber-600 hover:bg-amber-700",
              )}
            >
              {category.label}
            </Button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {filteredSkills.map((skill, index) => (
            <Badge
              key={`${skill.name}-${index}`}
              variant="outline"
              className={cn(
                "transition-all duration-300",
                skill.category === "techniques" &&
                  "border-blue-400 bg-blue-100 text-blue-800 dark:border-blue-700 dark:bg-blue-900 dark:bg-opacity-30 dark:text-blue-300",
                skill.category === "programming" &&
                  "border-emerald-400 bg-emerald-100 text-emerald-800 dark:border-emerald-700 dark:bg-emerald-900 dark:bg-opacity-30 dark:text-emerald-300",
                skill.category === "tools" &&
                  "border-amber-400 bg-amber-100 text-amber-800 dark:border-amber-700 dark:bg-amber-900 dark:bg-opacity-30 dark:text-amber-300",
              )}
            >
              {skill.name}
            </Badge>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <p className="text-center text-muted-foreground">No skills found in this category.</p>
        )}
      </CardContent>
    </Card>
  )
}
