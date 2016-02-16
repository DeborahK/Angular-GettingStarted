System.register(['angular2/core', 'angular2/router', './product.service', "../shared/star.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, product_service_1, star_component_1;
    var ProductDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            }],
        execute: function() {
            ProductDetailComponent = (function () {
                function ProductDetailComponent(_productService, _routeParams) {
                    this._productService = _productService;
                    this._routeParams = _routeParams;
                    this.pageTitle = "Product Detail";
                }
                ProductDetailComponent.prototype.ngOnInit = function () {
                    var id = parseInt(this._routeParams.get('id'), 10);
                    this.getProduct(id);
                };
                ProductDetailComponent.prototype.getProduct = function (id) {
                    var _this = this;
                    this._productService.getProduct(id)
                        .subscribe(function (product) { return _this.product = product; }, function (error) { return _this.errorMessage = error; });
                };
                ProductDetailComponent.prototype.convertToDate = function (dateString) {
                    return new Date(dateString);
                };
                ProductDetailComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/products/product-detail.component.html',
                        styleUrls: ['app/products/product-detail.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, star_component_1.StarComponent]
                    }), 
                    __metadata('design:paramtypes', [product_service_1.ProductService, router_1.RouteParams])
                ], ProductDetailComponent);
                return ProductDetailComponent;
            })();
            exports_1("ProductDetailComponent", ProductDetailComponent);
        }
    }
});
//# sourceMappingURL=product-detail.component.js.map