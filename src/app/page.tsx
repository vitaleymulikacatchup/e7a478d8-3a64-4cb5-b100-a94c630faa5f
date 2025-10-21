"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterBase from "@/components/sections/footer/FooterBase";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/14836039/pexels-photo-14836039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Black and white photo of a sports car engine seen through the rear window, focusing on the V8 FSI label."},
  {"id":"feature-1","url":"https://images.pexels.com/photos/14836039/pexels-photo-14836039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Black and white photo of a sports car engine seen through the rear window, focusing on the V8 FSI label."},
  {"id":"feature-2","url":"https://images.pexels.com/photos/1550611/pexels-photo-1550611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a red sports car racing on an outdoor track, capturing speed and excitement."},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/7144209/pexels-photo-7144209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Joyful couple in their new car, holding keys in a dealership showroom, smiling warmly."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/4173091/pexels-photo-4173091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Cheerful woman in a car with a bottle, enjoying a sunny day on a road trip."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/9661333/pexels-photo-9661333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Lowered blue Audi with white rims in an underground parking garage at night."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/15492067/pexels-photo-15492067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Customized blue Audi TT sports car with striking neon lights parked in an urban environment."},
  {"id":"logo-1","url":"https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A vibrant retro Apple logo with rainbow colors on a sleek black background."},
  {"id":"logo-2","url":"https://images.pexels.com/photos/34369681/pexels-photo-34369681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detail of a sleek car featuring a coyote emblem on the rear against a dark urban backdrop."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Home", id: "home" },
            { name: "Services", id: "services" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Audi Auto Car Lab"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Премиальный тюнинг Audi — безопасно, законно, OEM+"
          description="Stage 1–2, выхлоп, PPF, подвеска, диагностика."
          imageSrc={assetMap.find(a => a.id === 'hero-image')?.url ?? "/public/images/placeholder.webp"}
          buttons={[
            { text: "Записаться", href: "contact" },
            { text: "WhatsApp", href: "https://wa.me/YOUR_PHONE" }
          ]}
          ariaLabel="Hero section"
        />
      </div>
      <div id="about" data-section="about">
        <FeatureCardOne
          title="Наши услуги"
          description="Откройте для себя высокий уровень тюнинга Audi"
          features={[
            {
              title: "Чип-тюнинг",
              description: "Улучшите производительность и эффективность.",
              imageSrc={assetMap.find(a => a.id === 'feature-1')?.url ?? "/public/images/placeholder.webp"},
              alt: "Чип-тюнинг для Audi"
            },
            {
              title: "Выхлопные системы",
              description: "Оптимальные решения для выхлопных систем Audi.",
              imageSrc={assetMap.find(a => a.id === 'feature-2')?.url ?? "/public/images/placeholder.webp"},
              alt: "Системы выхлопа для Audi"
            }
          ]}
          ariaLabel="Feature section"
        />
      </div>
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Цены на пакеты"
          description="Выберите идеальный пакет для вашей Audi"
          plans={[
            {
              id: "basic",
              badge: "Популярное",
              price: "от 50,000₽",
              subtitle: "Stage 1, кодирование",
              features: ["Чип-тюнинг", "Гарантия"]
            },
            {
              id: "sports",
              badge: "Спорт",
              price: "от 100,000₽",
              subtitle: "Stage 2, выхлоп/подвеска",
              features: ["Аудио система", "Пакет гарантии"]
            }
          ]}
          ariaLabel="Pricing section"
        />
      </div>
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Отзывы наших клиентов"
          description="Реальные отзывы владельцев Audi"
          testimonials={[
            {
              id: "1",
              name: "Алексей Иванов",
              role: "Владелец Audi SQ5",
              company: "Тюнинг мастер",
              rating: 5,
              imageSrc={assetMap.find(a => a.id === 'testimonial-1')?.url ?? "/public/images/placeholder.webp"},
              alt: "Положительный отзыв о тюнинге Audi"
            },
            {
              id: "2",
              name: "Ольга Петрова",
              role: "Владелица Audi RS",
              company: "Любитель скорости",
              rating: 5,
              imageSrc={assetMap.find(a => a.id === 'testimonial-2')?.url ?? "/public/images/placeholder.webp"},
              alt: "Клиентка с Audi RS дает отзыв"
            },
            {
              id: "3",
              name: "Иван Сергеев",
              role: "Владелец Audi A5",
              company: "Автоэксперт",
              rating: 5,
              imageSrc={assetMap.find(a => a.id === 'testimonial-3')?.url ?? "/public/images/placeholder.webp"},
              alt: "Клиент Audi A5 доволен сервисом"
            },
            {
              id: "4",
              name: "Мария Кузнецова",
              role: "Владелица Audi Q7",
              company: "Энтузиаст",
              rating: 5,
              imageSrc={assetMap.find(a => a.id === 'testimonial-4')?.url ?? "/public/images/placeholder.webp"},
              alt: "Клиентка Audi Q7 оставила отзыв"
            }
          ]}
          ariaLabel="Testimonials section"
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Часто задаваемые вопросы"
          description="Ответы на популярные вопросы"
          faqs={[
            { id: "1", title: "Как насчет гарантии?", content: "Мы предлагаем гарантию на все наши работы." },
            { id: "2", title: "Законно ли это?", content: "Наши услуги полностью законны и сертифицированы." }
          ]}
          imageSrc={assetMap.find(a => a.id === 'hero-image')?.url ?? "/public/images/placeholder.webp"}
          imageAlt="Специалист по тюнингу"
          ariaLabel="FAQ section"
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Свяжитесь с нами"
          description="Заполните форму, и мы свяжемся с вами"
          inputs={[
            { name: "name", type: "text", placeholder: "Ваше имя", required: true },
            { name: "phone", type: "text", placeholder: "Ваш телефон", required: true },
            { name: "model", type: "text", placeholder: "Модель Audi", required: true }
          ]}
          textarea={{ name: "comment", placeholder: "Комментарий", rows: 5, required: true }}
          buttonText="Отправить"
          ariaLabel="Contact section"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            { title: "Компания", items: [{ label: "О нас", href: "about" }, { label: "Контакты", href: "contact" }] },
            { title: "Клиенты", items: [{ label: "Отзывы", href: "testimonials" }, { label: "Цены", href: "pricing" }] }
          ]}
          copyrightText="© 2025 Audi Auto Car Lab"
          logoSrc={assetMap.find(a => a.id === 'logo-1')?.url ?? "/public/images/placeholder.webp"}
        />
      </div>
    </ThemeProvider>
  );
}
