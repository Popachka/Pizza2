import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function FullPizza() {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    price: string;
    name: string;
  }>();
  const { id } = useParams();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://62d7e8c49c8b5185c77eb125.mockapi.io/items/' + id);
        setPizza(data);
      } catch (err) {
        alert('Ошибка при получении пиццы');
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return <div>'Загрузка...'</div>;
  }
  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.name}</h2>
      <span> {pizza.price} ₽</span>
    </div>
  );
}

export default FullPizza;
