import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
