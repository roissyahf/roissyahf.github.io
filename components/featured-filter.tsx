"use client"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type FeaturedCategory = "all" | "Article" | "Event"

interface FeaturedFilterProps {
  onFilterChange: (category: FeaturedCategory) => void
  activeCategory: FeaturedCategory
}

export function FeaturedFilter({ onFilterChange, activeCategory }: FeaturedFilterProps) {
  const categories: { value: FeaturedCategory; label: string }[] = [
    { value: "all", label: "All" },
    { value: "Article", label: "Article" },
    { value: "Event", label: "Event (Speaker)" },
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
