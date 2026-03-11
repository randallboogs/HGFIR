'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Award, Users, Factory, Store, CheckCircle2 } from 'lucide-react';

const stats = [
  { label: 'Năm kinh nghiệm', value: '10+' },
  { label: 'Dự án hoàn thành', value: '500+' },
  { label: 'Nhân sự chuyên môn', value: '50+' },
  { label: 'Giải thưởng', value: '15' },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/about-hero/1920/1080"
            alt="Về chúng tôi"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            Về chúng tôi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-200 max-w-2xl mx-auto"
          >
            Hành trình kiến tạo những không gian sống đẳng cấp và mang đậm dấu ấn cá nhân.
          </motion.p>
        </div>
      </section>

      {/* Giới thiệu */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Câu chuyện của HGFIR</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Được thành lập từ năm 2014, HGFIR khởi đầu với một đội ngũ kiến trúc sư trẻ đầy đam mê. Qua hơn một thập kỷ phát triển, chúng tôi tự hào trở thành một trong những đơn vị thiết kế và thi công nội thất hàng đầu, mang đến giải pháp toàn diện cho hàng trăm tổ ấm và không gian thương mại.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Triết lý của chúng tôi là &quot;Không gian sống phản chiếu tâm hồn&quot;. Mỗi dự án đều được chăm chút tỉ mỉ từ khâu ý tưởng đến khi hoàn thiện, đảm bảo sự hài hòa giữa thẩm mỹ, công năng và cá tính của gia chủ.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-3xl font-bold text-amber-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-3xl overflow-hidden"
            >
              <Image
                src="https://picsum.photos/seed/about-story/800/1000"
                alt="Câu chuyện HGFIR"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Năng lực & Cơ sở vật chất */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Năng lực cốt lõi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Nền tảng vững chắc để kiến tạo những công trình hoàn mỹ.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Users className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Đội ngũ chuyên gia</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tập hợp các kiến trúc sư, nhà thiết kế và kỹ sư giàu kinh nghiệm, luôn cập nhật xu hướng mới nhất.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Factory className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Xưởng sản xuất 2000m2</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Trang bị máy móc hiện đại, quy trình kiểm soát chất lượng khắt khe từ nguyên liệu đến thành phẩm.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Store className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Showroom trải nghiệm</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Không gian trưng bày vật liệu và các concept thiết kế thực tế giúp khách hàng dễ dàng hình dung.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <Award className="h-12 w-12 text-amber-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cam kết chất lượng</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Bảo hành lên đến 5 năm, bảo trì trọn đời. Sử dụng vật liệu chính hãng từ các đối tác uy tín.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
