System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FilterEntryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilterEntryComponent = (function () {
                function FilterEntryComponent() {
                    this.filterText = "";
                    this.filterChanged = new core_1.EventEmitter();
                }
                FilterEntryComponent.prototype.onChanged = function () {
                    this.filterChanged.emit(this.filterText);
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', (typeof (_a = typeof core_1.EventEmitter !== 'undefined' && core_1.EventEmitter) === 'function' && _a) || Object)
                ], FilterEntryComponent.prototype, "filterChanged", void 0);
                FilterEntryComponent = __decorate([
                    core_1.Component({
                        selector: 'mh-filter-entry',
                        template: "\n      <div class=\"row\">\n        <div class=\"col-md-2\">Filter by:</div>\n        <div class=\"col-md-4\">\n            <input type=\"text\" [(ngModel)]=\"filterText\" (keyup)=\"onChanged()\" (input)=\"onChanged()\"/>\n        </div>\n      </div>\n      <div class=\"row\" [hidden]=\"!filterText\">\n        <div class=\"col-md-6\">\n            <h3>Movies filtered by: {{filterText}}</h3>\n        </div>\n      </div>\n      <br/>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterEntryComponent);
                return FilterEntryComponent;
                var _a;
            })();
            exports_1("FilterEntryComponent", FilterEntryComponent);
        }
    }
});
//# sourceMappingURL=filter-entry.component.js.map