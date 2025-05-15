"use client"

import type React from "react"

import { Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  url: string
  icon: React.ReactNode
}

export function CertificationCard({ title, issuer, date, url, icon }: CertificationCardProps) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <Card className="h-full overflow-hidden transition-all hover:shadow-md hover:border-primary">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-primary">{icon}</div>
            <div className="space-y-1">
              <h3 className="font-semibold">{title}</h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{date}</span>
              </div>
              <div className="mt-2">
                <span className="inline-block rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                  {issuer}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
