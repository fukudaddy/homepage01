import { Heart, Users, Award, Leaf } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Heart,
      title: '家族への愛',
      description: '4児の父として、家族の安全と幸せを最優先に考えた作品づくり',
    },
    {
      icon: Leaf,
      title: '自然素材へのこだわり',
      description: '京都・福知山産のヒノキなど、厳選した国産材料のみを使用',
    },
    {
      icon: Users,
      title: 'コミュニティとの繋がり',
      description: 'Instagram 2万人のフォロワーとともに成長するDIY文化',
    },
    {
      icon: Award,
      title: '確かな技術',
      description: '5年間で500点以上の作品を製作し続けた実績と経験',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 画像セクション */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-[200px] bg-wood-200 rounded-lg shadow-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🪵</div>
                    <p className="text-wood-700 text-sm">Woodwork</p>
                  </div>
                </div>
                <div className="h-[250px] bg-hinoki-200 rounded-lg shadow-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">🎨</div>
                    <p className="text-hinoki-700 text-sm">Craft</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="h-[350px] bg-sage-200 rounded-lg shadow-md flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">👨‍🔧</div>
                    <p className="text-sage-700 text-sm">Eiji</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 装飾要素 */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-wood-200 rounded-full opacity-50 -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-hinoki-200 rounded-full opacity-40 -z-10"></div>
          </div>

          {/* テキストコンテンツ */}
          <div className="space-y-8">
            <div>
              <h2 className="heading-secondary">
                木と向き合い、<br />
                <span className="text-wood-600">暮らしを豊かに</span>
              </h2>
              <p className="text-body">
                こんにちは、福田英治です。eiji.craftとして、DIY木工作家の活動をしています。
                地方公務員として働きながら、副業で木工作品を製作しており、将来的には木工作家として独立することを目指しています。
              </p>
              <p className="text-body">
                4人の子どもを持つ父親として、「家族に安全で温かい木の製品を届けたい」という想いから木工を始めました。
                京都・福知山産のヒノキを中心に、自然素材の魅力を最大限に活かした作品づくりを心がけています。
              </p>
            </div>

            {/* 特徴リスト */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-wood-100 rounded-lg flex items-center justify-center">
                    <feature.icon size={24} className="text-wood-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sage-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-sage-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 経歴ハイライト */}
            <div className="bg-wood-50 rounded-xl p-6">
              <h3 className="font-semibold text-sage-900 mb-4">経歴ハイライト</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sage-700">地方公務員</span>
                  <span className="text-sm text-sage-500">現在</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sage-700">木工作家準備中</span>
                  <span className="text-sm text-sage-500">2024〜</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sage-700">Instagram開始</span>
                  <span className="text-sm text-sage-500">2020</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sage-700">DIY開始</span>
                  <span className="text-sm text-sage-500">2019</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About