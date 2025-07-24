import { StatCard } from "@/components/ui/stat-card"

export function StatsSection() {
  return (
    <section className="py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard value="3" suffix="+" label="yrs professional experience" animated />
          <StatCard value="25" suffix="k" label="project delivered" animated />
          <StatCard value="100" suffix="%" label="client satisfaction" animated />
          <StatCard value="50" suffix="+" label="services provided" animated />
        </div>
      </div>
    </section>
  )
}
