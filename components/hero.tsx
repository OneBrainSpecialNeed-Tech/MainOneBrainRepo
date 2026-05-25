"use client";

import { Brain, Sparkles, Heart, Users } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 py-16">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-20 h-20 bg-pink rounded-full opacity-20 animate-float" />
        <div className="absolute top-40 left-20 w-16 h-16 bg-blue rounded-full opacity-20 animate-float animation-delay-200" />
        <div className="absolute bottom-40 right-1/4 w-24 h-24 bg-green rounded-full opacity-20 animate-float animation-delay-400" />
        <div className="absolute bottom-20 left-10 w-14 h-14 bg-yellow rounded-full opacity-20 animate-float animation-delay-600" />
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-orange rounded-full opacity-20 animate-float animation-delay-800" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo/Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-primary/10 rounded-3xl mb-8 animate-bounce-soft">
          <Brain className="w-12 h-12 text-primary" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="text-primary">מוח</span>{" "}
          <span className="text-secondary">אחד</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-pretty">
          פרויקט סמינריון המחבר בין תלמידי טכנולוגיה לתלמידי חינוך מיוחד
          <br />
          <span className="text-foreground font-medium">יצירה משותפת של משחקים חינוכיים</span>
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 bg-pink/10 text-pink px-4 py-2 rounded-full">
            <Heart className="w-4 h-4" />
            <span className="font-medium">שיתוף פעולה</span>
          </div>
          <div className="flex items-center gap-2 bg-blue/10 text-blue px-4 py-2 rounded-full">
            <Users className="w-4 h-4" />
            <span className="font-medium">עבודת צוות</span>
          </div>
          <div className="flex items-center gap-2 bg-green/10 text-green px-4 py-2 rounded-full">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">יצירתיות</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-sm">גלו את הפרויקטים</span>
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
