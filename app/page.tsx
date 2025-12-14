import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import DotGridShader from "@/components/DotGridShader";

import ProjectCard from "@/components/project-card";
import AnimatedHeading from "@/components/animated-heading";
import RevealOnView from "@/components/reveal-on-view";

export default function Page() {
  const projects = [
    {
      title: "Text-to-Sql",
      subtitle: "Natural Language to SQL Query Generator",
      images: [
        "/images/text-to-sql1.png",
        "/images/text-to-sql2.png",
        "/images/text-to-sql3.png",
      ],
      tags: ["Python", "Flask", "LLM", "Gen AI"],
      href: "https://github.com/sagarmeravi/text-to-sql",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    // {
    //   title: "Customer Segmentation Analysis",
    //   subtitle: "Advanced customer clustering and behavioral segmentation",
    //   images: ["/images/project-1.webp", "/images/project-1.webp"],
    //   tags: ["Machine Learning", "Python", "Clustering", "Analytics"],
    //   href: "#",
    //   priority: false,
    //   gradientFrom: "#0f172a",
    //   gradientTo: "#0891b2",
    // },
    {
      title: "HR Analtics",
      subtitle: "End‑to‑end HR Insight Dashboard",
      images: ["/images/hr1.png", "/images/hr2.png", "/images/hr3.png"],
      tags: ["Power BI", "Excel"],
      href: "https://github.com/sagarmeravi/HR-analytics",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "End-to-End Banking Analysis Dashboard",
      subtitle:
        "SQL, Python and Power BI driven banking analytics and dashboards",
      images: [
        "/images/bank1.png",
        "/images/bank2.png",
        "/images/bank3.png",
        "/images/bank4.png",
      ],
      tags: ["SQL", "Python", "Power BI", "Banking"],
      href: "#",
      priority: false,
      gradientFrom: "#1e1b4b",
      gradientTo: "#dc2626",
    },
    {
      title: "Delhi & Beijing Air Quality Analysis",
      subtitle: "Real-time air quality monitoring and pollution trend analysis",
      images: ["/images/aqi1.png", "/images/aqi2.png"],
      tags: ["Power BI", "Environmental Data", "Time Series"],
      href: "#",
      priority: false,
      gradientFrom: "#0b5345",
      gradientTo: "#059669",
    },
    {
      title: "Data Warehouse and Analytics Project",
      subtitle:
        "Modern data warehouse using SQL Server to consolidate sales data, enabling analytical reporting and informed decision-making",
      images: ["/images/datawarehouse1.png", "/images/datawarehouse2.png"],
      tags: [
        "Data Architecture",
        "ETL Pipelines",
        "Data Modeling",
        "Analytics & Reporting",
      ],
      href: "https://github.com/sagarmeravi/sql-data-warehouse-project",
      priority: false,
      gradientFrom: "#0b132b",
      gradientTo: "#5bc0be",
    },
    // {
    //   title: "Zerodha Full Stack MERN Clone",
    //   subtitle: "Full-stack MERN implementation replicating Zerodha features",
    //   images: ["/images/project-1.webp", "/images/project-1.webp"],
    //   tags: ["MERN", "Full Stack", "React", "Node", "MongoDB"],
    //   href: "#",
    //   priority: false,
    //   gradientFrom: "#0f172a",
    //   gradientTo: "#8b5cf6",
    // },
    {
      title: "Customer Churn Analytics",
      subtitle: "Bank customer retention dashboard and prediction system",
      images: ["/images/customerchurn.png"],
      tags: ["Power BI", "EXCEL", "Prediction"],
      href: "https://github.com/sagarmeravi/Churn-Analytics",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Portfolio Performance & Risk Analysis",
      subtitle: "Comprehensive Analysis of Stocks and Index",
      images: ["/images/performance.png"],
      tags: ["Pandas", "Matplotlib & Seaborn", "NumPy", "Python", "API"],
      href: "https://github.com/sagarmeravi/Portfolio-Performance-Risk-Analysis",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
  ];
  // {
  //   title: "Trading Strategy Analysis",
  //   subtitle:
  //     "End to End Building Strategy to backtesting and analysing metrics",
  //   imageSrc: "performance.png",
  //   tags: ["SQL", "Pandas", "Python", "PineCode"],
  //   href: "#project-5",
  //   priority: false,
  //   gradientFrom: "#1f2937",
  //   gradientTo: "#8b5cf6",
  // },

  return (
    <main className="bg-neutral-950 text-white">
      {/* HERO: full-viewport row. Left is sticky; right scrolls internally. */}
      <section className="px-4 pt-4 pb-16 lg:pb-4">
        <div className="grid h-full grid-cols-1 gap-4 lg:grid-cols-[420px_1fr]">
          {/* LEFT: sticky and full height, no cut off */}
          <aside className="lg:sticky lg:top-4 lg:h-[calc(100svh-2rem)]">
            <RevealOnView
              as="div"
              intensity="hero"
              className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8"
              staggerChildren
            >
              {/* Texture background */}
              <div className="pointer-events-none absolute inset-0 opacity-5 mix-blend-soft-light">
                <DotGridShader />
              </div>

              {/* Profile photo (upper area) */}
              <div className="absolute top-4 right-4 hidden lg:block pointer-events-none">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white/20 shadow-sm bg-neutral-900">
                  <Image
                    src="/images/mypfp.png"
                    alt="Sagar Meravi"
                    width={48}
                    height={48}
                    priority
                    className="object-cover"
                  />
                  <span
                    className="absolute -right-2 -top-2 h-3 w-3 rounded-full ring-2 ring-neutral-900 bg-white/20"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                {/* Wordmark */}
                <div className="mb-8 flex items-center gap-2">
                  <div className="text-2xl font-extrabold tracking-tight">
                    Sagar Meravi
                  </div>
                  <div
                    className="h-2 w-2 rounded-full bg-white/60"
                    aria-hidden="true"
                  />
                </div>

                {/* Headline with intro blur effect */}
                <AnimatedHeading
                  className="text-2xl font-black leading-[1.05] tracking-tight sm:text-3xl"
                  lines={[
                    "I don’t just analyze data",
                    "I turn it into strategy",
                    "I don’t just manage projects",
                    "I deliver results.",
                  ]}
                />

                <p className="mt-4 max-w-[42ch] text-base text-white/70">
                  I transform complex data into actionable insights and
                  intuitive digital experiences. With expertise spanning
                  workforce analytics, business intelligence, and full-stack
                  development, I bridge the gap between data science and
                  user-focused technology.
                </p>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="mailto:meravisagarm@gmail.com">
                      Hire me
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Trusted by */}
                <div className="mt-10">
                  <p className="mb-3 text-xs font-semibold tracking-widest text-white/50">
                    COMPANIES I'VE WORKED WITH
                  </p>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-2xl font-black text-white/25 sm:grid-cols-1">
                    <li>Cotton King</li>
                    <li>QuickHeal Foundation</li>
                    {/* <li>ClosedAI</li>
                    <li>Booble</li>
                    <li>Lentflix</li>
                    <li>Xwitter</li> */}
                  </ul>
                </div>
              </div>
            </RevealOnView>
          </aside>

          {/* RIGHT: simplified, no internal card or horizontal carousel */}
          <div className="space-y-4">
            {projects.map((p, idx) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                subtitle={p.subtitle}
                images={p.images}
                tags={p.tags}
                href={p.href}
                priority={p.priority}
                gradientFrom={p.gradientFrom}
                gradientTo={p.gradientTo}
                imageContainerClassName="lg:h-full"
                containerClassName="lg:h-[calc(100svh-2rem)]"
                revealDelay={idx * 0.06}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
