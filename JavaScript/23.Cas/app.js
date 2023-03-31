const getData = () => {
  fetch("https://dummyjson.com/carts/1")
    .then((res) => res.json())
    .then(console.log);
};
getData();

async function getAveragePrice() {
  const response = await fetch("https://dummyjson.com/carts/1");
  const data = await response.json();
  const prices = data.products.map((obj) => obj.price);
  const sum = prices.reduce((prev, curr) => prev + curr);
  const total = sum / prices.length;
  console.log(total);
}
getAveragePrice();

async function getDiscount() {
  const response = await fetch("https://dummyjson.com/carts/1");
  const data = await response.json();
  const discounts = data.products.filter(
    (obj) => obj.discountPercentage > 11.3
  );
  console.log(discounts);
}
getDiscount();
