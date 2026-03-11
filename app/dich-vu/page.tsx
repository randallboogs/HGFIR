'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { PenTool, Hammer, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Dịch vụ của chúng tôi</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Cung cấp giải pháp toàn diện từ khâu lên ý tưởng thiết kế đến thi công hoàn thiện, mang đến không gian sống hoàn hảo và tối ưu chi phí cho khách hàng.
        </p>
      </section>

      {/* Thiết kế */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/design-service/800/1000"
                alt="Thiết kế nội thất"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                <PenTool className="h-8 w-8 text-amber-600" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Thiết kế nội thất</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Biến ý tưởng của bạn thành bản vẽ 3D sống động. Chúng tôi chú trọng vào việc tối ưu hóa không gian, ánh sáng và màu sắc để tạo nên một tổng thể hài hòa, phản ánh đúng cá tính của gia chủ.
              </p>
              <ul className="space-y-4 mb-8">
                {['Tư vấn phong cách thiết kế phù hợp', 'Bố trí mặt bằng công năng tối ưu', 'Thiết kế phối cảnh 3D chi tiết', 'Triển khai bản vẽ kỹ thuật thi công 2D'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Thi công */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-gray-200 rounded-2xl flex items-center justify-center mb-6">
                <Hammer className="h-8 w-8 text-gray-700" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Thi công nội thất</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Biến bản vẽ thành hiện thực với độ chính xác cao nhất. Đội ngũ thợ lành nghề cùng xưởng sản xuất hiện đại đảm bảo chất lượng từng chi tiết nhỏ nhất.
              </p>
              <ul className="space-y-4 mb-8">
                {['Thi công phần thô (điện, nước, trần, sàn)', 'Sản xuất đồ gỗ nội thất tại xưởng', 'Lắp đặt hoàn thiện tại công trình', 'Vệ sinh công nghiệp và bàn giao'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="https://picsum.photos/seed/build-service/800/1000"
                alt="Thi công nội thất"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Đăng ký */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Đăng ký nhận tư vấn</h2>
          <p className="text-gray-400 mb-10">Để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ tư vấn giải pháp phù hợp nhất cho không gian của bạn.</p>
          
          <form className="space-y-6 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Họ và tên *</label>
                <input type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Nhập họ tên" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Số điện thoại *</label>
                <input type="tel" className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Nhập số điện thoại" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Loại công trình</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors">
                <option>Căn hộ chung cư</option>
                <option>Nhà phố / Biệt thự</option>
                <option>Văn phòng</option>
                <option>Khác</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Ghi chú thêm</label>
              <textarea rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="Chia sẻ thêm về nhu cầu của bạn..."></textarea>
            </div>
            <button type="submit" className="w-full bg-amber-600 text-white font-bold py-4 rounded-lg hover:bg-amber-700 transition-colors">
              Gửi yêu cầu tư vấn
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
