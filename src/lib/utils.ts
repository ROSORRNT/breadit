import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { formatDistanceToNowStrict } from 'date-fns'
import locale from 'date-fns/locale/fr'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const formatDistanceLocale = {
  lessThanXSeconds: 'à l\'instant',
  xSeconds: 'à l\'instant',
  halfAMinute: 'à l\'instant',
  lessThanXMinutes: 'il y a {{count}}m',
  xMinutes: 'il y a {{count}}m',
  aboutXHours: 'il y a environ {{count}}h',
  xHours: 'il y a {{count}}h',
  xDays: 'il y a {{count}}j',
  aboutXWeeks: 'il y a environ {{count}}s',
  xWeeks: 'il y a {{count}}s',
  aboutXMonths: 'il y a environ {{count}}m',
  xMonths: 'il y a {{count}}m',
  aboutXYears: 'il y a environ {{count}}a',
  xYears: 'il y a {{count}}a',
  overXYears: 'il y a plus de {{count}}a',
  almostXYears: 'presque {{count}}a',
}

function formatDistance(token: string, count: number, options?: any): string {
  options = options || {}

  const result = formatDistanceLocale[
    token as keyof typeof formatDistanceLocale
  ].replace('{{count}}', count.toString())

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'dans ' + result
    } else {
      if (result === 'à l\'instant') return result
      return result
    }
  }

  return result
}

export function formatTimeToNow(date: Date): string {
  return formatDistanceToNowStrict(date, {
    addSuffix: true,
    locale: {
      ...locale,
      formatDistance,
    },
  })
}
