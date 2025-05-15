"use client"

import { useState } from "react"
import { FeaturedCard } from "@/components/featured-card"
import { FeaturedFilter } from "@/components/featured-filter"
import { featuredItems } from "@/data/featured"

type FeaturedCategory = "all" | "Article" | "Event"

export default function FeaturedPage() {
  const [activeCategory, setActiveCategory] = useState<FeaturedCategory>("all")

  const filteredItems = featuredItems.filter((item) => {
    if (activeCategory === "all") return true
    return item.type === activeCategory
  })

  return (
    <div className="container py-12">
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Featured</h1>
        <p className="text-xl text-muted-foreground">Articles, events, and other notable activities</p>
      </div>

      <FeaturedFilter activeCategory={activeCategory} onFilterChange={setActiveCategory} />

      {filteredItems.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <FeaturedCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
              url={item.url}
              type={item.type}
              date={item.date}
              source={item.source}
            />
          ))}
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
          <p className="text-center text-muted-foreground">No featured items found in this category.</p>
        </div>
      )}
    </div>
  )
}
