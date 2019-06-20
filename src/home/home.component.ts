/// <reference path="../../typings/index.d.ts"/>
import * as sharkBar from '../images/sharkbar.jpg';

export const HomeComponent: angular.IComponentOptions = {
    template: `
    <h1>Home Component</h1>
    <img src="{{$ctrl.imageData}}">
    `,
    controller: class HomeComponent {
        constructor(){

        }
        imageData: any;
        $onInit() {
            this.imageData = sharkBar;
        }
    }
};