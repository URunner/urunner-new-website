import './globals.css'

export const metadata = {
  title: 'URunner — UWalk. URun. UEarn.',
  description: 'Every step earns real rewards. Track your Activity Score, earn coins, compete with friends, and get paid to move. Download URunner free on iOS and Android.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
