import React from "react";
import "./style.css";
import Title, { TitleSize } from "/src/components/ui/title/title";

function FeaturesItem() {
  return (
    <div className="feature-item">
      <div className="feature-item__header">
        <span className="feature-item__category">Фермерские продукты</span>
        <Title size={TitleSize.SMALL} className="feature-item__title">
          Заголовок
        </Title>
      </div>
      <p>
        Домашняя колбаса из мяса, соли и специй и колбаса из магазина —
        два настолько разных продукта, что они даже не родственники
      </p>
    </div>
  );
}

export default FeaturesItem;
