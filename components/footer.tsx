"use client";

import Image from "next/image";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/50 py-12 px-4 mt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="inline-flex items-center justify-center w-14 h-14 mb-4">
          <Image
            src="/images/logo.png"
            alt="מוח אחד - לוגו"
            width={56}
            height={56}
            className="drop-shadow-sm"
            unoptimized
          />
        </div>
        
        {/* About text */}
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto leading-relaxed">
          פרויקט מוח אחד הוא פרויקט סמינר תהילה המחבר בין תלמידות ממגמת טכנולוגיה לתלמידות חינוך מיוחד.
          התלמידות עבדו יחד כדי ליצור משחקים חינוכיים - תלמידות החינוך המיוחד תכננו את המשחקים
          ותלמידי הטכנולוגיה פיתחו אותם באמצעות HTML, CSS ו-JavaScript.
        </p>

        <div className="mb-6 max-w-md mx-auto">
          <p className="text-sm font-semibold text-foreground mb-3">בהנחיית</p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <span className="font-medium text-foreground">מגמת חינוך מיוחד:</span>{" "}
              גב' חנה שפירא 
            </p>
            <p>
              <span className="font-medium text-foreground">מגמת טכנולוגיה:</span>{" "}
              גב' אסתר סחייק
            </p>
            
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-to-l from-pink via-blue to-green rounded-full mx-auto mb-6" />
        
        {/* Credits */}
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span>נוצר</span>
          <Heart className="w-4 h-4 text-pink fill-pink" />
          <span>על ידי תלמידות הסמינר</span>
        </p>
        
        {/* Year */}
        <p className="text-xs text-muted-foreground/60 mt-4">
          {new Date().getFullYear()} כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
}
