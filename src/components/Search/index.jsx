import debounce from 'lodash.debounce';
import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValueSearch } from '../../redux/slices/searchSlice';
import styles from './Search.module.scss';
export default function Search() {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setValueSearch(str));
    }, 150),
    [],
  );
  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enable-background="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
        />
        <line
          fill="none"
          stroke="#000000"
          stroke-miterlimit="10"
          stroke-width="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        onChange={onChangeInput}
        className={styles.input}
        value={value}
        placeholder="Поиск пиццы..."
      />
    </div>
  );
}
