"use client";

import { Gamepad2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "משחק הזיכרון",
    description: "משחק זיכרון צבעוני ומהנה לשיפור הריכוז והזיכרון",
    link: "#project-1",
    color: "bg-pink",
    hoverBorder: "hover:border-pink",
    iconBg: "bg-pink/10",
    iconColor: "text-pink",
    btnClass: "bg-pink hover:bg-pink/90",
  },
  {
    title: "חידון המתמטיקה",
    description: "תרגול פעולות חשבון בסיסיות בצורה משחקית ומהנה",
    link: "#project-2",
    color: "bg-blue",
    hoverBorder: "hover:border-blue",
    iconBg: "bg-blue/10",
    iconColor: "text-blue",
    btnClass: "bg-blue hover:bg-blue/90",
  },
  {
    title: "הרפתקת האותיות",
    description: "לימוד וזיהוי אותיות בעברית דרך משחק אינטראקטיבי",
    link: "#project-3",
    color: "bg-green",
    hoverBorder: "hover:border-green",
    iconBg: "bg-green/10",
    iconColor: "text-green",
    btnClass: "bg-green hover:bg-green/90",
  },
  {
    title: "מיון הצבעים",
    description: "משחק מיון וזיהוי צבעים לפיתוח חשיבה לוגית",
    link: "#project-4",
    color: "bg-yellow",
    hoverBorder: "hover:border-yellow",
    iconBg: "bg-yellow/10",
    iconColor: "text-yellow",
    btnClass: "bg-yellow hover:bg-yellow/90 text-foreground",
  },
  {
    title: "פאזל החיות",
    description: "הרכבת פאזלים של חיות מוכרות לפיתוח מוטוריקה עדינה",
    link: "#project-5",
    color: "bg-purple",
    hoverBorder: "hover:border-purple",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    btnClass: "bg-purple hover:bg-purple/90",
  },
  {
    title: "מסע הצלילים",
    description: "זיהוי והתאמת צלילים לפיתוח הקשבה וריכוז",
    link: "#project-6",
    color: "bg-orange",
    hoverBorder: "hover:border-orange",
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
    btnClass: "bg-orange hover:bg-orange/90",
  },
];

export function ProjectsSection() {
  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">המשחקים שלנו</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          6 משחקים חינוכיים שנוצרו בשיתוף פעולה מיוחד בין תלמידים
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index}
            className={`group relative overflow-hidden border-2 border-transparent ${project.hoverBorder} transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}
          >
            {/* Colored accent bar */}
            <div className={`absolute top-0 right-0 left-0 h-1.5 ${project.color}`} />
            
            <CardHeader className="pb-3">
              <div className={`inline-flex items-center justify-center w-14 h-14 ${project.iconBg} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Gamepad2 className={`w-7 h-7 ${project.iconColor}`} />
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Button 
                asChild 
                className={`w-full ${project.btnClass} text-white`}
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  <span>פתח משחק</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
