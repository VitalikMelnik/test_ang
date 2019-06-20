import { StorageComponent } from "../actions/storage.component";


export const AboutComponent: angular.IComponentOptions = {
    template: `
    <h1>About Component {{$ctrl.name }}</h1>
    `,
    controller: class AboutComponent {
        name: string;
        $onInit() {
            let data = new StorageComponent();
            this.name = data.get();
        }


    }
};