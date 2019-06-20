import { Ng1StateDeclaration } from "@uirouter/angularjs";

export const homeState: Ng1StateDeclaration = {
  name: 'home',
  url: '/',
  component: 'appHome'
};

export const aboutState = {
  name: 'about',
  url: '/about',
  component: 'appAbout'
};