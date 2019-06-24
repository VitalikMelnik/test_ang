import { Ng1StateDeclaration } from "@uirouter/angularjs";

export const homeState: Ng1StateDeclaration = {
  name: 'home',
  url: '/',
  component: 'appHome'
};

export const listState = {
  name: 'list',
  url: '/list',
  component: 'appList'
};

export const addState = {
  name: 'add',
  url: '/add',
  component: 'appAdd'
};