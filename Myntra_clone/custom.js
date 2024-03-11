let card1 = {
  cardtitle: "max",
  cardsubtitle: "rounded striptedd",
  cardprice: "128 ",
  cardImg: "card-img-1",
  cardSize: "size S",
};
let card2 = {
  cardtitle: "Us.polo",
  cardsubtitle: "men striptedd",
  cardprice: "949 ",
  cardImg: "card-img-2",
};

let card3 = {
  cardtitle: "Van Huesen",
  cardsubtitle: "men short sleve polo tsirt",
  cardprice: "1130 ",
  cardImg: "card-img-3.webp",
};
let card4 = {
  cardtitle: "max",
  cardsubtitle: "rounded neck lounge Tshirt",
  cardprice: "198 ",
  cardImg: "card-img-4.webp",
};
let card5 = {
  cardtitle: "us.polo",
  cardsubtitle: "pure Cotton LoungE Tshirt",
  cardprice: "854 ",
  cardImg: "card-img-2",
};
let card6 = {
  cardtitle: "XYXX",
  cardsubtitle: "Men Solid LoungE Tshirt",
  cardprice: "395 ",
  cardImg: "card-img-6.webp",
};
let card7 = {
  cardtitle: "max",
  cardsubtitle: "rounded neck lounge Tshirt",
  cardprice: "198 ",
  cardImg: "card-img-7.webp",
};
let card8 = {
  cardtitle: "H&M",
  cardsubtitle: "White solid sustainable Tshirt",
  cardprice: "799 ",
  cardImg: "card-img-8.webp",
};

let card9 = {
  cardtitle: "max",
  cardsubtitle: "rounded neck lounge Tshirt",
  cardprice: "198 ",
  cardImg: "card-img-9.webp",
};
let card10 = {
  cardtitle: "DAMENSCH",
  cardsubtitle: "Cotton Tank lounge Tshirt",
  cardprice: "531 ",
  cardImg: "card-img-10.webp",
};

// Array to store all the cards data
let maincard = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10];

// loop
function showpagw1() {
  maincard.forEach((element) => {
    // row html class
    let row = document.getElementById("row");
    //  create div
    let div = document.createElement("div");
    // innerhtml of div
    div.innerHTML = `
  <div class="card">
  <div class="card-img"><img src="${maincard[i].cardImg}" alt="" /></div>
  <div class="card-body">
  <h3 class="title">${maincard[i].cardtitle}</h3>
                    <p class="sub-title">${maincard[i].cardsubtitle}</p>
                    <span class="pricing">Rs.${maincard[i].cardprice}</span>
                    </div>
                    </div>`;
    // set div class to col-25
    div.setAttribute("class", "col-25");
    //  append div to row
    row.appendChild(div);
  });
}
showpagw1();
// for page 2
