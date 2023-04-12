const s2 = document.querySelector(".s2-row");
s2.style.display = "flex";
s2.style.flexWrap = "wrap";
s2.style.gap = "10px";
s2.style.justifyContent = "space-between";

const getcard = (p) => {
  let {
    img,
    like,
    discount,
    price,
    default_price,
    payment,
    default_payment,
    desc,
    fullstar,
    star,
  } = p;
  const s2Card = document.createElement("div");
  s2Card.className = "s2-card";
  s2Card.style.backgroundColor = "white";
  s2Card.style.boxShadow = "1px 2px 4px rgba(0, 0, 0, 0.1);";
  s2Card.style.borderRadius = "4px";
  s2Card.style.display = "flex";
  s2Card.style.alignItems = "center";
  s2Card.style.flexDirection = "column";

  const s2CardHeader = document.createElement("div");
  s2CardHeader.className = "s2-card-header";
  s2CardHeader.style.position = "relative";
  s2CardHeader.style.backgroundColor = "white";

  const image = document.createElement("img");
  image.src = img;
  image.style.width = "100%";

  const likeButton = document.createElement("button");
  likeButton.style.position = "absolute";
  likeButton.style.top = "5px";
  likeButton.style.right = "5px";
  likeButton.style.border = "none";
  likeButton.style.backgroundColor = "white";
  const likee = document.createElement("img");
  likee.src = like;
  likeButton.appendChild(likee);

  const discountt = document.createElement("p");
  discountt.textContent = discount;
  discountt.className = "discount";

  s2CardHeader.append(image, likeButton, discountt);

  //  card body

  const s2CardBody = document.createElement("div");
  s2CardBody.className = "card-body";
  s2CardBody.style.marginTop = "8px";

  const prices = document.createElement("div");
  prices.style.display = "flex";
  prices.style.justifyContent = "space-between";

  const priceLeft = document.createElement("div");
  const cost1 = document.createElement("h2");
  cost1.textContent = price;
  cost1.style.color = "#414141";
  cost1.style.fontSize = "18px";
  cost1.style.fontWeight = "700px";
  const cost1d = document.createElement("p");
  cost1d.textContent = payment;
  cost1d.style.color = "#BFBFBF";
  cost1d.style.fontSize = "12px";
  cost1d.style.fontWeight = "400";
  priceLeft.append(cost1, cost1d);

  const priceRight = document.createElement("div");
  const cost2 = document.createElement("h6");
  cost2.textContent = default_price;
  cost2.style.color = "#414141";
  cost2.style.fontSize = "16px";
  cost2.style.fontWeight = "400px";
  const cost2d = document.createElement("p");
  cost2d.textContent = default_payment;
  cost2d.style.color = "#BFBFBF";
  cost2d.style.fontSize = "12px";
  cost2d.style.fontWeight = "400";
  priceRight.append(cost2, cost2d);

  prices.append(priceLeft, priceRight);

  const description = document.createElement("p");
  description.textContent = desc;
  description.style.maxWidth = "256px";
  description.style.fontSize = "16px";
  description.style.fontWeight = "400";
  description.style.color = " #414141";
  description.style.padding = "8px 0";

  const card_rating = document.createElement("div");
  card_rating.style.display = "flex";
  card_rating.style.gap = "4px";
  card_rating.style.marginBottom = "8px";
  for (let i = 0; i < fullstar; i++) {
    const star = document.createElement("img");
    star.src = "images/star-full.svg";
    card_rating.append(star);
  }
  for (let i = 0; i < star; i++) {
    const star_full = document.createElement("img");
    star_full.src = "images/star.svg";
    card_rating.append(star_full);
  }

  const vkorzinku = document.createElement("button");
  vkorzinku.textContent = "В корзину";
  vkorzinku.className = "vkorzinku";

  s2CardBody.append(prices, description, card_rating, vkorzinku);

  s2Card.append(s2CardHeader, s2CardBody);

  return s2Card;
};

