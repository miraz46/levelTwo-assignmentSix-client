import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'


interface LoadingSpinnerProps {
  className?: string
  size?: 'sm' | 'default' | 'lg'
}

export const LoadingSpinner = ({ className, size = 'default' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    default: 'h-6 w-6',
    lg: 'h-8 w-8'
  }

  return (
    <div className="flex items-center justify-center p-4">
      <Loader2 className={cn('animate-spin', sizeClasses[size], className)} />
    </div>
  )
}