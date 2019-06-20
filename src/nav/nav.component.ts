
class NavController {

    public isCollapsed: boolean = false;

    public ModalController (){
        this.isCollapsed = !this.isCollapsed;
    }

}



export const NavComponent = {
    controller: NavController,
    controllerAs: 'vm',
    template: `
<div> 
<div ng-click="vm.ModalController()">open</div>
        <nav ng-class="{navigation_menu_root : true , menu__open : vm.isCollapsed }">
            <div>
                <ul ng-click="vm.ModalController()">
                    <li ng-class="{active:vm.$state.includes('home')}">
                        <a ui-sref="home">Home</a>
                    </li>
                    <li ng-class="{active:vm.$state.includes('about')}">
                        <a ui-sref="about">About</a>
                    </li>
                </ul>
           </div>
     </nav>
</div>
`
};
