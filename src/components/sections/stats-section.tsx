import { StatCard } from "@/components/ui/stat-card"

export function StatsSection() {
  return (
    <section className="py-16 px-0 lg:px-8">
      <div className="max-w-7xl mx-6 lg:mx-auto sm:mx-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatCard value="02" suffix="+" label="yrs professional experience" animated />
          <StatCard value="40" suffix="+" label="projects in github" animated />
          <StatCard value="100"  label="client satisfaction" animated />
        </div>
      </div>
    </section>
  )
}
