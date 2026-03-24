import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Coffee, Utensils, Croissant, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "2",
  });

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Бронирование: ${bookingForm.name}, ${bookingForm.date} в ${bookingForm.time}, ${bookingForm.guests} гостей. Телефон: ${bookingForm.phone}`;
    window.open(`https://wa.me/77753609010?text=${encodeURIComponent(message)}`);
  };

  const menuItems = [
    { 
      category: "Кофе", 
      icon: Coffee,
      items: [
        { name: "Espresso", price: "800", desc: "Классический эспрессо" },
        { name: "Americano", price: "900", desc: "Крепкий американо" },
        { name: "Cappuccino", price: "1100", desc: "Нежный капучино с молочной пеной" },
        { name: "Latte", price: "1100", desc: "Мягкий латте с ванилью" },
        { name: "Flat White", price: "1050", desc: "Плоский белый с микропеной" },
        { name: "Mocha", price: "1100", desc: "Кофе с шоколадом и молоком" },
      ]
    },
    { 
      category: "Завтраки", 
      icon: Croissant,
      items: [
        { name: "Круассан", price: "950", desc: "Хрустящий французский круассан" },
        { name: "Омлет с беконом", price: "2500", desc: "Пушистый омлет с беконом и овощами" },
        { name: "Ягодный парфе", price: "1800", desc: "Йогурт, гранола и свежие ягоды" },
        { name: "Авокадо тост", price: "2200", desc: "Хлеб с авокадо, яйцом и микс-зеленью" },
      ]
    },
    { 
      category: "Выпечка", 
      icon: Utensils,
      items: [
        { name: "Чизкейк", price: "1200", desc: "Нежный нью-йоркский чизкейк" },
        { name: "Шоколадный брауни", price: "1000", desc: "Влажный брауни с темным шоколадом" },
        { name: "Маффин", price: "850", desc: "Черничный или шоколадный маффин" },
        { name: "Эклер", price: "950", desc: "Классический французский эклер" },
      ]
    },
  ];

  const testimonials = [
    { name: "Константин Егоров", rating: 5, text: "Лучшая кофейня в Казахстане. Огромное уважение хозяйке!" },
    { name: "Sean", rating: 5, text: "Отличный кофе, доступные цены, уютная атмосфера. Идеально для работы." },
    { name: "Айнур Ахметова", rating: 5, text: "Лучший кофе в округе, разнообразная выпечка и здоровая еда. Все понравилось!" },
  ];

  const galleryImages = [
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663384349088/7RoGeBXxHwBjyLPyTgy4Nv/hero-coffee-shop-9jLA9Uz2gKqG9w5ZdpKZPW.webp", alt: "Интерьер кофейни", span: "md:col-span-2" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663384349088/7RoGeBXxHwBjyLPyTgy4Nv/coffee-latte-art-Su96vPGpdiVzCCuphPKQwM.webp", alt: "Латте с лате-артом", span: "" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663384349088/7RoGeBXxHwBjyLPyTgy4Nv/pastry-breakfast-SB3BTPU3QkX6DTr4uv5RCd.webp", alt: "Завтрак с выпечкой", span: "" },
    { src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663384349088/7RoGeBXxHwBjyLPyTgy4Nv/cafe-interior-seating-ehz85B3zm5hzYh3LRm4mKq.webp", alt: "Зона отдыха", span: "md:col-span-2" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663384349088/7RoGeBXxHwBjyLPyTgy4Nv/hero-coffee-shop-9jLA9Uz2gKqG9w5ZdpKZPW.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative container z-10 text-white max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-6 leading-tight animate-fade-in">
            Monday Coffee Shop
          </h1>
          <p className="text-xl md:text-2xl font-heading mb-8 text-white/90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Авторский кофе, уютная атмосфера, вкусная выпечка
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-terracotta hover:bg-warm-gold text-white shadow-warm-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
              Забронировать стол
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 text-white border-white hover:bg-white/30" onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}>
              Посмотреть меню
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 text-white border-white hover:bg-white/30" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Как добраться
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-6 text-charcoal">
                О Monday Coffee Shop
              </h2>
              <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                Мы создали уютное пространство, где каждая чашка кофе — это произведение искусства. Наша команда тщательно отбирает зерна лучших поставщиков и готовит каждый напиток с любовью.
              </p>
              <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                Атмосфера нашей кофейни идеальна для встреч с друзьями, деловых переговоров или спокойной работы с ноутбуком. Мы верим, что хороший кофе объединяет людей.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Coffee className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal">Авторский кофе</h4>
                    <p className="text-charcoal/70">Лучшие сорта, профессиональная обработка</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Utensils className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal">Вкусная еда</h4>
                    <p className="text-charcoal/70">Свежая выпечка и здоровые завтраки</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-warm-gold flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-heading font-bold text-charcoal">Лучшая кофейня 2023</h4>
                    <p className="text-charcoal/70">По версии 2ГИС и отзывам клиентов</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-warm-lg hover:shadow-warm-lg transition-shadow">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663384349088/7RoGeBXxHwBjyLPyTgy4Nv/cafe-interior-seating-ehz85B3zm5hzYh3LRm4mKq.webp"
                alt="Интерьер кофейни"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-cream">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-4 text-center text-charcoal">
            Наше меню
          </h2>
          <p className="text-center text-charcoal/70 mb-12 max-w-2xl mx-auto">
            Каждый напиток готовится с любовью. Мы используем только качественные ингредиенты и свежие зерна кофе.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((section, idx) => {
              const IconComponent = section.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-warm hover:shadow-warm-lg transition-shadow">
                  <h3 className="text-2xl font-heading font-bold mb-6 text-terracotta flex items-center gap-2">
                    <IconComponent className="w-6 h-6" />
                    {section.category}
                  </h3>
                  <div className="space-y-4">
                    {section.items.map((item, i) => (
                      <div key={i} className="pb-4 border-b border-border last:border-b-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-heading font-bold text-charcoal">{item.name}</h4>
                          <span className="text-terracotta font-bold whitespace-nowrap ml-2">{item.price}₸</span>
                        </div>
                        <p className="text-sm text-charcoal/70">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-terracotta hover:bg-warm-gold text-white shadow-warm-lg">
              Полное меню в PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-12 text-center text-charcoal">
            Галерея
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className={`relative rounded-lg overflow-hidden shadow-warm-lg hover:shadow-warm-lg transition-all hover:scale-[1.02] cursor-pointer group ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-cream">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-4 text-center text-charcoal">
            Отзывы клиентов
          </h2>
          <p className="text-center text-charcoal/70 mb-12">
            Рейтинг: <span className="text-2xl font-bold text-terracotta">4.6 ⭐</span> (179 отзывов)
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((review, idx) => (
              <Card key={idx} className="p-6 bg-white shadow-warm hover:shadow-warm-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warm-gold text-warm-gold" />
                  ))}
                </div>
                <p className="text-charcoal/80 mb-4 italic">"{review.text}"</p>
                <p className="font-heading font-bold text-charcoal">{review.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="container max-w-2xl">
          <h2 className="text-4xl font-display font-bold mb-12 text-center text-charcoal">
            Забронируйте стол
          </h2>
          
          <form onSubmit={handleBookingSubmit} className="space-y-6 bg-cream p-8 rounded-lg shadow-warm">
            <div>
              <label className="block text-sm font-heading font-bold text-charcoal mb-2">
                Ваше имя
              </label>
              <input
                type="text"
                name="name"
                value={bookingForm.name}
                onChange={handleBookingChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta bg-white transition-all"
                placeholder="Иван Петров"
              />
            </div>
            
            <div>
              <label className="block text-sm font-heading font-bold text-charcoal mb-2">
                Телефон
              </label>
              <input
                type="tel"
                name="phone"
                value={bookingForm.phone}
                onChange={handleBookingChange}
                required
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta bg-white transition-all"
                placeholder="+7 (775) 360-9010"
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-heading font-bold text-charcoal mb-2">
                  Дата
                </label>
                <input
                  type="date"
                  name="date"
                  value={bookingForm.date}
                  onChange={handleBookingChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta bg-white transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-heading font-bold text-charcoal mb-2">
                  Время
                </label>
                <input
                  type="time"
                  name="time"
                  value={bookingForm.time}
                  onChange={handleBookingChange}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta bg-white transition-all"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-heading font-bold text-charcoal mb-2">
                Количество гостей
              </label>
              <select
                name="guests"
                value={bookingForm.guests}
                onChange={handleBookingChange}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-terracotta bg-white transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'гость' : 'гостей'}</option>
                ))}
              </select>
            </div>
            
            <Button type="submit" size="lg" className="w-full bg-terracotta hover:bg-warm-gold text-white shadow-warm-lg">
              Забронировать через WhatsApp
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-cream">
        <div className="container">
          <h2 className="text-4xl font-display font-bold mb-12 text-center text-charcoal">
            Контакты
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-charcoal mb-2">Адрес</h3>
                  <p className="text-charcoal/80">
                    Улица Майлина, 9<br />
                    Алматы, 050003<br />
                    Казахстан
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-charcoal mb-2">Телефон</h3>
                  <a href="tel:+77753609010" className="text-terracotta hover:text-warm-gold transition-colors font-medium">
                    +7 (775) 360-9010
                  </a>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-charcoal mb-2">Часы работы</h3>
                  <p className="text-charcoal/80">
                    Ежедневно<br />
                    08:00 — 22:00
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <ChevronRight className="w-6 h-6 text-terracotta flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-charcoal mb-2">Мы в соцсетях</h3>
                  <div className="flex gap-4">
                    <a href="https://instagram.com/monday.coffeeshop" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-warm-gold transition-colors font-medium">
                      Instagram
                    </a>
                    <a href="https://wa.me/77753609010" target="_blank" rel="noopener noreferrer" className="text-terracotta hover:text-warm-gold transition-colors font-medium">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-96 rounded-lg overflow-hidden shadow-warm-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.4677308854143!2d77.00696!3d43.3468656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836dafb51c0293%3A0x368632096e7679e3!2sMonday%20Coffee%20Shop!5e0!3m2!1sru!2skz!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
