'use client';

import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Liên hệ với chúng tôi</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Chúng tôi luôn sẵn sàng lắng nghe và giải đáp mọi thắc mắc của bạn. Hãy liên hệ ngay để bắt đầu hành trình kiến tạo không gian sống mơ ước.
        </p>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Thông tin công ty</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Trụ sở chính & Showroom</h4>
                  <p className="text-gray-600">123 Đường ABC, Phường XYZ, Quận 1, TP. Hồ Chí Minh</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Phone className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Điện thoại</h4>
                  <p className="text-gray-600">Hotline: 0123 456 789<br/>CSKH: 0987 654 321</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Mail className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">contact@decorstudio.vn<br/>support@decorstudio.vn</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  <Clock className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-1">Giờ làm việc</h4>
                  <p className="text-gray-600">Thứ 2 - Thứ 7: 08:00 - 17:30<br/>Chủ nhật: Nghỉ</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                [Bản đồ Google Maps]
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Gửi tin nhắn cho chúng tôi</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Họ và tên *</label>
                <input type="text" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow" placeholder="Nhập họ tên" required />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                  <input type="tel" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow" placeholder="Nhập số điện thoại" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow" placeholder="Nhập địa chỉ email" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Chủ đề</label>
                <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow">
                  <option>Tư vấn thiết kế nội thất</option>
                  <option>Báo giá thi công</option>
                  <option>Hợp tác đối tác</option>
                  <option>Khác</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nội dung tin nhắn *</label>
                <textarea rows={5} className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-shadow" placeholder="Nhập nội dung chi tiết..." required></textarea>
              </div>

              <button type="submit" className="w-full bg-gray-900 text-white font-bold py-4 rounded-lg hover:bg-amber-600 transition-colors">
                Gửi tin nhắn
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
