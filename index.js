const orders = [
  { id: 1, quantity: 40, orderDate: new Date(2018, 1, 1, 1, 1, 1) },
  { id: 2, quantity: 20, orderDate: new Date(2018, 2, 2, 2, 2, 2) },
  { id: 3, quantity: 30, orderDate: new Date(2018, 3, 3, 3, 3, 3) },
  { id: 4, quantity: 10, orderDate: new Date(2018, 4, 4, 4, 4, 4) },
  { id: 5, quantity: 20, orderDate: new Date(2018, 5, 5, 5, 5, 5) }
];

main = () => {
  printHeaderFooter(
    "Map (LINQ 'Select' Equivalent) DEMO - Print Order Quantities",
    () => mapDemo(orders)
  );
  printHeaderFooter(
    "Reduce (LINQ 'Aggregate' Equivalent) DEMO - Sum Quantities",
    () => reduceDemo(orders)
  );
  printHeaderFooter(
    "Filter (LINQ 'Where' Equivalent) DEMO - Order with Quantity over 30",
    () => filterDemo(orders)
  );
  printHeaderFooter(
    "Sort (LINQ 'OrderBy' Equivalent) DEMO1 - Order by Quantities in Ascending Order",
    () => sortByAscendingDemo(orders)
  );
  printHeaderFooter(
    "Sort (LINQ 'OrderByDescending' Equivalent) DEMO2 - Order by Quantities in Descending Order",
    () => sortByDescendingDemo(orders)
  );
};

function sortByDescendingDemo(orders) {
  // Switching o1 & o2 around has the same effect has sorting in descending order
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  var oderedOrders = orders.sort((o1, o2) => o2.quantity - o1.quantity);
  printOrders(oderedOrders);
}

function sortByAscendingDemo(orders) {
  // Sorting works by comparing two values in a callback.
  // When o1.quantity < 0, then o1 comes before o2.
  // When o2.quantity < 0, then o2 comes before o1.
  // When o1.quantity === o2.quantity then no change is needed
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  var oderedOrders = orders.sort((o1, o2) => o1.quantity - o2.quantity);
  printOrders(oderedOrders);
}

function filterDemo(orders) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  const ordersWithQuantityOver30 = orders.filter(order => order.quantity > 30);
  printOrders(ordersWithQuantityOver30);
}

function reduceDemo(orders) {
  const initialQuantity = 0;
  // NOTE: initialQuantity/Value is passed after the callback in Javascript
  // while in LINQ, it's passed as the first argument.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const totalQuantities = orders.reduce(
    (sum, order) => sum + order.quantity,
    initialQuantity
  );
  console.log(`Total Quantities: ${totalQuantities}`);
}

function mapDemo(orders) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  const quantities = orders.map(order => order.quantity);
  quantities.forEach(quantity => console.log(`Quantity: ${quantity}`));
}

function printHeaderFooter(title, callback) {
  const divider = "=".repeat(20);
  console.log(`${divider}  ${title}  ${divider}`);
  callback();
}

function printOrders(orders) {
  orders.forEach(order => {
    const { id, quantity, orderDate } = order;
    console.log(
      `Order ID: ${id}, Quantity: ${quantity}, Order Date: ${orderDate}`
    );
  });
}

main();
