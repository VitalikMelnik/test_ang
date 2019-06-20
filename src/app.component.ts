export const AppComponent = {
    template: `
    <div>
        <h2>{{ $ctrl.name }}</h2>
        <app-nav></app-nav>
        <div ui-view></div>
      </div>
    `,
    controller: class AppComponent {
        name: string;

        $onInit() {
            this.name = 'AngularJS, Typescript, and Webpack'
        }
    }
};


