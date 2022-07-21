import React, { useState } from 'react';

export default function Categories({ value, onClickCategoryId }) {
  const [countCategory, setCountCategory] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const onClickCategory = (i) => {
    setCountCategory(i);
    onClickCategoryId(i);
  };
  return (
    <div className="categories">
      <ul>
        {categories.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => onClickCategory(i)}
              className={countCategory === i ? 'active' : ''}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
