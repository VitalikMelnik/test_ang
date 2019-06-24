/// <reference path="../../typings/index.d.ts"/>
import * as sharkBar from '../images/logo.jpg';
export const HomeComponent: angular.IComponentOptions = {
    template: `
    <div class="home_component_root">
        <h1>Test app by Vitalii Melnyk</h1>
        <img alt="home logo" src="{{$ctrl.imageData}}">
    </div>
    `,
    controller: class HomeComponent {
        imageData: any;

        $onInit() {
            this.imageData = sharkBar;
        }
    }
};