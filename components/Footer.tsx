import Link from 'next/link';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex flex-col items-start leading-none">
                <span className="font-sans text-3xl font-extrabold text-white tracking-tight flex items-baseline">
                  Hgfir<span className="ml-0.5 text-white text-xs align-top">®</span>
                </span>
                <span className="text-[10px] font-medium text-amber-500 uppercase tracking-[0.2em] mt-1">
                  Think Your Space
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Kiến tạo không gian sống hoàn hảo với giải pháp thiết kế và thi công nội thất trọn gói chuyên nghiệp.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li><Link href="/ve-chung-toi" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">Về chúng tôi</Link></li>
              <li><Link href="/cong-trinh" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">Dự án thực tế</Link></li>
              <li><Link href="/dich-vu" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">Dịch vụ</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">Blog & Tin tức</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Dịch vụ</h3>
            <ul className="space-y-3">
              <li><Link href="/dich-vu" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">Thiết kế nội thất</Link></li>
              <li><Link href="/dich-vu" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">Thi công nội thất</Link></li>
              <li><Link href="/dich-vu" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">Cải tạo không gian</Link></li>
              <li><Link href="/dich-vu" className="text-gray-400 hover:text-amber-500 text-sm transition-colors">Sản xuất đồ gỗ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">0123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contact@hgfir.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} HGFIR. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Điều khoản sử dụng</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
