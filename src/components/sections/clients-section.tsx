import { ClientLogo } from "@/components/ui/client-logo"

const clients = [
  { name: "Amazon", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Walmart", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Logitech", logo: "/placeholder.svg?height=40&width=120" },
  { name: "Hello", logo: "/placeholder.svg?height=40&width=120" },
]

export function ClientsSection() {
  return (
    <section className="py-16 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-600 font-medium">Clients I&apos;ve worked with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client) => (
            <ClientLogo key={client.name} name={client.name} logo={client.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
