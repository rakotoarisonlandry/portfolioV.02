interface ProfileBadgeProps {
  text: string
  className?: string
}

export function ProfileBadge({ text, className = "" }: ProfileBadgeProps) {
  return (
    <div
      className={`inline-flex items-center px-4 py-2 rounded-full border border-gray-200 bg-white shadow-sm ${className}`}
    >
      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
      <span className="text-sm font-medium text-gray-700">{text}</span>
    </div>
  )
}
