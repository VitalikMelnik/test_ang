import { StorageComponent } from "./actions/storage.component";


export const AppComponent = {
    template: `
    <div>
        <div class="root_header"><h2>{{ $ctrl.name }}</h2></div>
        <app-nav class="nav_component_root"></app-nav>
        <div ui-view></div>
      </div>
    `,
    controller: class AppComponent {
        name: string;

        $onInit() {
            StorageComponent.initialization_local_storage();
            this.name = 'AngularJS, Typescript, and Webpack'
        }
    }
};


