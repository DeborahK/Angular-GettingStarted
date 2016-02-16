System.register([], function(exports_1) {
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(productId, productName, productCode, releaseDate, price, description, starRating, imageUrl) {
                    this.productId = productId;
                    this.productName = productName;
                    this.productCode = productCode;
                    this.releaseDate = releaseDate;
                    this.price = price;
                    this.description = description;
                    this.starRating = starRating;
                    this.imageUrl = imageUrl;
                }
                Product.prototype.calculateDiscount = function (percent) {
                    return this.price - (this.price * percent / 100);
                };
                return Product;
            })();
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=product.js.map