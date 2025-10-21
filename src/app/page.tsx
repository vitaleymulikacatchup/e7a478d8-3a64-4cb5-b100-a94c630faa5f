"use client";

import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactCenterForm from '@/components/sections/contact/ContactCenterForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from '@/providers/ThemeProvider';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal 
          brandName="{{Бренд булочек}}"
          button={{ text: "Get Started", href: "#contact" }}
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroBillboard 
          title="Свежие булочки каждый день" 
          description="Выпекаем с 6:00, без заморозки"
          imageSrc="https://images.pexels.com/photos/2000511/pexels-photo-2000511.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ariaLabel="Hero section"
          buttons={[
            { text: "Заказать сейчас", href: "#contact" },
            { text: "Позвонить {{phone}}", href: "tel:{{phone}}" }
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          title="О нас"
          description="Узнайте, почему наши булочки такие свежие."
          bulletPoints={[
            { title: "Свежо и вкусно", description: "Всегда свежая выпечка из лучших ингредиентов." },
            { title: "Натуральные ингредиенты", description: "Используем только лучшие натуральные продукты." },
            { title: "Доставка по {{city}}", description: "Быстрая и надежная доставка." }
          ]}
          imageSrc="https://images.pexels.com/photos/34384683/pexels-photo-34384683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Baking ingredients"
          ariaLabel="About section"
        />
      </div>
      <div id="product" data-section="product">
        <ProductCardOne
          title="Наше меню"
          description="Попробуйте лучшие булочки в городе."
          products={[
            { id: "1", name: "Булочка с корицей", price: "{{price1}}", imageSrc: "https://images.pexels.com/photos/351962/pexels-photo-351962.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", onProductClick: "#" },
            { id: "2", name: "Ванильная сдоба", price: "{{price2}}", imageSrc: "https://images.pexels.com/photos/34364392/pexels-photo-34364392.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", onProductClick: "#" },
            { id: "3", name: "С изюмом", price: "{{price3}}", imageSrc: "https://images.pexels.com/photos/34363022/pexels-photo-34363022.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", onProductClick: "#" }
          ]}
          buttons={[
            { text: "Смотреть всё меню", href: "#" }
          ]}
        />
      </div>
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Отзывы"
          description="Что говорят наши клиенты"
          testimonials={[
            { id: "1", name: "Иван Петров", role: "Клиент", testimonial: "Обожаю их булочки, особенно с корицей!" },
            { id: "2", name: "Анна Кузнецова", role: "Клиент", testimonial: "Всегда свежие и вкусные, рекомендую." }
          ]}
          ariaLabel="Testimonials section"
        />
      </div>
      <div id="faq" data-section="faq">
        <FaqBase
          title="Часто задаваемые вопросы"
          description="Найдите ответы на ваши вопросы"
          faqs={[
            { id: "1", title: "Как проходит доставка?", content: "Доставка осуществляется по {{city}} в течение дня." },
            { id: "2", title: "Когда выпекаются булочки?", content: "Выпекаем ежедневно с 6:00 утра." },
            { id: "3", title: "Как можно оплатить?", content: "Принимаем наличные и банковские карты." }
          ]}
          ariaLabel="FAQ section"
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenterForm
          title="Свяжитесь с нами"
          description="Оставьте заявку, и мы свяжемся с вами"
          inputs={[
            { name: "name", type: "text", placeholder: "Ваше имя", required: true },
            { name: "phone", type: "text", placeholder: "Ваш телефон", required: true },
            { name: "order", type: "text", placeholder: "Позиции/кол-во", required: true }
          ]}
          textarea={{ name: "comment", placeholder: "Комментарий", rows: 5, required: true }}
          buttonText="Отправить"
          ariaLabel="Contact section"
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Меню",
              items: [
                { label: "О нас", href: "#about" },
                { label: "Контакты", href: "#contact" }
              ]
            },
            {
              title: "Информация",
              items: [
                { label: "Отзывы", href: "#testimonial" },
                { label: "Вопросы", href: "#faq" }
              ]
            }
          ]}
          copyrightText="© {{year}} {{Бренд булочек}}"
          logoSrc="https://images.pexels.com/photos/34384690/pexels-photo-34384690.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>
    </ThemeProvider>
  );
}
