function getImagesAndDescAndPrice(imgPrice, subTotal, grandTotal) {
  document.getElementById("img-price").innerText = imgPrice;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("tax").innerText =
    parseInt(document.getElementById("sub-total").innerText) / 10;
}
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
// image--1

document.getElementById("first").addEventListener("click", function () {
  document.getElementById("art").src = "images/1.jpg";
  document.getElementById("desc").innerText =
    "First--Lorem ipsum dolor sit amet consectetur -adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!";

  getImagesAndDescAndPrice(750, 750, 825);
});
// image--2

document.getElementById("second").addEventListener("click", function () {
  document.getElementById("art").src = "images/2.jpg";
  document.getElementById("desc").innerText =
    "Second--Lorem ipsum dolor sit amet consectetur -adipisicing elit Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!";

  getImagesAndDescAndPrice(600, 600, 660);
});
// image--3

document.getElementById("third").addEventListener("click", function () {
  document.getElementById("art").src = "images/3.jpg";
  document.getElementById("desc").innerText =
    "Third--Lorem ipsum dolor sit amet consectetur -adipisicing elit.Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!";

  getImagesAndDescAndPrice(450, 450, 495);
});

// delivery Cost regular
document.getElementById("regular-btn").addEventListener("click", function () {
  getTotalCost("regular");
});
// delivery Cost quick
document.getElementById("quick-btn").addEventListener("click", function () {
  getTotalCost("quick");
});
