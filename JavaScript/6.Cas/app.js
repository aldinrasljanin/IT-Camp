// 1. Dopuniti recenicu da pise Learning to code is fun koristeci spread operator.
function spreadOut() {
  let fregment = ["to", "code"];
  let sentence = ["Learning", ...fregment, "is fun"];
  return sentence;
}
console.log(spreadOut());

// 2.Pristupiti online useru i promeniti njegovu vrednost.
let userActivity = {
  id: 23894201352,
  date: {
    totalUsers: 51,
    online: 42,
  },
};
userActivity.date.online = 50;

console.log(userActivity.date.online);

// 3. Modifikuj funkciju tako da niz ispisuje samo warm and sunny.
function forecast(arr) {
  return arr.slice(2, 4);
}
console.log(
  forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorm"])
);
