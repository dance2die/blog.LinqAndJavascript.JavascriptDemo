const WriteLine = console.log;

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

  // Part 2 Demos start here.
  printHeaderFooter(
    "Some (LINQ 'Any' Equivalent) DEMO - Check if there are *any* orders with certain quantities",
    () => someDemo(orders)
  );

  printHeaderFooter(
    "Filter (LINQ 'Distinct' Equivalent) DEMO - Get Distinct Order Quantities",
    () => distinctDemo1(orders)
  );

  printHeaderFooter(
    "Filter (LINQ 'Distinct' Equivalent) DEMO2 - Get Distinct Order Quantities using \"Set\"",
    () => distinctDemo2(orders)
  );

  printHeaderFooter(
    "Concat (LINQ 'Concat' Equivalent) DEMO - Concatenate the first and the last orders",
    () => concatDemo(orders)
  );

  printHeaderFooter(
    "Spread Operator (LINQ 'SelectMany' Equivalent) DEMO - Concatenate the first and the last orders",
    () => spreadDemo(orders)
  );

  // Part 3 Demos start here.
  printHeaderFooter(
    "Reverse (LINQ 'Reverse' Equivalent) DEMO - Reverse current data source elements",
    () => reverseDemo(orders)
  );

  printHeaderFooter(
    "Map (LINQ 'Zip' Equivalent) DEMO - Appending Order Numbers in Text",
    () => zipDemo(orders)
  );

  printHeaderFooter(
    "Math.min/max (LINQ 'Min/Max' Equivalent) DEMO - Appending Order Numbers in Text",
    () => minMaxDemo(orders)
  );
};

function minMaxDemo(orders) {
  const minimumQuantity = Math.min(...orders.map(order => order.quantity));
  const maximumQuantity = Math.max(...orders.map(order => order.quantity));

  /*
  ~ Or ~
  you can declare a global prototypes for "min/max" and use it just like in LINQ.
    Array.prototype.min = function(propertySelector) { return Math.min(...this.map(propertySelector)) };
    Array.prototype.max = function(propertySelector) { return Math.max(...this.map(propertySelector)) };
    const minimumQuantity = orders.min(order => order.quantity);
    const maximumQuantity = orders.max(order => order.quantity);
  */

  WriteLine(`Minimum Quantity: ${minimumQuantity}`);
  WriteLine(`Maximum Quantity: ${maximumQuantity}`);
}

function zipDemo(orders) {
  const orderNumbersInText = ["One", "Two", "Three", "Four", "Five"];
  orders
    .map((order, index) => {
      const text = orderNumbersInText[index];
      return `Quantity of Order ${text}: ${order.quantity}`;
    })
    .forEach(sentence => WriteLine(sentence));
}

function reverseDemo(orders) {
  const mid = orders.length / 2;
  const leftHalf = orders.slice(0, mid);
  const rightHalf = orders.slice(mid);
  const combinedOrders = rightHalf.concat(leftHalf);

  const indentBy = 4;
  printHeaderFooter(
    "Reversing from this list",
    () => printOrders(combinedOrders, indentBy),
    indentBy,
    "*"
  );

  const reversedOrders = combinedOrders.reverse();
  printOrders(reversedOrders);
}

/**
 * Concatenate the first and the last orders to emulate "SelectMany" in LINQ
 * WARNING ⚠️: Super contrived example again...
 */
function spreadDemo(orders) {
  const firstOrder = [orders[0]];
  const lastOrder = [[...orders].pop()];
  // spread operator "..." on each array does the same thing as "SelectMany" in LINQ.
  const firstAndLastOrders = [...firstOrder, ...lastOrder];
  printOrders(firstAndLastOrders);
}

/**
 * Concatenate the first and the last orders
 * WARNING ⚠️: Super contrived example
 */
function concatDemo(orders) {
  const firstOrder = [orders[0]];
  const lastOrder = [[...orders].pop()];
  const firstAndLastOrders = firstOrder.concat(lastOrder);

  printOrders(firstAndLastOrders);
}

/**
 *  An alternate method of implementing Distinct() LINQ method using new "Set" introduced in ES6 and the spread operator
 */
function distinctDemo2(orders) {
  const distinctQuantityOrders = [
    ...new Set(orders.map(order => order.quantity))
  ];
  distinctQuantityOrders.forEach(quantity =>
    WriteLine(`Distinct Quantity: ${quantity}`)
  );
}

function distinctDemo1(orders) {
  const distinctQuantityOrders = orders
    .map(order => order.quantity)
    // Refer to StackOverflow answer on https://stackoverflow.com/a/14438954/4035
    .filter((quantity, index, self) => self.indexOf(quantity) === index);

  distinctQuantityOrders.forEach(quantity =>
    WriteLine(`Distinct Quantity: ${quantity}`)
  );
}

function someDemo(orders) {
  const ordersMoreThanEqualToQuantity30Exists = orders.some(
    order => order.quantity >= 30
  );
  WriteLine(
    `Are there orders with quantity great than and equal to 30? ${ordersMoreThanEqualToQuantity30Exists}`
  );

  const ordersBeforeYear2018 = orders.some(
    order => order.orderDate.getFullYear() < 2018
  );
  WriteLine(`Are there orders ordered before 2018? ${ordersBeforeYear2018}`);

  const ordersWithIDGreaterThan100 = orders.some(order => order.id > 100);
  WriteLine(`Do we have more than 100 Orders? ${ordersWithIDGreaterThan100}`);
}

function sortByDescendingDemo(orders) {
  // Switching o1 & o2 around has the same effect has sorting in descending order
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  var oderedOrders = orders.slice().sort((o1, o2) => o2.quantity - o1.quantity);
  printOrders(oderedOrders);
}

function sortByAscendingDemo(orders) {
  // Sorting works by comparing two values in a callback.
  // When o1.quantity < 0, then o1 comes before o2.
  // When o2.quantity < 0, then o2 comes before o1.
  // When o1.quantity === o2.quantity then no change is needed
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  var oderedOrders = orders.slice().sort((o1, o2) => o1.quantity - o2.quantity);
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
  quantities.forEach(quantity => WriteLine(`Quantity: ${quantity}`));
}

function printHeaderFooter(
  title,
  callback,
  indentBy = 0,
  dividerCharacter = "="
) {
  const divider = "=".repeat(20);
  const indentation = " ".repeat(indentBy);
  WriteLine(`${indentation}${divider}  ${title}  ${divider}`);
  callback();
}

function printOrders(orders, indentBy = 0) {
  orders.forEach(order => {
    const { id, quantity, orderDate } = order;
    const indentation = " ".repeat(indentBy);
    WriteLine(
      `${indentation}Order ID: ${id}, Quantity: ${quantity}, Order Date: ${orderDate}`
    );
  });
}

main();
