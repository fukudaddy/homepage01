import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'eiji.craft - 木の温もりを暮らしに届ける',
  description: '福田英治（eiji.craft）のDIY木工作家としてのポートフォリオサイト。4児の父が手作りする温かみのある木工作品と、DIY技術ブログをお届けします。',
  keywords: ['DIY', '木工', 'ハンドメイド', 'ヒノキ', '福知山', '子育て', 'eiji.craft'],
  authors: [{ name: '福田英治', url: 'https://eiji-craft.com' }],
  openGraph: {
    title: 'eiji.craft - 木の温もりを暮らしに届ける',
    description: 'DIY木工作家 福田英治の公式サイト',
    url: 'https://eiji-craft.com',
    siteName: 'eiji.craft',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'eiji.craft 木工作品',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'eiji.craft - 木の温もりを暮らしに届ける',
    description: 'DIY木工作家 福田英治の公式サイト',
    images: ['/images/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}