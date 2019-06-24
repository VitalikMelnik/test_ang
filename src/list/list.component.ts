import {StorageComponent} from "../actions/storage.component";


export const ListComponent: angular.IComponentOptions = {
    template: `
    <div class="list_component_root">
        <!-- <label class="list_component_search">Search: <input ng-model="searchText"></label> -->
        <div ng-class="{list_component_modal : true , list_component_modal__open : $ctrl.scope.modal_window }">
               <p>{{$ctrl.scope.text}}</p> 
            <div class="list_component_btn__add" ng-click="$ctrl.success()">Ok</div>
        </div>
        <div class="list_control_all_column">
            <div>
                Section
            </div>              
            <div>  
                <input type="checkbox" ng-model="$ctrl.view_all_checked"> 
                <label>Chek all <span>View</span></label>
            </div>
            <div>  
               <input type="checkbox" ng-model="$ctrl.edit_all_checked" ng-disabled='!$ctrl.view_all_checked' > 
                <label>Chek all <span>Edit</span></label>
            </div>
            <div>  
                <input type="checkbox" ng-model="$ctrl.remove_all_checked" ng-disabled='!$ctrl.edit_all_checked || !$ctrl.view_all_checked' > 
                <label >Chek all <span>Remove</span></label>
            </div>
    </div>
        <ul class="list_component_ul">
            <li ng-repeat="item in $ctrl.scope.list | filter:searchText">
            <div>
                {{item.section}}
            </div>              
            <div>  
                <input type="checkbox" id="{{$index + 'view'}}" ng-model="item.permission.view" ng-change="$ctrl.check_view()" />
                <label for="{{$index + 'view'}}">View</label>
            </div>
            <div>  
                <input type="checkbox"  id="{{$index + 'edit'}}" ng-model="item.permission.edit" ng-disabled="!item.permission.view" ng-change="$ctrl.check_edit()"/>
                <label for="{{$index + 'edit'}}">Edit</label>
            </div>
            <div>  
                <input  type="checkbox"  id="{{$index + 'remove'}}" ng-model="item.permission.remove" ng-disabled="!item.permission.edit || !item.permission.view" ng-change="$ctrl.check_remove()"/>
                <label for="{{$index + 'remove'}}">Remove</label>
            </div>
          </li>
       </ul>
        <div class="list_component_btn__save" ng-click="$ctrl.save()">Save</div>
    </div>
     `,
    controller: class ListComponent {
        scope: { text: string, modal_window: boolean, list: Array<object> } = {
            list: [],
            text: '',
            modal_window: false,
        };
        view_all_checked: boolean = false;
        edit_all_checked: boolean = false;
        remove_all_checked: boolean = false;


        static check_all_view_true(element) {
            return (element.permission.view == true);
        }

        static check_all_edit_true(element) {
            return (element.permission.edit == true);
        }

        static check_all_remove_true(element) {
            return (element.permission.remove == true);
        }

        check_view() {
            this.view_all_checked = this.scope.list.every(ListComponent.check_all_view_true);
        }

        check_edit() {
            this.edit_all_checked = this.scope.list.every(ListComponent.check_all_edit_true);
        }

        check_remove() {
            this.remove_all_checked = this.scope.list.every(ListComponent.check_all_remove_true);
        }

        save() {
            this.scope = StorageComponent.save_all(this.scope);
        };

        success() {
            this.scope.modal_window = false;
        }

        $onInit() {
            this.scope.list = StorageComponent.get_data();
            this.check_view();
            this.check_edit();
            this.check_remove();

        }
    }
};