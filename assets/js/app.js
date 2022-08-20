// List of shoe-data as objects
const data = [
  {
    img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Air",
    brand: "Nike",
    price: "120.00 $",
    sizes: ["37", "38", "39"],
  },
  {
    img: "https://images.unsplash.com/photo-1584735174965-48c48d7edfde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
    name: "Dunk High Pro",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["37", "38", "39", "40", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80",
    name: "Old Skool",
    brand: "Vans",
    price: "50.00 $",
    sizes: ["37"],
  },
  {
    img: "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1664&q=80",
    name: "Summer Party",
    brand: "Nike",
    price: "100.00 $",
    sizes: ["42", "43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Retro",
    brand: "Adidas",
    price: "149.00 $",
    sizes: ["39", "40"],
  },
  {
    img: "https://images.unsplash.com/photo-1528701800487-ba01fea498c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Fancy Doc",
    brand: "Crocs",
    price: "79.00 $",
    sizes: ["37", "38", "39", "40", "41", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1541597455068-49e3562bdfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Classic",
    brand: "Reebok",
    price: "99.00 $",
    sizes: ["43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1628429437853-40ec8ebe3386?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    name: "Jungle",
    brand: "New Balance",
    price: "110.00 $",
    sizes: ["39", "40", "41", "42"],
  },
  {
    img: "https://images.unsplash.com/photo-1604163546180-039a1781c0d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    name: "Essentials",
    brand: "Errant",
    price: "120.00 $",
    sizes: ["41", "42", "43", "44", "45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1571216332002-282dce467b32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Très chic",
    brand: "Nike",
    price: "150.00 $",
    sizes: ["45", "46"],
  },
  {
    img: "https://images.unsplash.com/photo-1542601600647-3a722a90a76b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=706&q=80",
    name: "Plastic Revolution",
    brand: "Adidas",
    price: "180.00 $",
    sizes: ["37", "38", "39", "40"],
  },
  {
    img: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Sporty",
    brand: "Asics",
    price: "90.00 $",
    sizes: ["41", "42", "43", "44"],
  },
];

// Global variables
const content = document.querySelector("#content");
const newsletterForm = document.querySelector(".newsletter-input");
let detailOpen = false;
let shoppingBackCounter = 0;

// Function to create a shoe div
const createData = (obj, index) => {
  // Create Elements
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("article");
  const detailContainer = document.createElement("div");
  detailContainer.classList.add("article-details");
  const dropDownContainer = document.createElement("div");
  dropDownContainer.classList.add("dropDownContainer");

  const priceContainer = document.createElement("div");
  priceContainer.classList.add("priceContainer", `container${index}`, "closed");

  const headlineContainer = document.createElement("div");
  headlineContainer.classList.add("headlineContainer");

  const img = document.createElement("img");
  const title = document.createElement("h2");

  const addBtn = document.createElement("button");
  addBtn.classList.add("addButton");

  const openDetailBtn = document.createElement("button");
  openDetailBtn.classList.add("openDetailBtn", `btn${index}`);
  openDetailBtn.addEventListener("click", () => {
    openArticleDetail(index);
  });

  const price = document.createElement("p");
  const brand = document.createElement("p");

  const sizeList = document.createElement("ul");
  sizeList.classList.add("sizeList");

  // Append Element
  headlineContainer.append(title, addBtn);
  dropDownContainer.append(price, openDetailBtn);
  priceContainer.append(brand, sizeList);
  detailContainer.append(headlineContainer, dropDownContainer, priceContainer);
  mainContainer.append(img, detailContainer);
  content.append(mainContainer);

  // Set Attributes
  img.src = obj.img;
  img.classList.add("article-image");
  addBtn.innerText = "+";
  title.innerText = obj.name;
  price.innerText = obj.price;
  brand.innerText = obj.brand;

  // Map over Size-Array and create list of sizes
  obj.sizes.map((size) => {
    const sizeItem = document.createElement("li");
    const sizeButton = document.createElement("button");
    sizeButton.addEventListener("click", addToShoppingBag);
    sizeButton.classList.add("sizeButton");
    sizeButton.innerText = size;
    sizeItem.append(sizeButton);
    sizeList.append(sizeItem);
  });

  // Give classnames for grid-template-ares:
  // 0-2 = A, 3-5 = B, 6-8 = C, 9-11 = D
  if (index <= 2) mainContainer.classList.add(`grid_a${index}`);
  else if (index <= 5) mainContainer.classList.add(`grid_b${index}`);
  else if (index <= 8) mainContainer.classList.add(`grid_c${index}`);
  else if (index <= 11) mainContainer.classList.add(`grid_d${index}`);
};

// Add Size to shoppingbag
const addToShoppingBag = () => {
  let number = document.querySelector(".shoppingBagNumber");
  shoppingBackCounter++;
  number.innerText = shoppingBackCounter;
};

// Newsletter
newsletterForm.addEventListener("submit", (e) => {
  let mailInput = document.querySelector(".newsletter-textInput");
  if (mailInput.length > 0) {
    newsletterForm.setAttribute("id", "hidden");
    let headlineElem = document.querySelector(".newsletter-headline");
    let pElem = document.querySelector(".newsletter-p");
    headlineElem.innerText = "THANK YOU!";
    pElem.innerText = "You will get our response shortly!";
  } else {
    newsletterForm.classList.add("invalid");
    mailInput.setAttribute("placeholder", "Enter valid email!");
  }

  e.preventDefault();
});

// Open Article Detail Button
const openArticleDetail = (index) => {
  const priceContainer = document.querySelector(`.container${index}`);
  const openDetailBtn = document.querySelector(`.openDetailBtn.btn${index}`);

  if (!detailOpen) {
    priceContainer.classList.remove("closed");
    priceContainer.classList.add("open");
    openDetailBtn.classList.add("active");
    openDetailBtn.classList.remove("inactive");
  } else {
    priceContainer.classList.remove("open");
    priceContainer.classList.add("closed");
    openDetailBtn.classList.remove("active");
    openDetailBtn.classList.add("inactive");
  }
  detailOpen = !detailOpen;
};

// Cookies
const cookieContainer = document.querySelector(".cookiesStatus");
const cookieAcceptBtn = document.querySelector(".accept");
const cookieRejectBtn = document.querySelector(".reject");
let userCookies = document.cookie;

// Check if username of cookies is in userlist
const handleCookieCheck = (cookie) => {
  if (cookie.length > 0) {
    cookieContainer.classList.add("validCookies");
  }
};

cookieAcceptBtn.addEventListener("click", () => {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + 5);
  document.cookie = `username=${"acceptedUser"}; expires=${date}; path=/`;
  cookieContainer.classList.add("validCookies");
});
cookieRejectBtn.addEventListener("click", () => {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + 5);
  document.cookie = `username=${"sessionUser"};`;
  cookieContainer.classList.add("validCookies");
});

// Check cookies of user and unlock modal
handleCookieCheck(userCookies);

data.map((article, index) => {
  createData(article, index);
});

//* Filter functionality
/*
data.filter(filter => !filter.[filterdata]).map((article) => {
  createData(article);
});
*/
