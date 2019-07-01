using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Products.API.Controllers
{
	public class Product
	{
		public int productId;
		public string productName;
		public string productCode;
		public string releaseDate;
		public float price;
		public string description;
		public float starRating;
		public string imageUrl;
	}	   

	[Route("api/[controller]")]
	[ApiController]
	public class ProductsController : ControllerBase
	{
		private List<Product> ProductList = new List<Product>() {
				new Product {
					productId =  1, productName = "Leaf Rake",
					productCode = "GDN-0011", releaseDate = "March 19, 2016",
					description = "Leaf rake with 48-inch wooden handle.", price = 19.95F,
					starRating = 3.2F,imageUrl = "https://upload.wikimedia.org/wikipedia/commons/4/41/Wooden_rake.jpg"
							},
				new Product {
					productId = 2, productName = "Garden Cart",
					productCode = "GDN-0023", releaseDate = "March 18, 2016",
					description = "15 gallon capacity rolling garden cart", price = 32.99F,
					starRating = 4.2F, imageUrl = "https://www.cartsvermont.com/wp-content/uploads/carts-vermont-mid-01.jpg"
							},
				new Product {
					productId = 5, productName = "Hammer",
					productCode= "TBX-0048", releaseDate = "May 21, 2016",
					description = "Curved claw steel hammer",
					price = 8.9F, starRating = 4.8F, imageUrl = "https://upload.wikimedia.org/wikipedia/commons/8/84/Claw-hammer.jpg"
							},
				new Product {
					productId = 8, productName = "Saw",
					productCode = "TBX-0022", releaseDate = "May 15, 2016",
					description = "15-inch steel blade hand saw", price = 11.55F,
					starRating = 3.7F, imageUrl = "https://upload.wikimedia.org/wikipedia/commons/6/64/Crosscut_saw.JPG"
							},
				new Product {
					productId = 10, productName = "Video Game Controller",
					productCode = "GMG-0042", releaseDate = "October 15, 2015",
					description = "Standard two-button video game controller", price = 35.95F,
					starRating = 4.6F, imageUrl = "https://upload.wikimedia.org/wikipedia/commons/d/d5/Nintendo-Switch-Pro-Controller-FL.jpg"
							}
		};


		// GET api/products
		[HttpGet]
		public ActionResult<string> Get()
		{
			string product = JsonConvert.SerializeObject(ProductList);

			return product;
		}

		// GET api/products/5
		[HttpGet("{id}")]
		public ActionResult<string> Get(int id)
		{
			Product Product = ProductList.FirstOrDefault( p => p.productId == id );

			string product = JsonConvert.SerializeObject(Product);

			return product;

		}

	}
}
