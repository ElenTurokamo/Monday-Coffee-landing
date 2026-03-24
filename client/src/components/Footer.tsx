import { Instagram, MessageCircle, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Monday</h3>
            <p className="text-white/70">
              Лучшая кофейня в Алматы с авторским кофе и уютной атмосферой.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Навигация</h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#about" className="hover:text-white transition-colors">О нас</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Меню</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Галерея</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-bold mb-4">Контакты</h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+77753609010" className="hover:text-white transition-colors">
                  +7 (775) 360-9010
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ул. Майлина, 9, Алматы</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Мы в соцсетях</h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/monday.coffeeshop"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#C85A3A] transition-colors rounded-lg flex items-center justify-center"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/77753609010"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-[#C85A3A] transition-colors rounded-lg flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>© 2026 Monday Coffee Shop. Все права защищены.</p>
          <p className="mt-2 text-sm">Создано с ☕ и любовью</p>
        </div>
      </div>
    </footer>
  );
}
