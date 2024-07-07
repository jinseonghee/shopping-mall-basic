import React from 'react';
import { fn } from '@storybook/test';
import Card from "./Card";
import PropTypes from "prop-types";

const shoesData = [
    { id: 0, title: "White and Black", content: "Born in France", price: 120000 },
    { id: 1, title: "Red Knit", content: "Born in Seoul", price: 110000 },
    { id: 2, title: "Grey Yordan", content: "Born in the States", price: 130000 },
    { id: 3, title: "Flowey", content: "only 5 inches", price: 120000 },
    { id: 4, title: "Baby shoes", content: "for less than 6", price: 120000 },
    { id: 5, title: "Red Herring", content: "Born in France", price: 120000 },
    { id: 6, title: "Sijang", content: "from Dongmyo station", price: 120000 },
    { id: 7, title: "Tag gari", content: "ali and taobao", price: 120000 },
    { id: 8, title: "Flyer", content: "Refund not available", price: 120000 }
];

export default {
    title: 'Card',
    component: Card,
    parameters: {
        layout: 'centered',  // 가운데에 셋팅
    },
    argTypes: {
        i: {control: 'number'},
    },
    tags: ['autodocs'],  // 문서자동생성
    args: { onClick:  fn()}  // action 탭에 동작이 쌓임, storybook 라이브러리에서 가져옴
};

const Template = (args) => {
    // i 값에 따라 shoes 객체 동적 생성
    const shoes = shoesData[args.i - 1] || { title: 'Unknown Shoes', price: 'N/A' };
    return <Card {...args} shoes={shoes} />;
};

export const firstCard = Template.bind({});
firstCard.args = {
    i: 1,
    primary: true,
    label: 'Add',
};

export const secondCard = Template.bind({});
secondCard.args = {
    i: 2,
    size: 'large',
    label: 'Add 2',
};




