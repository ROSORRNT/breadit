import '@/styles/globals.css'

export const metadata = {
  title: 'Breadit',
  description: 'Un clone Reddit construit avec Next.js et TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
