class NavController {

    public isCollapsed: boolean = false;

    public ModalController() {
        this.isCollapsed = !this.isCollapsed;
    }

}

export const NavComponent = {
    controller: NavController,
    controllerAs: 'vm',
    template: `

        <div>
                <div ng-class="{navigation_burger : true , navigation_burger__active : vm.isCollapsed}" ng-click="vm.ModalController()">
                  <div class="burger__line"></div>
                  <div class="burger__line"></div>
                  <div class="burger__line"></div>
                </div>
                
                <nav ng-class="{navigation_menu_root : true , menu__open : vm.isCollapsed }">
                    <div>
                        <ul ng-click="vm.ModalController()">
                            <li ng-class="{active:vm.$state.includes('list')}">
                                <a ui-sref="list">List</a>
                            </li>
                            <li ng-class="{active:vm.$state.includes('add')}">
                                <a ui-sref="add">Add</a>
                            </li>
                        </ul>
                   </div>
             </nav>
        </div>
`
};
