const orders = [
  { id: 1, quantity: 40, orderDate: new Date(2018, 1, 1, 1, 1, 1) },
  { id: 2, quantity: 20, orderDate: new Date(2018, 2, 2, 2, 2, 2) },
  { id: 3, quantity: 30, orderDate: new Date(2018, 3, 3, 3, 3, 3) },
  { id: 4, quantity: 10, orderDate: new Date(2018, 4, 4, 4, 4, 4) },
  { id: 5, quantity: 20, orderDate: new Date(2018, 5, 5, 5, 5, 5) }
];

main = () => {
  printHeaderFooter("Map (LINQ Select Equivalent) DEMO - Print Order Quantities", () => mapDemo(orders));
//   printHeaderFooter("Reduce DEMO - Sum Quantities", () => reduceDemo(orders));
//   printHeaderFooter("Filter DEMO - Order with Quantity over 30", () =>
//     filterDemo(orders)
//   );
//   printHeaderFooter("Sort DEMO1 - Order by Quantities in Ascending Order", () =>
//     sortByAscendingDemo(orders)
//   );
//   printHeaderFooter(
//     "Sort DEMO2 - Order by Quantities in Descending Order",
//     () => sortByDescendingDemo(orders)
//   );
};

function mapDemo(orders) {
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





