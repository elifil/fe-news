import React from 'react';
import { NewsItemList } from "../";
import { api } from '../../utils';

export const PageNewsList = () => (
    <NewsItemList ids={api.getItemsIds()}/>
)