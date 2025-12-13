"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import RevealOnView from "@/components/reveal-on-view";
import { useState, useEffect } from "react";

type Props = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  images?: string[];
  tags?: string[];
  href?: string;
  priority?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  imageContainerClassName?: string;
  containerClassName?: string;
  revealDelay?: number;
  imageSlideInterval?: number;
};

export default function ProjectCard({
  title = "Project title",
  subtitle = "Project subtitle",
  imageSrc = "/placeholder.svg?height=720&width=1280",
  images = [],
  tags = ["Design", "Web"],
  href = "#",
  priority = false,
  gradientFrom = "#0f172a",
  gradientTo = "#6d28d9",
  imageContainerClassName,
  containerClassName,
  revealDelay = 0,
  imageSlideInterval = 4000,
}: Props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageList = images.length > 0 ? images : [imageSrc];

  useEffect(() => {
    if (imageList.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imageList.length);
    }, imageSlideInterval);

    return () => clearInterval(interval);
  }, [imageList.length, imageSlideInterval]);
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
            <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[480px] xl:h-[520px] flex items-center justify-center overflow-hidden rounded-[1.35rem]">
              {imageList.map((img, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500 ease-in-out",
                    idx === currentImageIndex ? "opacity-100" : "opacity-0"
                  )}
                >
                  <Image
                    src={img || "/placeholder.svg"}
                    alt={`${title} - Image ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 66vw"
                    priority={priority && idx === 0}
                    className="object-contain bg-black"
                  />
                </div>
              ))}
            </div>

            {/* VIGNETTE OVERLAY */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 rounded-[1.35rem]" />

            {/* IMAGE INDICATORS */}
            {imageList.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {imageList.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300",
                      idx === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/40 w-1.5 hover:bg-white/60"
                    )}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
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
