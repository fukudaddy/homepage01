import Link from 'next/link'
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react'

const LatestBlog = () => {
  const posts = [
    {
      id: 1,
      title: '良質なヒノキの選び方と木材の基礎知識',
      excerpt: '木工作品の品質を左右する木材選び。特に国産ヒノキの見分け方と、初心者でも分かる木材の基礎知識を詳しく解説します。',
      image: 'https://via.placeholder.com/400x250/deb887/ffffff?text=Hinoki',
      category: '木工技術',
      date: '2025.01.15',
      readTime: '5分',
      tags: ['ヒノキ', '木材選び', '初心者向け'],
    },
    {
      id: 2,
      title: '初心者向け DIY工具の選び方ガイド',
      excerpt: 'これから木工を始める方におすすめの工具を厳選。予算別に必要な工具と、長く使える良い工具の選び方をご紹介します。',
      image: 'https://via.placeholder.com/400x250/f5c85c/ffffff?text=Tools',
      category: '工具レビュー',
      date: '2025.01.10',
      readTime: '8分',
      tags: ['工具', 'DIY初心者', 'レビュー'],
    },
    {
      id: 3,
      title: 'プロが教える オイルフィニッシュの技法',
      excerpt: '木材の美しさを引き出すオイルフィニッシュ。適切な塗装方法と、長持ちさせるメンテナンスのコツを詳しく解説します。',
      image: 'https://via.placeholder.com/400x250/6b7a6b/ffffff?text=Finish',
      category: '木工技術',
      date: '2025.01.05',
      readTime: '6分',
      tags: ['オイルフィニッシュ', '塗装', 'メンテナンス'],
    },
  ]

  const categories = [
    { name: '木工技術', count: 24 },
    { name: '工具レビュー', count: 18 },
    { name: '作品紹介', count: 32 },
    { name: 'DIY初心者', count: 15 },
    { name: '子育て×DIY', count: 12 },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* セクションヘッダー */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">最新のブログ記事</h2>
          <p className="text-body max-w-2xl mx-auto">
            DIY木工の技術や工具のレビュー、作品の製作過程など、
            木工に関する様々な情報を発信しています。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* ブログ記事 */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.id} className="card group hover:shadow-lg transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="relative overflow-hidden rounded-lg">
                      <div className="w-full h-48 md:h-full bg-wood-100 flex items-center justify-center group-hover:bg-wood-200 transition-colors duration-300">
                        <div className="text-center">
                          <div className="text-3xl mb-2">
                            {post.id === 1 ? '🌲' : post.id === 2 ? '🔧' : '🎨'}
                          </div>
                          <p className="text-wood-700 text-sm">{post.category}</p>
                        </div>
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-sage-800 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="md:col-span-2 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-sage-900 mb-3 group-hover:text-wood-600 transition-colors duration-200">
                          {post.title}
                        </h3>
                        <p className="text-sage-600 text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                      </div>
                      
                      <div>
                        {/* タグ */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 bg-wood-100 text-wood-700 text-xs rounded-md"
                            >
                              <Tag size={12} className="mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        {/* メタ情報 */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-sage-500">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              {post.date}
                            </div>
                            <div className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              {post.readTime}
                            </div>
                          </div>
                          <Link
                            href={`/blog/${post.id}`}
                            className="text-wood-600 hover:text-wood-700 font-medium text-sm flex items-center"
                          >
                            続きを読む
                            <ArrowRight size={16} className="ml-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* サイドバー */}
          <div className="space-y-8">
            {/* カテゴリー */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-sage-900 mb-4">カテゴリー</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/blog/category/${category.name}`}
                    className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-wood-50 transition-colors duration-200"
                  >
                    <span className="text-sage-700">{category.name}</span>
                    <span className="bg-wood-200 text-wood-800 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* 人気記事 */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-sage-900 mb-4">人気記事</h3>
              <div className="space-y-4">
                {posts.slice(0, 3).map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.id}`} className="flex space-x-3 group">
                    <div className="flex-shrink-0 w-8 h-8 bg-wood-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-sage-900 group-hover:text-wood-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </p>
                      <p className="text-xs text-sage-500 mt-1">{post.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Instagram */}
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-sage-900 mb-4">Instagram</h3>
              <p className="text-sm text-sage-600 mb-4">
                作品の製作過程や日常の様子をInstagramで発信しています。
              </p>
              <Link
                href="https://instagram.com/eiji_craft"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-center"
              >
                @eiji_craft をフォロー
              </Link>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/blog" className="btn-primary">
            すべての記事を見る
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default LatestBlog