import { StatCard } from "@/components/ui/stat-card"

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 px-5 sm:px-8 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <StatCard value="02" suffix="+" label="yrs professional experience" animated />
          <StatCard value="40" suffix="+" label="projects in github" animated />
          <StatCard value="100"  label="client satisfaction" animated />
        </div>
      </div>
    </section>
  )
}
