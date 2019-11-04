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
					starRating = 3.2F,imageUrl = "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
							},
				new Product {
					productId = 2, productName = "Garden Cart",
					productCode = "GDN-0023", releaseDate = "March 18, 2016",
					description = "15 gallon capacity rolling garden cart", price = 32.99F,
					starRating = 4.2F, imageUrl = "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
							},
				new Product {
					productId = 5, productName = "Hammer",
					productCode= "TBX-0048", releaseDate = "May 21, 2016",
					description = "Curved claw steel hammer",
					price = 8.9F, starRating = 4.8F, imageUrl = "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
							},
				new Product {
					productId = 8, productName = "Saw",
					productCode = "TBX-0022", releaseDate = "May 15, 2016",
					description = "15-inch steel blade hand saw", price = 11.55F,
					starRating = 3.7F, imageUrl = "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
							},
				new Product {
					productId = 10, productName = "Video Game Controller",
					productCode = "GMG-0042", releaseDate = "October 15, 2015",
					description = "Standard two-button video game controller", price = 35.95F,
					starRating = 4.6F, imageUrl = "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
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
