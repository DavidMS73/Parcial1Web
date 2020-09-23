const dataDir =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

const cart = [];

function addProductInACategory(productsList, categoryName) {
  categoryName = categoryName.replaceAll(" ", "");
  let idHtml = document.getElementById(categoryName + "Cards");
  productsList.forEach((element, index) => {
    let colSpace = document.createElement("div");
    colSpace.className = "col mb-4";

    let rowData = document.createElement("div");
    rowData.className = "card";

    let img = document.createElement("img");
    img.src = `${element.image}`;
    img.setAttribute("width", "100%");
    img.setAttribute("alt", `${element.name}`);

    let body = document.createElement("div");
    body.className = "card-body";

    let title = document.createElement("h5");
    title.className = "card-title";
    let node = document.createTextNode(`${element.name}`);
    title.appendChild(node);

    let p1 = document.createElement("p");
    p1.className = "card-text";
    let node2 = document.createTextNode(`${element.description}`);
    p1.appendChild(node2);

    let p2 = document.createElement("p");
    p2.className = "card-text negrilla";
    let node3 = document.createTextNode("$" + `${element.price}`);
    p2.appendChild(node3);

    let p3 = document.createElement("a");
    p3.setAttribute("id", `${element.name}`);
    p3.className = "btn btn-dark";
    let node4 = document.createTextNode("Add to car");
    p3.appendChild(node4);

    body.appendChild(title);
    body.appendChild(p1);
    body.appendChild(p2);
    body.appendChild(p3);

    rowData.appendChild(img);
    rowData.appendChild(body);

    colSpace.appendChild(rowData);

    idHtml.appendChild(colSpace);
  });
}

fetch(dataDir)
  .then((data) => {
    return data.json();
  })
  .then((dataList) => {
    dataList.forEach((element) => {
      addProductInACategory(element.products, element.name);
    });
  });

function borrarTodo() {
  let tableOrder = document.getElementById("orderDetailBody");
  while (tableOrder.firstChild) {
    tableOrder.removeChild(tableOrder.firstChild);
  }
  boton.setAttribute("data-dismiss", "modal");
  cart = [];
}

function showBurgers() {
  hideAllSections();
  document.getElementById("burgers").hidden = false;
}

function showTacos() {
  hideAllSections();
  document.getElementById("tacos").hidden = false;
}

function showSalads() {
  hideAllSections();
  document.getElementById("salads").hidden = false;
}

function showDesserts() {
  hideAllSections();
  document.getElementById("desserts").hidden = false;
}

function showDandS() {
  hideAllSections();
  document.getElementById("drinksAndSides").hidden = false;
}

function showOrderDetail() {
  hideAllSections();
  document.getElementById("orderDetail").hidden = false;
}

function hideAllSections() {
  let list = document.getElementsByTagName("section");
  for (let index = 0; index < list.length; index++) {
    list[index].hidden = true;
  }
}

let burguersBtn = document.getElementById("burguersBtn");
burguersBtn.addEventListener("click", showBurgers);

let tacosBtn = document.getElementById("tacosBtn");
tacosBtn.addEventListener("click", showTacos);

let saladsBtn = document.getElementById("saladsBtn");
saladsBtn.addEventListener("click", showSalads);

let dessertsBtn = document.getElementById("dessertsBtn");
dessertsBtn.addEventListener("click", showDesserts);

let DandSBtn = document.getElementById("DandSBtn");
DandSBtn.addEventListener("click", showDandS);

let orderDetailBtn = document.getElementById("orderDetailBtn");
orderDetailBtn.addEventListener("click", showOrderDetail);

let boton = document.getElementById("deleteAll");
boton.addEventListener("click", borrarTodo);
