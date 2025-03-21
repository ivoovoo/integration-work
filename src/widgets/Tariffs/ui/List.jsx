import React from "react";
import Item from "./Item";

const List = () => {
  return (
    <ul className="tariffs__list">
      <Item
        title={"Просветление"}
        price={"555 ₽"}
        people={235}
        points={[
          "Доступ к сервису",
          "Анализ ключевых событий",
          "Рекомендации по личностному росту",
        ]}
      />
      <Item
        title={"Путь успеха"}
        price={"5 555 ₽"}
        people={56}
        points={[
          "Возможности предыдущего тарифа",
          "Глубокий анализ текущих тенденций",
          "Индивидуальные стратегии для достижения целей",
        ]}
      />
      <Item
        title={"Гранд мистик"}
        price={"7 777 ₽"}
        people={573}
        points={[
          "Возможности предыдущего тарифа",
          "Эксклюзивные мистические сессии",
          "Консультация по карте судьбы",
        ]}
      />
    </ul>
  );
};

export default List;
