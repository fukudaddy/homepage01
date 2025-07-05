import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'

const LatestWorks = () => {
  const works = [
    {
      id: 1,
      title: '木製フック',
      category: '小物',
      image: 'https://via.placeholder.com/400x300/deb887/ffffff?text=Hook',
      description: '国産ヒノキ製の耐荷重10kgフック。防カビ・防臭効果で長持ち。',
      price: '¥2,980',
      rating: 4.9,
      reviews: 127,
      status: '販売中',
    },
    {
      id: 2,
      title: '木製シェルフ',
      category: '家具',
      image: 'https://via.placeholder.com/400x300/f5c85c/ffffff?text=Shelf',
      description: '無垢材を使用したシンプルで機能的な棚。どんな空間にも馴染みます。',
      price: '¥8,500',
      rating: 5.0,
      reviews: 43,
      status: '販売中',
    },
    {
      id: 3,
      title: 'パズルボックス',
      category: 'DIY',
      image: 'https://via.placeholder.com/400x300/6b7a6b/ffffff?text=Puzzle',
      description: '子供向けの安全な木製パズルボックス。知育にも最適。',
      price: '¥3,200',
      rating: 4.8,
      reviews: 89,
      status: '完売',
    },
  ]

  return (
    <section className="section-padding wood-texture">
      <div className="container-custom">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">最新の作品</h2>
          <p className="text-body max-w-2xl mx-auto">
            ひとつひとつ丁寧に手作りした、温かみのある木工作品をご紹介します。
            すべて天然素材を使用し、家族の安全を第一に考えて製作しています。
          </p>
        </div>

        {/* 作品グリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {works.map((work) => (
            <div key={work.id} className="card group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-wood-100 flex items-center justify-center group-hover:bg-wood-200 transition-colors duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {work.id === 1 ? '🪝' : work.id === 2 ? '📚' : '🧩'}
                    </div>
                    <p className="text-wood-700 font-medium">{work.title}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-sage-800 px-3 py-1 rounded-full text-sm font-medium">
                    {work.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    work.status === '販売中' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {work.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sage-900 mb-2">{work.title}</h3>
                <p className="text-sage-600 text-sm mb-4 line-clamp-2">{work.description}</p>
                
                {/* 評価 */}
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-sage-700 ml-1">{work.rating}</span>
                  </div>
                  <span className="text-sm text-sage-500">({work.reviews}件)</span>
                </div>
                
                {/* 価格 */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-wood-600">{work.price}</span>
                  <Link 
                    href={`/portfolio/${work.id}`}
                    className="text-wood-600 hover:text-wood-700 font-medium text-sm flex items-center"
                  >
                    詳細を見る
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/portfolio" className="btn-primary">
            すべての作品を見る
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestWorks