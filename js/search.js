const productsRow = document.querySelector(".products-row");
const searchInput = document.querySelector(".search");
const productsCount = document.querySelector(".products-count");
const productsPgntn = document.querySelector(".products-pgntn");
let active = 1;

function getCard({ id, stars, img, desc, price }) {
  return `
  <div class="search-card ">
  <div class='search_card-img'>
      <img src="${img}" alt="" />
  </div>
<div class="search-content">
  <div class="search-price d-flex align-items-center justify-content-between">
    <h6>${price}</h6>
</div>
  <p>${desc}</p>
<div class="search-rating">
<img src="${stars}" alt="" />
</div>
<div class="search-button">
<button onclick="addProductToCart(${id})" class="search-btn">В Корзину</button>
</div>
</div>
</div>`;
}

function getPagination(data = searchproducts) {
  let itemsArr = [];
  let paginationItems = "";

  for (let i = 1; i <= Math.ceil(data.length / 10); i++) {
    itemsArr.push(i);
  }

  itemsArr.forEach((el) => {
    paginationItems += `<li class="page-item ${
      el === active ? "active" : ""
    }" onClick={getPage(${el})}><span class="page-link">${el}</span></li>`;
  });

  productsPgntn.innerHTML =
    data.length > 10
      ? `<ul class="pagination">
        ${
          active > 1
            ? `<li class="page-item" onClick={getPage('-')}>
          <span class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </span>
        </li>`
            : ""
        }
      ${paginationItems}
        ${
          active < itemsArr.length
            ? `<li class="page-item" onClick={getPage('+')}>
          <span class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </span>
        </li>`
            : ""
        }
      </ul>
    `
      : "";
}

getPagination();

function getProducts(data = searchproducts) {
  productsRow.innerHTML = "";
  let index = active - 1;
  data.slice(index * 10, index * 10 + 10).forEach((el) => {
    productsRow.innerHTML += getCard(el);
  });
  productsCount.innerHTML = `найдено ${data.length} продуктов!`;
}

getProducts();

searchInput.addEventListener("input", function () {
  let findedProducts = searchproducts.filter(
    (pr) =>
      pr.name.toLowerCase().includes(this.value.toLowerCase()) ||
      pr.description.toLowerCase().includes(this.value.toLowerCase())
  );
  active = 1;
  getProducts(findedProducts);
  getPagination(findedProducts);
});

function getPage(page) {
  if (page == "+") {
    active++;
  } else if (page == "-") {
    active--;
  } else {
    active = page;
  }
  getProducts();
  getPagination();
}
