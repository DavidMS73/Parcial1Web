const dataDir =
  "https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json";

function addProductInACategory(productsList, category) {
  productsList.forEach((element, index) => {
    let table1 = document.getElementById(`${category}`);
    let row = document.createElement("div");
    row.className = "card";

    let img = document.createElement("img");
    img.src = `${element.image}`;
    //row.setAttribute("id", `${index}`);

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
    p2.className = "card-text";
    let node3 = document.createTextNode(`${element.price}`);
    p2.appendChild(node3);

    body.appendChild(title);
    body.appendChild(p1);

    row.appendChild(img);
    row.appendChild(body);

    table1.appendChild(row);
  });
}

fetch(dataDir)
  .then((data) => {
    return data.json();
  })
  .then((dataList) => {
    dataList.forEach((element, index) => {
      let htmlDeck = document.getElementById(element.name + "Cards");
      addProductInACategory(element.products, htmlDeck);
    });
  });
