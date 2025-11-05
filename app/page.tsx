import PostItem from '@/features/post/PostItem';
import { Coffee, Leaf } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F1ED]">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden mt-16">
        {/* Wood Texture Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233D3027' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Main Hero Image */}
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&h=600&fit=crop"
          alt="Cozy Cafe"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D3027]/90 via-[#3D3027]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D3027]/80 via-transparent to-transparent" />

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
          <div className="max-w-2xl">
            {/* Nature Icons */}
            <div className="flex items-center gap-3 mb-6">
              <Leaf className="w-6 h-6 text-[#A8B89D]" />
              <span className="text-[#A8B89D] text-sm tracking-widest uppercase">
                Natural & Organic
              </span>
            </div>

            <h2 className="text-6xl md:text-7xl text-[#F5F1ED] font-light leading-tight mb-6">
              自然と共に
              <br />
              <span className="text-[#C9A88A]">心地よい時間を</span>
            </h2>

            <p className="text-[#E8DFD8] text-lg md:text-xl leading-relaxed mb-8 font-light">
              木のぬくもりに包まれた空間で、
              <br />
              丁寧に淹れた一杯のコーヒーと、
              <br />
              ゆったりと流れる時間をお楽しみください
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#C9A88A] text-[#3D3027] rounded-full hover:bg-[#B39777] transition-all duration-300 shadow-lg hover:shadow-xl font-light tracking-wide">
                今日のおすすめ
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-[#E8DFD8] text-[#E8DFD8] rounded-full hover:bg-[#E8DFD8]/10 transition-all duration-300 font-light tracking-wide">
                メニューを見る
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Wood Grain Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-[#5A4A3C] via-[#6B5649] to-[#5A4A3C]" />
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Wood Divider */}
        <div className="mb-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
          <div className="flex items-center gap-2 text-[#6B5649]">
            <Coffee className="w-5 h-5" />
            <span className="text-sm tracking-widest uppercase font-light">
              Cafe Moments
            </span>
            <Coffee className="w-5 h-5" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#8B6F47] to-transparent" />
        </div>

        {/* Stories Section */}
        <div className="mb-12 overflow-x-auto">
          <div className="flex gap-6 pb-4">
            {[
              'あなた',
              'カフェ巡り',
              '新作メニュー',
              'ラテアート',
              'スイーツ',
            ].map((story, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center flex-shrink-0"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9A88A] via-[#A89176] to-[#8B6F47] p-1 shadow-md">
                  <div className="w-full h-full rounded-full bg-[#E8DFD8] flex items-center justify-center text-3xl border-2 border-white">
                    {idx === 0 ? '➕' : '☕'}
                  </div>
                </div>
                <span className="text-sm text-[#6B5649] mt-3 font-light">
                  {story}
                </span>
              </div>
            ))}
          </div>
        </div>
        <PostItem />
      </main>
      <div className="h-24"></div>
    </div>
  );
}
