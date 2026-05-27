"use client";

import { 
  ExternalLink, 
  Users, 
  Trophy, 
  ShoppingCart, 
  Tractor, 
  Layers, 
  Stars, 
  Fish 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "גיבור במכשולים",
    description: "משחק מרתק של התמודדות עם מכשולים",
    link: "#project-1",
    color: "bg-orange",
    hoverBorder: "hover:border-orange",
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
    btnClass: "bg-orange hover:bg-orange/90",
    icon: Trophy,
    techStudent: "אפרת מדמון",
    specialStudents: ["אביגיל נורי", "חגית חגג", "מיכל טביב", "מיכל מאונטה"],
  },
  {
    title: "אלוף הקניות",
    description: "משחק לתרגול קניות וניהול כסף",
    link: "#project-2",
    color: "bg-purple",
    hoverBorder: "hover:border-purple",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
    btnClass: "bg-purple hover:bg-purple/90",
    icon: ShoppingCart,
    techStudent: "הדסה מסימי",
    specialStudents: ["שפרה רחמים", "שרה דבורה בן שלום", "הילה עמר", "מזל חטאב"],
  },
  {
    title: "מסיבה בחווה",
    description: "משחק חוויתי בעולם החווה",
    link: "#project-3",
    color: "bg-green",
    hoverBorder: "hover:border-green",
    iconBg: "bg-green/10",
    iconColor: "text-green",
    btnClass: "bg-green hover:bg-green/90",
    icon: Tractor,
    techStudent: "אבישג נסיר",
    specialStudents: ["שרה בן סעדון", "צפורה רפאלוב", "אילה עטרי", "הדס דמרי"],
  },
  {
    title: "רמי",
    description: "משחק רמי מהנה ומאתגר",
    link: "#project-4",
    color: "bg-blue-purple",
    hoverBorder: "hover:border-blue-purple",
    iconBg: "bg-blue-purple/10",
    iconColor: "text-blue-purple",
    btnClass: "bg-blue-purple hover:bg-blue-purple/90",
    icon: Layers,
    techStudent: "חנה כהן",
    specialStudents: ["טליה סרוסי", "גילי מנשה", "טליה שניאור"],
  },
  {
    title: "כתוב בכוכבים",
    description: "משחק יצירתי של כתיבה וכוכבים",
    link: "https://onebrainspecialneed-tech.github.io/WrittenInTheStars/",
    color: "bg-night-blue",
    hoverBorder: "hover:border-night-blue",
    iconBg: "bg-night-blue/10",
    iconColor: "text-night-blue",
    btnClass: "bg-night-blue hover:bg-night-blue/90",
    icon: Stars,
    techStudent: "ניראל טויטו",
    specialStudents: ["אילה מועלם", "נעמי דניאל", "יהודית אזולאי"],
  },
  {
    title: "דיג בצלילים",
    description: "משחק דיג מרתק ומהנה",
    link: "#project-6",
    color: "bg-sea-blue",
    hoverBorder: "hover:border-sea-blue",
    iconBg: "bg-sea-blue/10",
    iconColor: "text-sea-blue",
    btnClass: "bg-sea-blue hover:bg-sea-blue/90",
    icon: Fish,
    techStudent: "אביה עטרי",
    specialStudents: ["הילה זרגרי", "אפרת בר משה", "אנאל גבאי", "הדסה זכריה"],
  },
];

export function ProjectsSection() {
  return (
    <section className="px-4 py-16 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">המשחקים שלנו</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          6 משחקים חינוכיים שנוצרו בשיתוף פעולה מיוחד בין תלמידות
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
                <project.icon className={`w-7 h-7 ${project.iconColor}`} />
              </div>
              <CardTitle className="text-xl">{project.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {project.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Students section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <Users className="w-4 h-4" />
                  <span>צוות הפיתוח</span>
                </div>
                
                {/* Tech student */}
                <div className={`${project.iconBg} rounded-xl p-3 border-2 border-dashed ${project.hoverBorder.replace('hover:', '')}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-bold ${project.iconColor} uppercase tracking-wide`}>מגמת טכנולוגיה</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${project.color} flex items-center justify-center text-white font-bold text-sm`}>
                      {project.techStudent.charAt(0)}
                    </div>
                    <span className="font-semibold">{project.techStudent}</span>
                  </div>
                </div>

                {/* Special education students */}
                <div className="bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl p-3 border border-border/50">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-bold text-pink uppercase tracking-wide">מגמת חינוך מיוחד</span>
                    <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full ${project.color} text-white text-xs font-bold`}>
                      {project.specialStudents.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {project.specialStudents.map((student, i) => (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 bg-background/80 backdrop-blur-sm px-2.5 py-2 rounded-lg border border-border/50 hover:border-pink/50 transition-colors"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink to-blue flex items-center justify-center text-white font-bold text-xs shrink-0">
                          {student.charAt(0)}
                        </div>
                        <span className="text-sm font-medium truncate">{student}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
