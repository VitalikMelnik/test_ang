
class NavController {

    public isCollapsed: boolean = true;


}

export const NavComponent = {
    controller: NavController,
    controllerAs: 'vm',
    template: `
        <nav>
            <div>
                <ul >
                    <li ng-class="{active:vm.$state.includes('home')}">
                        <a ui-sref="home">Home</a>
                    </li>
                    <li ng-class="{active:vm.$state.includes('about')}">
                        <a ui-sref="about">About</a>
                    </li>
                </ul>
           </div>
     </nav>`
};
