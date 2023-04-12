

let card_products = [
	{
		name: 'Молоко, сыр, яйцо',
		image: 'images/catalog/img1.png',
		id: 1,
	},
	{
		name: 'Хлеб',
		image: 'images/catalog/img2.png',
		id: 2,
	},
	{
		name: 'Фрукты и овощи',
		image: 'images/catalog/img3.png',
		id: 3,
	},
	{
		name: 'Замороженные продукты',
		image: 'images/catalog/img4.png',
		id: 4,
	},
	{
		name: 'Напитки',
		image: 'images/catalog/img5.png',
		id: 5,
	},
	{
		name: 'Кондитерские изделия',
		image: 'images/catalog/img6.png',
		id: 6,
	},
	{
		name: 'Чай, кофе',
		image: 'images/catalog/img7.png',
		id: 7,
	},
	{
		name: 'Бакалея',
		image: 'images/catalog/img8.png',
		id: 8,
	},
	{
		name: 'Здоровое питание',
		image: 'images/catalog/img9.png',
		id: 9,
	},
	{
		name: 'Зоотовары',
		image: 'images/catalog/img10.png',
		id: 10,
	},
	{
		name: 'Детское питание',
		image: 'images/catalog/img11.png',
		id: 11,
	},
	{
		name: 'Мясо, птица, колбаса',
		image: 'images/catalog/img12.png',
		id: 12,
	},
	{
		name: 'Непродовольственные товары',
		image: 'images/catalog/img13.png',
		id: 13,
	},
]

function getCard(img, content, id) {
	return `
  <div class="catalog-row">
      <div class="catalog-img">
        <img src="${img}" alt="" />
      </div>
   
      <div class="catalog-content">
      <a href="milk.html">  <h5>${content}</h5>  </a>
      </div>
    
    </button>
  </div>
  `
}

let productsContainer = document.querySelector('.catalog-products')

function getProducts(products) {
	productsContainer.innerHTML = ''
	for (el of products) {
		productsContainer.innerHTML += getCard(el.image, el.name, el.id)
	}
}

getProducts(card_products)

function getCategoryCard(id) {
	let productid = card_products.find(productid => productid.id === id)
	localStorage.setItem('categoryCard', JSON.stringify(productid))
	console.log(productid)
}