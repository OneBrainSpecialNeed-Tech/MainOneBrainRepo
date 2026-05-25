"use client";

import { ExternalLink, Gamepad2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  colorClass: string;
  iconBgClass: string;
  index: number;
}

export function ProjectCard({ title, description, link, colorClass, iconBgClass, index }: ProjectCardProps) {
  const animationDelays = [
    "",
    "animation-delay-200",
    "animation-delay-400",
    "animation-delay-600",
    "animation-delay-800",
    "animation-delay-1000",
  ];

  return (
    <Card 
      className={`group relative overflow-hidden border-2 border-transparent hover:border-${colorClass} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 animate-float ${animationDelays[index]}`}
    >
      {/* Colored accent bar */}
      <div className={`absolute top-0 right-0 left-0 h-1 bg-${colorClass}`} />
      
      <CardHeader className="pb-2">
        <div className={`inline-flex items-center justify-center w-14 h-14 ${iconBgClass} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <Gamepad2 className={`w-7 h-7 text-${colorClass}`} />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Button 
          asChild 
          className={`w-full bg-${colorClass} hover:bg-${colorClass}/90 text-white`}
        >
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
            <span>פתח משחק</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
