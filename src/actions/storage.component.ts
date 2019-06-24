import * as angular from 'angular';

export class StorageComponent {

    public static _data: Array<object>;

    // start public function for work

    public static get_data(): Array<object> {
        return this.data_processing(this._data, true);
    }

    public static initialization_local_storage(): void {
        this.initialization_local_storage_data();
    }

    public static save_all(data): { text: string, modal_window: boolean, list: Array<object> } {
        // if (this.arraysEqual(data.list, this._data)) {
        //     return {list: data.list, text: 'Must be change!', modal_window: true};
        // }
        return this.update_local_data(this.data_processing(data.list, false));
    }

    public static save_line(data): object {
        if (data.new_line.length <= 3) {
            return {err: 'Length must be more 3', new_line: data.new_line, modal_success: false};
        }
        return this.add_line_local_data(data.new_line);
    }

    // finish public function for work

    //add new line in local storage data
    private static add_line_local_data(data): object {
        let item = [
            {
                "section": data,
                "permission": {"view": false, "edit": false, "remove": false}
            }
        ];
        this._data = this._data.concat(item);
        localStorage.setItem('data', angular.toJson(this.data_processing(this._data, false)));
        return {err: '', new_line: '', modal_success: true};
    }

    // update local storage data
    private static update_local_data(data): { text: string, modal_window: boolean, list: Array<object> } {
        localStorage.setItem('data', angular.toJson(data));
        this._data = data;
        return {list: this.data_processing(this._data, true), text: 'Success!', modal_window: true};
    }

    // function for parse data (parse bool to string and back)
    private static data_processing(data, bool): Array<object> {
        if (Array.isArray(data)) {
            if (bool) {
                for (let i = 0; i < data.length; i++) {
                    for (let item in data[i].permission) {
                        data[i].permission[item] = (data[i].permission[item] == 'true')
                    }
                }
            } else {
                for (let i = 0; i < data.length; i++) {
                    for (let item in data[i].permission) {
                        data[i].permission[item] = data[i].permission[item] + '';
                    }
                }
            }
            return data;
        }
    }

    // initialization local data when start app
    private static initialization_local_storage_data(): void {
        if (localStorage.getItem('data')) {
            this._data = angular.fromJson(localStorage.getItem('data'));
        } else {
            let list: Array<object> = [
                {
                    "section": "calendar",
                    "permission": {"view": "false", "edit": "false", "remove": "false"}
                },
                {
                    "section": "profile",
                    "permission": {"view": "false", "edit": "false", "remove": "false"}
                },
                {
                    "section": "property",
                    "permission": {"view": "false", "edit": "false", "remove": "false"}
                },
                {
                    "section": "contacts",
                    "permission": {"view": "false", "edit": "false", "remove": "false"}
                },
            ];
            localStorage.setItem('data', angular.toJson(list));
            this._data = list;
        }
    }

    private static arraysEqual(a, b): boolean {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

}







