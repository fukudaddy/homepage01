import Link from 'next/link'
import { Instagram, Youtube, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/eiji_craft',
      icon: Instagram,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@eiji_craft',
      icon: Youtube,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com/eiji_craft',
      icon: Twitter,
    },
    {
      name: 'Email',
      href: 'mailto:contact@eiji-craft.com',
      icon: Mail,
    },
  ]

  const footerLinks = [
    {
      title: 'サイト',
      links: [
        { name: 'ホーム', href: '/' },
        { name: 'ブログ', href: '/blog' },
        { name: 'ポートフォリオ', href: '/portfolio' },
        { name: 'プロフィール', href: '/about' },
      ],
    },
    {
      title: 'カテゴリー',
      links: [
        { name: '木工技術', href: '/blog/category/woodworking' },
        { name: '工具レビュー', href: '/blog/category/tools' },
        { name: '作品紹介', href: '/blog/category/works' },
        { name: 'DIY初心者', href: '/blog/category/beginner' },
      ],
    },
    {
      title: 'サポート',
      links: [
        { name: 'お問い合わせ', href: '/contact' },
        { name: 'よくある質問', href: '/faq' },
        { name: '特定商取引法', href: '/legal' },
        { name: 'プライバシーポリシー', href: '/privacy' },
      ],
    },
  ]

  return (
    <footer className="bg-sage-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* ブランド情報 */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-wood-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">eiji.craft</span>
            </div>
            <p className="text-sage-300 mb-6">
              木の温もりを暮らしに届ける<br />
              DIY木工作家
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="p-2 bg-sage-800 rounded-lg hover:bg-wood-600 transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* フッターリンク */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sage-300 hover:text-wood-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-sage-800 mt-12 pt-8 text-center">
          <p className="text-sage-400">
            &copy; 2025 eiji.craft. All rights reserved.
          </p>
          <p className="text-sage-500 text-sm mt-2">
            福田英治 | 京都府福知山市
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer