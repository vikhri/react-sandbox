import React from "react";
import FeaturesItem from "/src/components/blocks/features-item/features-item";
import Title, { TitleSize } from "/src/components/ui/title/title";
import Button from "/src/components/ui/button/button";
import "./style.css";

function FeaturesList({ features }) {
  return (
    <section className="feature">
      {features?.length ? (
        <>
          <Title>Почему фермерские продукты лучшe?</Title>
          <ul className="feature__list">
            {features.map((feature) => (
              <li className="feature__item" key={feature.id}>
                <FeaturesItem {...feature} />
              </li>
            ))}
          </ul>
          <Button>Купить</Button>
        </>
      ) : null}
    </section>
  );
}

export default FeaturesList;
