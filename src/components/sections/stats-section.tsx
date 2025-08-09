import { StatCard } from "@/components/ui/stat-card"

export function StatsSection() {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-25">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard value="01" suffix="+" label="yrs professional experience" animated />
          <StatCard value="22" suffix="+" label="projects in github" animated />
          <StatCard value="100" suffix="%" label="client satisfaction" animated />
          {/* <StatCard value="50" suffix="+" label="services provided" animated /> */}
        </div>
      </div>
    </section>
  )
}
