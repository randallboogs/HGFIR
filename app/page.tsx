'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Căn hộ The Sun Avenue',
    category: 'Căn hộ',
    image: 'https://picsum.photos/seed/interior1/800/600',
  },
  {
    id: 2,
    title: 'Biệt thự Thảo Điền',
    category: 'Nhà phố / Biệt thự',
    image: 'https://picsum.photos/seed/interior4/800/600',
  },
  {
    id: 3,
    title: 'Văn phòng TechHub',
    category: 'Văn phòng',
    image: 'https://picsum.photos/seed/office1/800/600',
  },
  {
    id: 4,
    title: 'Homestay Da Lat',
    category: 'AirBnb',
    image: 'https://picsum.photos/seed/airbnb1/800/600',
  },
];

const workflow = [
  { step: '01', title: 'Tư vấn & Khảo sát', desc: 'Lắng nghe nhu cầu và khảo sát hiện trạng thực tế.' },
  { step: '02', title: 'Thiết kế 3D', desc: 'Lên ý tưởng và thiết kế bản vẽ 3D chi tiết.' },
  { step: '03', title: 'Báo giá & Ký HĐ', desc: 'Chốt vật liệu, báo giá chi tiết và ký hợp đồng thi công.' },
  { step: '04', title: 'Sản xuất & Thi công', desc: 'Sản xuất tại xưởng và lắp đặt tại công trình.' },
  { step: '05', title: 'Nghiệm thu & Bàn giao', desc: 'Kiểm tra chất lượng và bàn giao cho khách hàng.' },
];

const partners = ['Top Decor', 'KES', 'Tuấn Anh', 'An Cường', 'Hafele', 'Vicostone'];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://picsum.photos/seed/hero-interior/1920/1080"
            alt="Interior Design"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
          >
            Kiến tạo không gian <br/>
            <span className="text-amber-400 italic">Nâng tầm cuộc sống</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          >
            Giải pháp thiết kế và thi công nội thất trọn gói. Mang đến sự hoàn hảo từ ý tưởng đến thực tế cho tổ ấm của bạn.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/dich-vu" className="bg-amber-600 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-700 transition-colors flex items-center justify-center">
              Nhận tư vấn ngay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/cong-trinh" className="bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/20 transition-colors flex items-center justify-center">
              Xem dự án
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Dự án đã thực hiện</h2>
              <p className="text-gray-600 max-w-2xl">Khám phá những không gian sống đẳng cấp mà chúng tôi đã kiến tạo.</p>
            </div>
            <Link href="/cong-trinh" className="hidden md:flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
              Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm text-amber-600 font-medium mb-1">{project.category}</p>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{project.title}</h3>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
             <Link href="/cong-trinh" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
              Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">Dịch vụ Thiết kế & Thi công</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Chúng tôi cung cấp giải pháp toàn diện từ khâu lên ý tưởng thiết kế đến thi công hoàn thiện, đảm bảo chất lượng và tiến độ cho mọi công trình.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Thiết kế nội thất</h4>
                    <p className="text-gray-600 text-sm">Sáng tạo không gian mang đậm dấu ấn cá nhân, tối ưu công năng sử dụng.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-amber-500 mr-4 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Thi công trọn gói</h4>
                    <p className="text-gray-600 text-sm">Đội ngũ thợ lành nghề, xưởng sản xuất trực tiếp đảm bảo chất lượng và tiến độ.</p>
                  </div>
                </div>
              </div>

              <Link href="/dich-vu" className="inline-flex bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-600 transition-colors items-center">
                Đăng ký tư vấn ngay
              </Link>
            </div>
            
            <div className="relative h-[600px] rounded-3xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/service-interior/800/1000"
                alt="Dịch vụ thi công"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Quy trình làm việc</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Chuyên nghiệp, minh bạch và rõ ràng trong từng giai đoạn.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {workflow.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-serif font-bold text-gray-800 mb-4">{item.step}</div>
                <h4 className="text-lg font-bold text-amber-500 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-[1px] bg-gray-800 translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Đối tác liên kết & Vật liệu</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            {partners.map((partner, index) => (
              <div key={index} className="text-xl md:text-2xl font-bold font-serif text-gray-400">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