products.map((p) => {
  s2.append(getcard(p));
});

// s3

const s3 = document.querySelector(".s3-row");
s3.style.display = "flex";
s3.style.flexWrap = "wrap";
s3.style.gap = "10px";
s3.style.justifyContent = "space-between";

const getcard2 = (p) => {
  let { img, like, price, desc, fullstar, star } = p;
  const s3Card = document.createElement("div");
  s3Card.className = "s3-card";
  s3Card.style.backgroundColor = "white";
  s3Card.style.boxShadow = "1px 2px 4px rgba(0, 0, 0, 0.1);";
  s3Card.style.borderRadius = "4px";
  s3Card.style.display = "flex";
  s3Card.style.alignItems = "center";
  s3Card.style.flexDirection = "column";

  const s3CardHeader = document.createElement("div");
  s3CardHeader.className = "s3-card-header";
  s3CardHeader.style.position = "relative";
  s3CardHeader.style.backgroundColor = "white";

  const image = document.createElement("img");
  image.src = img;
  image.style.width = "100%";

  const likeButton = document.createElement("button");
  likeButton.style.position = "absolute";
  likeButton.style.top = "5px";
  likeButton.style.right = "5px";
  likeButton.style.border = "none";
  likeButton.style.backgroundColor = "white";
  const likee = document.createElement("img");
  likee.src = like;
  likeButton.appendChild(likee);

  s3CardHeader.append(image, likeButton);

  //  card body

  const s3CardBody = document.createElement("div");
  s3CardBody.className = "card-body";
  s3CardBody.style.marginTop = "8px";

  const prices = document.createElement("div");

  const pricee = document.createElement("div");
  const cost1 = document.createElement("h2");
  cost1.textContent = price;
  cost1.style.color = "#414141";
  cost1.style.fontSize = "18px";
  cost1.style.fontWeight = "700px";
  pricee.append(cost1);

  prices.appendChild(pricee);

  const description = document.createElement("p");
  description.textContent = desc;
  description.style.maxWidth = "256px";
  description.style.fontSize = "16px";
  description.style.fontWeight = "400";
  description.style.color = " #414141";
  description.style.padding = "26px 0 8px";

  const card_rating = document.createElement("div");
  card_rating.style.display = "flex";
  card_rating.style.gap = "4px";
  card_rating.style.marginBottom = "8px";
  for (let i = 0; i < fullstar; i++) {
    const star = document.createElement("img");
    star.src = "images/star-full.svg";
    card_rating.append(star);
  }
  for (let i = 0; i < star; i++) {
    const star_full = document.createElement("img");
    star_full.src = "images/star.svg";
    card_rating.append(star_full);
  }

  const vkorzinku = document.createElement("button");
  vkorzinku.textContent = "В корзину";
  vkorzinku.className = "vkorzinku";

  s3CardBody.append(prices, description, card_rating, vkorzinku);

  s3Card.append(s3CardHeader, s3CardBody);

  return s3Card;
};

news.map((p) => {
  s3.append(getcard2(p));
});

// s4

const s4 = document.querySelector(".s4-row");
s4.style.display = "flex";
s4.style.flexWrap = "wrap";
s4.style.gap = "10px";
s4.style.justifyContent = "space-between";

