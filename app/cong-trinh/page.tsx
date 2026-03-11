'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['Tất cả', 'Căn hộ', 'Nhà phố', 'Căn hộ dịch vụ', 'AirBnb', 'Văn phòng'];

const projects = [
  { id: 1, title: 'The Sun Avenue', category: 'Căn hộ', image: 'https://picsum.photos/seed/p1/800/600' },
  { id: 2, title: 'Biệt thự Thảo Điền', category: 'Nhà phố', image: 'https://picsum.photos/seed/p2/800/600' },
  { id: 3, title: 'TechHub Office', category: 'Văn phòng', image: 'https://picsum.photos/seed/p3/800/600' },
  { id: 4, title: 'Da Lat Retreat', category: 'AirBnb', image: 'https://picsum.photos/seed/p4/800/600' },
  { id: 5, title: 'Vinhomes Central Park', category: 'Căn hộ', image: 'https://picsum.photos/seed/p5/800/600' },
  { id: 6, title: 'City View Serviced Apt', category: 'Căn hộ dịch vụ', image: 'https://picsum.photos/seed/p6/800/600' },
  { id: 7, title: 'Creative Studio', category: 'Văn phòng', image: 'https://picsum.photos/seed/p7/800/600' },
  { id: 8, title: 'Hoi An Ancient House', category: 'Nhà phố', image: 'https://picsum.photos/seed/p8/800/600' },
  { id: 9, title: 'Masteri Thao Dien', category: 'Căn hộ', image: 'https://picsum.photos/seed/p9/800/600' },
  { id: 10, title: 'Sapa Cloud Homestay', category: 'AirBnb', image: 'https://picsum.photos/seed/p10/800/600' },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  const filteredProjects = activeCategory === 'Tất cả' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Hình thực tế công trình</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Khám phá bộ sưu tập các dự án thiết kế và thi công nội thất đa dạng phong cách, từ căn hộ hiện đại, nhà phố sang trọng đến không gian làm việc sáng tạo. Mỗi công trình là một tác phẩm nghệ thuật mang đậm dấu ấn cá nhân.
        </p>
      </section>

      {/* Filter */}
      <section className="pb-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
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
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  <p className="text-sm text-amber-600 font-medium mb-1">{project.category}</p>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors">{project.title}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
