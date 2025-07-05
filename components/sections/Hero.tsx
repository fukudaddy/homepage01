'use client'

import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center wood-texture">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* テキストコンテンツ */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <p className="text-wood-600 font-medium text-lg">DIY木工作家</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-sage-900 leading-tight">
                木の温もりを<br />
                <span className="text-wood-600">暮らしに届ける</span>
              </h1>
              <p className="text-xl text-sage-700 leading-relaxed max-w-lg">
                4児の父として、家族の安全と木の温もりを大切にするDIY木工作家です。
                京都・福知山産のヒノキを中心に、自然素材の魅力を最大限に活かした作品づくりを心がけています。
              </p>
            </div>

            {/* 統計情報 */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-wood-600">20K+</div>
                <div className="text-sm text-sage-600">Instagramフォロワー</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wood-600">500+</div>
                <div className="text-sm text-sage-600">製作作品数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wood-600">5年</div>
                <div className="text-sm text-sage-600">木工経験</div>
              </div>
            </div>

            {/* CTA ボタン */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/portfolio" className="btn-primary group">
                作品を見る
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link href="/blog" className="btn-secondary">
                ブログを読む
              </Link>
            </div>

            {/* ソーシャルプルーフ */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-wood-300 border-2 border-white flex items-center justify-center text-wood-700 font-medium"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <div className="text-sm text-sage-600">
                <span className="font-medium">多くの方に</span>愛用されています
              </div>
            </div>
          </div>

          {/* 画像コンテンツ */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              <div className="w-full h-[700px] bg-wood-200 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔨</div>
                  <p className="text-wood-700 font-medium">Workshop</p>
                </div>
              </div>
              
              {/* 作業中のバッジ */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-sage-800">製作中</span>
                </div>
              </div>

              {/* 体験動画ボタン */}
              <div className="absolute bottom-6 left-6">
                <button className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg hover:bg-white transition-colors duration-200">
                  <Play size={24} className="text-wood-600 ml-1" />
                </button>
              </div>
            </div>

            {/* 装飾的な背景要素 */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-hinoki-200 rounded-full opacity-30 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-wood-200 rounded-full opacity-40 -z-10"></div>
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-sage-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sage-400 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero