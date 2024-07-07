import React from 'react';
import { Provider } from 'react-redux';
import  configureStore  from '@reduxjs/toolkit';
import Cart from './Cart'; // Cart 컴포넌트 파일 경로
import storeConfig from '../store'; // Redux store 설정 파일

// Storybook에서 사용할 mock store 생성 함수
const createMockStore = (initialState) => {
  return configureStore({
    reducer: storeConfig.reducer,
    preloadedState: initialState
  });
};

export default {
  title: 'Components/Cart',
  component: Cart,
  decorators: [(Story, { args }) => (
    <Provider store={createMockStore(args.initialState)}>
      <Story />
    </Provider>
  )],
};

// 기본 장바구니 스토리
export const DefaultCart = {
  args: {
    initialState: {
      cart: [
        {id: 1, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1}
      ]
    }
  }
};

// 빈 장바구니 스토리
export const EmptyCart = {
  args: {
    initialState: {
      cart: []
    }
  }
};

// 여러 아이템이 있는 장바구니 스토리
export const MultipleItemsCart = {
  args: {
    initialState: {
      cart: [
        {id: 1, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1},
        {id: 3, name: 'Red Sneakers', count: 3},
        {id: 4, name: 'Blue T-Shirt', count: 1}
      ]
    }
  }
};