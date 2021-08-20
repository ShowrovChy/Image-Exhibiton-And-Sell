function getImagesAndDescAndPrice(imgPrice, subTotal, grandTotal) {
  document.getElementById("img-price").innerText = imgPrice;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("tax").innerText =
    parseInt(document.getElementById("sub-total").innerText) / 10;
}
// image--1

document.getElementById("first").addEventListener("click", function () {
  document.getElementById("art").src = "images/1.jpg";
  document.getElementById("desc").innerText =
    "First--Lorem ipsum dolor sit amet consectetur -adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!";
  /*   document.getElementById("img-price").innerText = "750";
    document.getElementById("sub-total").innerText = "750";
    document.getElementById("grand-total").innerText = "825";
    document.getElementById("tax").innerText =
      parseInt(document.getElementById("sub-total").innerText) / 10; */
  getImagesAndDescAndPrice(750, 750, 825);
});
// image--2

document.getElementById("second").addEventListener("click", function () {
  document.getElementById("art").src = "images/2.jpg";
  document.getElementById("desc").innerText =
    "Second--Lorem ipsum dolor sit amet consectetur -adipisicing elit Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!";
  /*   document.getElementById("img-price").innerText = "600";
    document.getElementById("sub-total").innerText = "600";
    document.getElementById("grand-total").innerText = "660";
    document.getElementById("tax").innerText =
      parseInt(document.getElementById("sub-total").innerText) / 10; */
  getImagesAndDescAndPrice(600, 600, 660);
});
// image--3

document.getElementById("third").addEventListener("click", function () {
  document.getElementById("art").src = "images/3.jpg";
  document.getElementById("desc").innerText =
    "Third--Lorem ipsum dolor sit amet consectetur -adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!";
  /*   document.getElementById("img-price").innerText = "450";
    document.getElementById("sub-total").innerText = "450";
    document.getElementById("tax").innerText = "45";
    document.getElementById("grand-total").innerText = "495";
    document.getElementById("tax").innerText =
      parseInt(document.getElementById("sub-total").innerText) / 10; */
  getImagesAndDescAndPrice(450, 450, 495);
});

// delivery Cost regular
document.getElementById("regular-btn").addEventListener("click", function () {
  /*   let regular = document.getElementById("regular").innerText;
  let imagePrice = document.getElementById("img-price").innerText;
  document.getElementById("sub-total").innerText =
    parseInt(regular) + parseInt(imagePrice);
  // Tax___________________________>
  document.getElementById("tax").innerText =
    parseInt(document.getElementById("sub-total").innerText) / 10;
  // Total___________________________>
  document.getElementById("grand-total").innerText =
    parseInt(document.getElementById("sub-total").innerText) +
    parseInt(document.getElementById("tax").innerText); */
  getTotalCost("regular");
});
// delivery Cost quick
document.getElementById("quick-btn").addEventListener("click", function () {
  /*   let regular = document.getElementById("quick").innerText;
  let imagePrice = document.getElementById("img-price").innerText;
  document.getElementById("sub-total").innerText =
    parseInt(regular) + parseInt(imagePrice);
  // Tax___________________________>
  document.getElementById("tax").innerText =
    parseInt(document.getElementById("sub-total").innerText) / 10;
  // Total___________________________>
  document.getElementById("grand-total").innerText =
    parseInt(document.getElementById("sub-total").innerText) +
    parseInt(document.getElementById("tax").innerText); */
  getTotalCost("quick");
});

function getTotalCost(delivery) {
  let regular = document.getElementById(delivery).innerText;
  let imagePrice = document.getElementById("img-price").innerText;
  document.getElementById("sub-total").innerText =
    parseInt(regular) + parseInt(imagePrice);
  // Tax___________________________>
  document.getElementById("tax").innerText =
    parseInt(document.getElementById("sub-total").innerText) / 10;
  // Total___________________________>
  document.getElementById("grand-total").innerText =
    parseInt(document.getElementById("sub-total").innerText) +
    parseInt(document.getElementById("tax").innerText);
}
