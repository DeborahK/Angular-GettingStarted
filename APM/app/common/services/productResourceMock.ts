module app.common {

    var mockResource = angular
        .module("productResourceMock",
            ["ngMockE2E"]);

    mockResource.run(mockRun);
    
    mockRun.$inject = ["$httpBackend"];
    function mockRun($httpBackend: ng.IHttpBackendService) : void {
        var products: app.domain.IProduct[] = [];
        var product: app.domain.IProduct;

        product = new app.domain.Product(1, "Leaf Rake", "GDN-0011", new Date(2009, 2, 19), 19.95,
            "Leaf rake with 48-inch wooden handle.",
            "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png");
        products.push(product);

        product = new app.domain.Product(2, "Garden Cart", "GDN-0023", new Date(2010, 2, 18), 26.95,
            "15 gallon capacity rolling garden cart",
            "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png");
        products.push(product);

        product = new app.domain.Product(3, "Saw", "TBX-002", new Date(2002, 3, 1), 16.95,
            "15-inch steel blade hand saw",
            "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png");
        products.push(product);
 
         product = new app.domain.Product(4, "Hammer", "TBX-0048", new Date(2013, 4, 21), 8.99,
            "Curved claw steel hammer",
            "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png");
        products.push(product);
        
         product = new app.domain.Product(5, "Video Game Controller", "GMG-0042", new Date(2012, 9, 25), 35.95,
            "Standard five-button video game controller",
            "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png");
        products.push(product);

        var productUrl = "/api/products";

        $httpBackend.whenGET(productUrl).respond(products);

        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '');
        $httpBackend.whenGET(editingRegex).respond(function(method, url, data) {
            var product = { "productId": 0 };
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id) {
                        product = products[i];
                        break;
                    }
                }
            }
            return [200, product, {}];
        });

        // Catch all for testing purposes
        $httpBackend.whenGET(/api/).respond(function(method, url, data) {
            return [200, products, {}];
        });
                
        // Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough();
    }
}