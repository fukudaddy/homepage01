'use client'

import { useState } from 'react'
import { Mail, Instagram, MessageCircle, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理をここに実装
    console.log('Form submitted:', formData)
  }

  const contactMethods = [
    {
      icon: Instagram,
      title: 'Instagram',
      description: '日常の作業風景や新作をいち早くチェック',
      action: '@eiji_craft',
      href: 'https://instagram.com/eiji_craft',
      color: 'text-pink-600',
      bg: 'bg-pink-50',
    },
    {
      icon: Mail,
      title: 'Email',
      description: '作品のご依頼やお問い合わせはこちら',
      action: 'contact@eiji-craft.com',
      href: 'mailto:contact@eiji-craft.com',
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      icon: MessageCircle,
      title: 'お問い合わせフォーム',
      description: '詳細なご相談はフォームから',
      action: '下記フォームより',
      href: '#contact-form',
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
  ]

  return (
    <section className="section-padding wood-texture">
      <div className="container-custom">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">お問い合わせ</h2>
          <p className="text-body max-w-2xl mx-auto">
            作品のご依頼、ご質問、コラボレーションのお誘いなど、
            お気軽にご連絡ください。丁寧にお返事いたします。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* 連絡方法 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-sage-900 mb-6">連絡方法</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-wood-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${method.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <method.icon size={24} className={method.color} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sage-900 mb-1">{method.title}</h4>
                        <p className="text-sage-600 text-sm mb-2">{method.description}</p>
                        <p className={`font-medium ${method.color}`}>{method.action}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* 所在地情報 */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-wood-200">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-wood-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-sage-900 mb-1">所在地</h4>
                  <p className="text-sage-600 text-sm mb-2">工房・活動拠点</p>
                  <p className="font-medium text-wood-600">京都府福知山市</p>
                </div>
              </div>
            </div>

            {/* よくあるお問い合わせ */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-wood-200">
              <h4 className="font-semibold text-sage-900 mb-4">よくあるお問い合わせ</h4>
              <div className="space-y-3">
                <div className="text-sm">
                  <p className="font-medium text-sage-900">オーダーメイドは可能ですか？</p>
                  <p className="text-sage-600">はい、ご相談いただければ対応いたします。</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-sage-900">製作期間はどのくらいですか？</p>
                  <p className="text-sage-600">作品によりますが、通常1〜3週間程度です。</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-sage-900">送料はかかりますか？</p>
                  <p className="text-sage-600">関西圏内は無料、その他地域は別途ご相談ください。</p>
                </div>
              </div>
            </div>
          </div>

          {/* お問い合わせフォーム */}
          <div id="contact-form">
            <h3 className="text-2xl font-semibold text-sage-900 mb-6">お問い合わせフォーム</h3>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm border border-wood-200 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-sage-900 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors duration-200"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-sage-900 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors duration-200"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-sage-900 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors duration-200"
                >
                  <option value="">選択してください</option>
                  <option value="order">作品のオーダー</option>
                  <option value="purchase">作品の購入</option>
                  <option value="collaboration">コラボレーション</option>
                  <option value="media">メディア取材</option>
                  <option value="other">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-sage-900 mb-2">
                  メッセージ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-wood-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-wood-500 focus:border-transparent transition-colors duration-200 resize-vertical"
                  placeholder="お問い合わせ内容を詳しくお聞かせください..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary justify-center group"
              >
                <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                送信する
              </button>

              <p className="text-xs text-sage-500 text-center">
                通常2〜3営業日以内にお返事いたします。
                お急ぎの場合はInstagramのDMもご利用ください。
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact