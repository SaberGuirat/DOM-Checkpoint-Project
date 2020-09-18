// declarin some functions before starting modifying DOM
let prod = (a, b) => {
  let c;
  if (b <= 2) {
    c = 1;
  } else {
    c = b - 1;
  }
  return (a * b) / c;
};
let prodSub = (a, b) => {
  let c = a / b;
  if (a - c > 0) {
    return a - c;
  } else return a;
};
let totalSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};
// hide price if quantity equal 0
let hideDisplay = (a, b) => {
  if (a.innerHTML == 0) {
    b.style.display = "none";
  } else {
    b.style.display = "block";
  }
};
//DOM Selection
let heartIcon = Array.from(document.getElementsByClassName("fa-heart"));
let addItem = Array.from(document.getElementsByClassName("add-btn"));
let quantity = Array.from(document.getElementsByClassName("quantity"));
let subItem = Array.from(document.getElementsByClassName("sub-btn"));
let price = Array.from(document.getElementsByClassName("price"));
let item = Array.from(document.getElementsByClassName("item"));
let rmvButton = Array.from(document.getElementsByClassName("fa-times"));
let total = document.getElementById("total");
// Total first value
total.innerHTML = 0;
// empty array for storing prices data later
let count = [];
//change heart color
for (let i in heartIcon) {
  heartIcon[i].addEventListener("click", (event) => {
    if (heartIcon[i].style.color != "red") {
      heartIcon[i].style.color = "red";
    } else {
      heartIcon[i].style.color = "black";
    }
  });
}
// add item
for (let y in addItem) {
  addItem[y].addEventListener("click", (event) => {
    addItem[y].nextElementSibling.innerHTML++;
    price[y].innerHTML = prod(
      price[y].innerHTML,
      addItem[y].nextElementSibling.innerHTML
    );
    // store prices in array and calculate Total
    count[y] = Number(price[y].innerHTML);
    total.innerHTML = totalSum(count) + "$";
    hideDisplay(quantity[y], price[y]);
  });
}
//sub item
for (let x in subItem) {
  subItem[x].addEventListener("click", (event) => {
    if (subItem[x].previousElementSibling.innerHTML > 0) {
      price[x].innerHTML = prodSub(
        price[x].innerHTML,
        subItem[x].previousElementSibling.innerHTML
      );
      subItem[x].previousElementSibling.innerHTML--;
      count[x] = Number(price[x].innerHTML);
      total.innerHTML = totalSum(count) + "$";
      hideDisplay(quantity[x], price[x]);
    }
  });
}
// remove parent node(with item class)
for (let x in rmvButton) {
  rmvButton[x].addEventListener("click", (event) => {
    item[x].remove();
  });
}
