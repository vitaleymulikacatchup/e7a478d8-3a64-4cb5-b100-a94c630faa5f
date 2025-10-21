"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import FaqSplitMedia from "@/components/sections/faq/FaqSplitMedia";
import ContactCenterForm from "@/components/sections/contact/ContactCenterForm";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Audi Auto Car Lab"
          logoSrc="https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Services", id: "about" },
            { name: "Portfolio", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Премиальный тюнинг Audi — безопасно, законно, OEM+"
          description="Stage 1–2, выхлоп, PPF, подвеска, диагностика."
          imageSrc="https://images.pexels.com/photos/14836039/pexels-photo-14836039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          buttons={[
            { text: "Записаться", href: "#contact" },
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
              imageSrc: "https://images.pexels.com/photos/14836039/pexels-photo-14836039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              title: "Выхлопные системы",
              description: "Оптимальные решения для выхлопных систем Audi.",
              imageSrc: "https://images.pexels.com/photos/1550611/pexels-photo-1550611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
              imageSrc: "https://images.pexels.com/photos/7144209/pexels-photo-7144209.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Joyful couple in their new car, holding keys in a dealership showroom, smiling warmly."
            },
            {
              id: "2",
              name: "Ольга Петрова",
              role: "Владелица Audi RS",
              company: "Любитель скорости",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4173091/pexels-photo-4173091.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cheerful woman in a car with a bottle, enjoying a sunny day on a road trip."
            },
            {
              id: "3",
              name: "Иван Сергеев",
              role: "Владелец Audi A5",
              company: "Автоэксперт",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/9661333/pexels-photo-9661333.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Lowered blue Audi with white rims in an underground parking garage at night."
            },
            {
              id: "4",
              name: "Мария Кузнецова",
              role: "Владелица Audi Q7",
              company: "Энтузиаст",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/15492067/pexels-photo-15492067.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Customized blue Audi TT sports car with striking neon lights parked in an urban environment."
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
          imageSrc="https://images.pexels.com/photos/14836039/pexels-photo-14836039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
            { title: "Компания", items: [{ label: "О нас", href: "#about" }, { label: "Контакты", href: "#contact" }] },
            { title: "Клиенты", items: [{ label: "Отзывы", href: "#testimonials" }, { label: "Цены", href: "#pricing" }] }
          ]}
          copyrightText="© 2025 Audi Auto Car Lab"
          logoSrc="https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
    </ThemeProvider>
  );
}
