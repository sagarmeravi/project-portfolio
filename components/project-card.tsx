import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import RevealOnView from "@/components/reveal-on-view";

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  tags?: string[];
  href?: string;
  priority?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  imageContainerClassName?: string;
  containerClassName?: string;
  revealDelay?: number;
};

export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
}: Props) {
  return (
    <article className={cn("group relative", containerClassName)}>
      <RevealOnView
        delay={revealDelay}
        className="rounded-3xl border border-white/10 p-1 shadow-[0_10px_60px_-10px_rgba(0,0,0,0.6)]"
        style={{
          backgroundImage: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
        }}
      >
        {/* CARD BODY */}
        <div className="relative overflow-hidden rounded-[1.35rem] bg-black flex flex-col justify-between">
          {/* IMAGE CONTAINER */}
          <div
            className={cn(
              "relative w-full flex items-center justify-center p-3 sm:p-4",
              imageContainerClassName
            )}
          >
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] xl:h-[520px] flex items-center justify-center">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 66vw"
                priority={priority}
                className="object-contain bg-black rounded-[1.35rem]"
              />
            </div>

            {/* VIGNETTE OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </div>

          {/* TAGS */}
          <div className="pointer-events-none absolute left-3 top-3 flex flex-wrap gap-1 sm:gap-2">
            {tags.map((t) => (
              <Badge
                key={t}
                variant="secondary"
                className="pointer-events-auto bg-black/50 text-white border-white/20 backdrop-blur-sm text-[10px] sm:text-xs md:text-sm"
              >
                {t}
              </Badge>
            ))}
          </div>

          {/* CONTENT */}
          <div className="p-4 sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="text-center sm:text-left">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70">{subtitle}</p>
              </div>

              <Link
                href={href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-medium backdrop-blur transition-colors hover:bg-white/20 w-full sm:w-auto"
                aria-label={`Open case study: ${title}`}
              >
                Case study
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          </div>
        </div>
      </RevealOnView>
    </article>
  );
}
