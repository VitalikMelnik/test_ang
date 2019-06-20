
export const AboutComponent: angular.IComponentOptions = {
    template: `
    <h1>About Component</h1>
    `,
    controller: class AboutComponent {
        name: string;
        $onInit() {
            this.name = 'AngularJS, Typescript, and Webpack'
        }
    }
};