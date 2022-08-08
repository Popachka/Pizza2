import React, { useEffect } from 'react';
import Categories from '../components/Categories';
import Pizza from '../components/Pizza';
import PizzaSkeleton from '../components/Pizza/PizzaSkeleton';
import Sort from '../components/Sort';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setCategoryId } from '../redux/slices/filterSlice';
import { fetchPizzas } from '../redux/slices/pizzaSlice';
import { Link } from 'react-router-dom';

export default function Home() {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sortType);
  const { items, status } = useSelector((state) => state.pizza);
  const { valueSearch } = useSelector((state) => state.search);
  useEffect(() => {
    const sortTypes = sortType.sort;

    dispatch(fetchPizzas({ sortTypes, categoryId, valueSearch }));
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
          {status === 'loading'
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
