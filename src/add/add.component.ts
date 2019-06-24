import {StorageComponent} from "../actions/storage.component";

export const AddComponent: angular.IComponentOptions = {
    template: `
    <div class="add_component_root">
    
        <div ng-class="{add_component_modal : true , add_component_modal__open : $ctrl.scope.modal_success }">
            <p>Your line add! Success!</p>
            <button class="add_component_btn__add" ng-click="$ctrl.close_modal()">Ok</button>
            
        </div>
         <div class="input__text">      
          <input type="text" required ng-model="$ctrl.scope.new_line">
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Enter </label>
        </div>
        
        <span class="add_component__err">{{$ctrl.scope.err}}</span>
        <button class="add_component_btn__add" ng-click="$ctrl.add_new()">Add new line</button>
    </div>
     `,
    controller: class addComponent {
        scope: object = {
            new_line: '',
            modal_success: false,
            err: ''
        };

        close_modal() {
            this.scope = {
                new_line: '',
                modal_success: false,
                err: ''
            };
        }

        add_new() {
            this.scope = StorageComponent.save_line(this.scope);
        }
        $onInit() {


        }
    }
};