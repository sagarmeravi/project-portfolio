import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import DotGridShader from "@/components/DotGridShader";

import ProjectCard from "@/components/project-card";
import AnimatedHeading from "@/components/animated-heading";
import RevealOnView from "@/components/reveal-on-view";

export default function Page() {
  const projects = [
    {
      title: "HR Analtics",
      subtitle: "End‑to‑end HR Insight Dashboard",
      imageSrc: "Hr analytics.png",
      tags: ["Power BI", "Excel"],
      href: "https://github.com/sagarmeravi/HR-analytics",
      priority: true,
      gradientFrom: "#0f172a",
      gradientTo: "#6d28d9",
    },
    {
      title: "Customer Churn Analytics",
      subtitle: "Bank customer retention dashboard and prediction system",
      imageSrc: "customerchurn.png",
      tags: ["Power BI", "EXCEL"],
      href: "https://github.com/sagarmeravi/Churn-Analytics",
      priority: false,
      gradientFrom: "#111827",
      gradientTo: "#2563eb",
    },
    {
      title: "Data Warehouse and Analytics Project",
      subtitle:
        "Modern data warehouse using SQL Server to consolidate sales data, enabling analytical reporting and informed decision-making",
      imageSrc: "datawarehouse.png",
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
    {
      title: "Portfolio Performance & Risk Analysis",
      subtitle: "Comprehensive Analysis of Stocks and Index",
      imageSrc: "performance.png",
      tags: ["Pandas", "Matplotlib & Seaborn", "NumPy", "Python", "API"],
      href: "https://github.com/sagarmeravi/Portfolio-Performance-Risk-Analysis",
      priority: false,
      gradientFrom: "#0f172a",
      gradientTo: "#10b981",
    },
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
  ];

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
                    "I don’t just manage projects",
                    "I deliver results.",
                    "I don’t just analyze data",
                    "I turn it into strategy",
                  ]}
                />

                <p className="mt-4 max-w-[42ch] text-base text-white/70">
                  Data Analyst with over two years of experience, I specialize
                  in transforming complex datasets into strategic business
                  insights.
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
                imageSrc={p.imageSrc}
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
