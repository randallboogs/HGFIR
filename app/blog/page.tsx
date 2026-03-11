'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

const posts = [
  {
    id: 1,
    title: '5 Xu hướng thiết kế nội thất lên ngôi năm 2024',
    category: 'Tips nội thất',
    date: '15/03/2024',
    image: 'https://picsum.photos/seed/blog1/800/500',
    excerpt: 'Khám phá những xu hướng thiết kế mới nhất giúp không gian sống của bạn trở nên hiện đại và tinh tế hơn.',
  },
  {
    id: 2,
    title: 'Cách bố trí ánh sáng cho căn hộ diện tích nhỏ',
    category: 'Không gian sống',
    date: '10/03/2024',
    image: 'https://picsum.photos/seed/blog2/800/500',
    excerpt: 'Ánh sáng đóng vai trò quan trọng trong việc "ăn gian" diện tích. Cùng tìm hiểu cách bố trí hợp lý.',
  },
  {
    id: 3,
    title: 'Lựa chọn vật liệu gỗ công nghiệp hay gỗ tự nhiên?',
    category: 'Vật liệu',
    date: '05/03/2024',
    image: 'https://picsum.photos/seed/blog3/800/500',
    excerpt: 'Phân tích ưu nhược điểm của từng loại gỗ để bạn có quyết định đúng đắn cho tổ ấm của mình.',
  },
  {
    id: 4,
    title: 'Phong cách Japandi: Sự kết hợp hoàn hảo giữa Nhật Bản và Bắc Âu',
    category: 'Phong cách',
    date: '28/02/2024',
    image: 'https://picsum.photos/seed/blog4/800/500',
    excerpt: 'Tìm hiểu về phong cách Japandi đang làm mưa làm gió trong giới thiết kế nội thất hiện nay.',
  },
  {
    id: 5,
    title: 'Mẹo trang trí ban công chung cư thành góc chill lý tưởng',
    category: 'Không gian sống',
    date: '20/02/2024',
    image: 'https://picsum.photos/seed/blog5/800/500',
    excerpt: 'Biến góc ban công nhỏ hẹp thành nơi thư giãn tuyệt vời sau những giờ làm việc căng thẳng.',
  },
  {
    id: 6,
    title: 'Những lưu ý quan trọng khi thiết kế phòng bếp',
    category: 'Tips nội thất',
    date: '15/02/2024',
    image: 'https://picsum.photos/seed/blog6/800/500',
    excerpt: 'Phòng bếp là trái tim của ngôi nhà. Thiết kế sao cho vừa đẹp vừa đảm bảo công năng?',
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Blog & Tin tức</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Tổng hợp các bài viết chia sẻ kiến thức, kinh nghiệm và xu hướng mới nhất về thiết kế, thi công nội thất và không gian sống.
        </p>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-600 uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-amber-600 transition-colors">
              Tải thêm bài viết
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
