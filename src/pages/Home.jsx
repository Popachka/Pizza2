import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import PizzaSkeleton from '../components/Pizza/PizzaSkeleton';
import Sort from '../components/Sort';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setCategoryId } from '../redux/slices/filterSlice';
export default function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortType);
  const { valueSearch } = useSelector((state) => state.search);
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const finalLoading = (data) => {
    setItems(data);
    setIsLoading(false);
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://62d7e8c49c8b5185c77eb125.mockapi.io/items?${
          categoryId > 0 ? `category=${categoryId}` : ''
        }&sortBy=${sortType.sort}&order=desc&search=${valueSearch}`,
      )
      .then(({ data }) => finalLoading(data))
      .catch((err) => {
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, valueSearch]);

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories onClickCategoryId={(id) => dispatch(setCategoryId(id))} value={categoryId} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => {
                return <PizzaSkeleton key={index} />;
              })
            : items.map((obj, i) => {
                return <Pizza key={i} {...obj} />;
              })}
        </div>
      </div>
    </div>
  );
}
