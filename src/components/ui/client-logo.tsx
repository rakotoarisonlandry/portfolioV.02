import Image from "next/image"

interface ClientLogoProps {
  name: string
  logo: string
  className?: string
}

export function ClientLogo({ name, logo, className = "" }: ClientLogoProps) {
  return (
    <div
      className={`flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 ${className}`}
    >
      <Image
        src={logo || "/placeholder.svg"}
        alt={`${name} logo`}
        width={120}
        height={40}
        className="opacity-60 hover:opacity-100 transition-opacity duration-200"
      />
    </div>
  )
}
