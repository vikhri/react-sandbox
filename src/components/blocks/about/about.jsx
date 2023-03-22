import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Img from "/src/assets/about.png";
import "./style.css";

function About() {
  return (
    <section className="about">
      <div className="about__content">
        <div className="about__wrapper">
          <Title size={TitleSize.BIG}>
            Магазин фермерских продуктов с доставкой{" "}
          </Title>
          <p className="about__text">
            Все продукты изготавливаются под заказ. Фермеры начинают готовить
            продукты за день до отправки заказа клиентам. Именно поэтому мы
            принимаем заказы заранее и доставляем продукты максимально свежими.
          </p>
        </div>
        <img className="about__img" src={Img}></img>
      </div>
    </section>
  );
}

export default About;