const getcard3 = (p) => {
  let { img, like, price, desc, fullstar, star } = p;
  const s4Card = document.createElement("div");
  s4Card.className = "s4-card";
  s4Card.style.backgroundColor = "white";
  s4Card.style.boxShadow = "1px 2px 4px rgba(0, 0, 0, 0.1);";
  s4Card.style.borderRadius = "4px";
  s4Card.style.display = "flex";
  s4Card.style.alignItems = "center";
  s4Card.style.flexDirection = "column";

  const s4CardHeader = document.createElement("div");
  s4CardHeader.className = "s4-card-header";
  s4CardHeader.style.position = "relative";
  s4CardHeader.style.backgroundColor = "white";

  const image = document.createElement("img");
  image.src = img;
  image.style.width = "100%";

  const likeButton = document.createElement("button");
  likeButton.style.position = "absolute";
  likeButton.style.top = "5px";
  likeButton.style.right = "5px";
  likeButton.style.border = "none";
  likeButton.style.backgroundColor = "white";
  const likee = document.createElement("img");
  likee.src = like;
  likeButton.appendChild(likee);

  s4CardHeader.append(image, likeButton);

  //  card body

  const s4CardBody = document.createElement("div");
  s4CardBody.className = "card-body";
  s4CardBody.style.marginTop = "8px";

  const prices = document.createElement("div");

  const pricee = document.createElement("div");
  const cost1 = document.createElement("h2");
  cost1.textContent = price;
  cost1.style.color = "#414141";
  cost1.style.fontSize = "18px";
  cost1.style.fontWeight = "700px";
  pricee.append(cost1);

  prices.appendChild(pricee);

  const description = document.createElement("p");
  description.textContent = desc;
  description.style.maxWidth = "256px";
  description.style.fontSize = "16px";
  description.style.fontWeight = "400";
  description.style.color = " #414141";
  description.style.padding = "26px 0 8px";

  const card_rating = document.createElement("div");
  card_rating.style.display = "flex";
  card_rating.style.gap = "4px";
  card_rating.style.marginBottom = "8px";
  for (let i = 0; i < fullstar; i++) {
    const star = document.createElement("img");
    star.src = "images/star-full.svg";
    card_rating.append(star);
  }
  for (let i = 0; i < star; i++) {
    const star_full = document.createElement("img");
    star_full.src = "images/star.svg";
    card_rating.append(star_full);
  }

  const vkorzinku = document.createElement("button");
  vkorzinku.textContent = "В корзину";
  vkorzinku.className = "vkorzinku";

  s4CardBody.append(prices, description, card_rating, vkorzinku);

  s4Card.append(s4CardHeader, s4CardBody);

  return s4Card;
};

popular.map((p) => {
  s4.append(getcard3(p));
});

// s5

const s5 = document.querySelector(".s5-row");

const getcard5 = (p) => {
  let { img, name, desc } = p;
  const card5 = document.createElement("div");
  card5.className = "card5";

  const text = document.createElement("div");
  text.className = "text";
  const t1 = document.createElement("h6");
  const t2 = document.createElement("p");
  t1.textContent = name;
  t2.textContent = desc;

  text.append(t1, t2);

  const image = document.createElement("img");
  image.src = img;

  card5.append(text, image);

  return card5;
};

special.map((p) => {
  s5.append(getcard5(p));
});

// s7

const s7 = document.querySelector(".s7-row");

const getcard7 = (p) => {
  let { img, date, name, desc } = p;
  const card7 = document.createElement("div");
  card7.className = "card7";

  const image = document.createElement("img");
  image.src = img;

  const text = document.createElement("div");
  text.className = "text";
  const t1 = document.createElement("span");
  const t2 = document.createElement("h6");
  const t3 = document.createElement("p");
  t1.textContent = date;
  t2.textContent = name;
  t3.textContent = desc;
  const button = document.createElement("button")
  button.textContent = "Подробнее"
  text.append(t1, t2, t3, button);



  card7.append(image, text);

  return card7;
};

statyi.map((p) => {
  s7.append(getcard7(p));
});

// iframe

let active = 0;
const mapRow = document.querySelector(".map-row");
const iframe = document.querySelector(".iframe-map");
function getButtons() {
  mapRow.innerHTML = "";
  maps.map((item, i) => {
    mapRow.innerHTML += `<button class="${
      i == active ? "active" : ""
    }" onClick="getActive(${i})">${item.name}</button>`;
  });
}
getButtons();
function getActive(i) {
  active = i;
  getIframe();
  getButtons();
}
function getIframe() {
  iframe.innerHTML = maps[active].iframe;
}
getIframe();
