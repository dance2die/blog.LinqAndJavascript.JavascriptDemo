const WriteLine = console.log;

const indentBy = 4;
const march = new Date(2018, 3, 1);
const september = new Date(2018, 9, 1);

const nullOrder = {
  id: -1,
  quantity: 0,
  orderDate: new Date(-8640000000000000)
};

const orders = [
  { id: 1, quantity: 40, orderDate: new Date(2018, 1, 1, 1, 1, 1) },
  { id: 2, quantity: 20, orderDate: new Date(2018, 2, 2, 2, 2, 2) },
  { id: 3, quantity: 30, orderDate: new Date(2018, 3, 3, 3, 3, 3) },
  { id: 4, quantity: 10, orderDate: new Date(2018, 4, 4, 4, 4, 4) },
  { id: 5, quantity: 20, orderDate: new Date(2018, 5, 5, 5, 5, 5) }
];

const domesticOrders = [
  { id: 1, quantity: 40, orderDate: new Date(2018, 1, 1, 1, 1, 1) },
  { id: 11, quantity: 20, orderDate: new Date(2018, 11, 2, 2, 2, 2) },
  { id: 111, quantity: 450, orderDate: new Date(2018, 11, 1, 2, 2, 2) },
  { id: 1111, quantity: 230, orderDate: new Date(2018, 11, 11, 2, 2, 2) }
];

const internationalOrders = [
  { id: 3, quantity: 30, orderDate: new Date(2018, 3, 3, 3, 3, 3) },
  { id: 33, quantity: 300, orderDate: new Date(2018, 3, 3, 3, 3, 3) },
  { id: 4, quantity: 10, orderDate: new Date(2018, 4, 4, 4, 4, 4) },
  { id: 44, quantity: 100, orderDate: new Date(2018, 4, 4, 4, 4, 4) },
  { id: 5, quantity: 20, orderDate: new Date(2018, 5, 5, 5, 5, 5) },
  { id: 55, quantity: 200, orderDate: new Date(2018, 5, 5, 5, 5, 5) }
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

  // Part 4 Demos start here.
  printHeaderFooter(
    "Array.prototype.union (LINQ 'Union' Equivalent) DEMO - Display Domestic & International Orders",
    () => unionDemo(domesticOrders, internationalOrders)
  );

  const ordersOnHold = orders;
  printHeaderFooter(
    "Array.prototype.intersect (LINQ 'Intersect' Equivalent) DEMO - Find All Orders on Hold",
    () => intersectDemo(ordersOnHold, domesticOrders, internationalOrders)
  );

  printHeaderFooter(
    "Array.prototype.except (LINQ 'Except' Equivalent) DEMO - Get all orders NOT on hold",
    () => exceptDemo(ordersOnHold, domesticOrders, internationalOrders)
  );

  // Part 5 Demos start here.
  printHeaderFooter(
    "Reduce (LINQ 'Sum' Equivalent) DEMO - Sum All Quantities",
    () => sumDemo(orders)
  );
  printHeaderFooter(
    "Reduce (LINQ 'Average' Equivalent) DEMO - Average Quantity",
    () => averageDemo(orders)
  );
  printHeaderFooter(
    "Filter (LINQ 'Count' Equivalent) DEMO - Count Orders Placed On and After March",
    () => countDemo(orders)
  );

  // Part 6 Demos start here.
  printHeaderFooter(
    "Filter (LINQ 'First/FirstOrDefault' Equivalent) DEMO - Get First Order",
    () => firstDemo(orders)
  );
  printHeaderFooter(
    "Filter (LINQ 'Last/LastOrDefault' Equivalent) DEMO - Get Last Order",
    () => lastDemo(orders)
  );
  printHeaderFooter("DefaultIfEmpty DEMO - Get Order or Default if Empty", () =>
    defaultIfEmptyDemo(orders)
  );
  printHeaderFooter("Skip/SkipWhile DEMO - Skip Orders", () =>
    skipDemo(orders)
  );
  printHeaderFooter("Take/TakeWhile DEMO - Take Orders", () =>
    takeDemo(orders)
  );

  // Part 7 Demos start here.
  printHeaderFooter("Empty DEMO - Get an Empty Order Sequence", () =>
    emptyDemo()
  );
  printHeaderFooter("Repeat DEMO - Repeat Texts", () => repeatDemo());
  printHeaderFooter("Range DEMO - Some Generic Examples", () => rangeDemo());

  // Part 8 Demos start here.
  printHeaderFooter("All DEMO - Check If All Orders Match a Condition", () =>
    allDemo(orders)
  );
  printHeaderFooter(
    "Contains DEMO - Do Shipped Orders Contain a Domestic Order?",
    () => containsDemo(orders, domesticOrders)
  );
  printHeaderFooter(
    "SequenceEqual DEMO - Check If Two Sequences Are The Same",
    () => sequenceEqualDemo(orders, domesticOrders)
  );
};

function sequenceEqualDemo(shippedOrders, domesticOrders) {
  const sameOrderAreSame = shippedOrders.every(
    (order, i) => order.id === shippedOrders[i].id
  );
  WriteLine(`Same Orders share the same sequence ${sameOrderAreSame}`);

  const areAllDomesticOrdersShipped = shippedOrders.every(
    (order, i) => order.id === domesticOrders[i].id
  );
  WriteLine(`Are All Domestic Order Shipped? ${areAllDomesticOrdersShipped}`);
}

function containsDemo(shippedOrders, domesticOrders) {
  const firstDomesticOrder = domesticOrders[0];
  const equalityComparer = order => order.id === firstDomesticOrder.id;
  const containsDomesticOrder = shippedOrders.some(equalityComparer);

  WriteLine(`Is the first domestic order shipped? ${containsDomesticOrder}`);
}

function allDemo(orders) {
  const areAllOrdersPlacedOn2018 = orders.every(
    order => order.orderDate.getFullYear() === 2018
  );
  WriteLine(`Are All Orders Placed On 2018?: ${areAllOrdersPlacedOn2018}`);
}

function rangeDemo() {
  const oneToTen = Array(10)
    .fill()
    .map((_, i) => i + 1);
  WriteLine(`One to Ten => ${oneToTen.join(",")}`);
  const randomRange = Array(3)
    .fill()
    .map((_, i) => i + 999);
  WriteLine(`Three numbers from 999 => ${randomRange.join(",")}`);
}

function repeatDemo() {
  const texts = Array(5)
    .fill()
    .map(_ => "I love your smile");
  texts.map(text => WriteLine(text));
}

function emptyDemo() {
  const emptyOrders = [];
  printHeaderFooter(
    "This prints no order since the sequence is empty",
    () => printOrders(emptyOrders),
    indentBy
  );
}

Array.prototype.take = function(count) {
  return this.filter((_, i) => i < count);
};
Array.prototype.takeWhile = function(predicate) {
  return this.filter((_, i) => predicate(_, i));
};

function takeDemo(orders) {
  const firstTwoOrders1 = orders.take(2);
  printHeaderFooter(
    "First Two Orders - Take",
    () => printOrders(firstTwoOrders1, indentBy),
    indentBy
  );

  const firstTwoOrders2 = orders.takeWhile((order, index) => index <= 1);
  printHeaderFooter(
    "First Two Orders - TakeWhile",
    () => printOrders(firstTwoOrders2, indentBy),
    indentBy
  );
}

Array.prototype.skip = function(count) {
  return this.filter((_, i) => i >= count);
};
Array.prototype.skipWhile = function(predicate) {
  return this.filter((_, i) => !predicate(_, i));
};

function skipDemo(orders) {
  const lastTwoOrders1 = orders.skip(orders.length - 2);
  printHeaderFooter(
    "Last Two Orders - Skip",
    () => printOrders(lastTwoOrders1, indentBy),
    indentBy
  );

  const lastTwoOrders2 = orders.skipWhile(
    (order, index) => index < orders.length - 2
  );
  printHeaderFooter(
    "Last Two Orders - SkipWhile",
    () => printOrders(lastTwoOrders2, indentBy),
    indentBy
  );
}

function defaultIfEmptyDemo(orders) {
  const filteredOrders = orders.filter(order => order.OrderDate >= september);
  const ordersAfterSeptember =
    filteredOrders.length === 0 ? [nullOrder] : filteredOrders;
  printOrders(ordersAfterSeptember);
}

Array.prototype.last = function(propertySelector = obj => obj) {
  const filtered = this.filter(propertySelector);
  return filtered[filtered.length - 1];
};

function lastDemo(orders) {
  const lastOrderAfterMarch = orders.last(order => order.orderDate >= march);
  printHeaderFooter(
    "Last order after March",
    () => printOrder(lastOrderAfterMarch, indentBy),
    indentBy
  );

  const lastOrderAfterSeptember = orders.last(
    order => order.orderDate >= september
  );
  printHeaderFooter(
    "Last or Default order after September",
    () => printOrder(lastOrderAfterSeptember, indentBy),
    indentBy
  );
}

Array.prototype.first = function(propertySelector = obj => obj) {
  return this.filter(propertySelector)[0];
};

function firstDemo(orders) {
  const firstOrderAfterMarch = orders.first(order => order.orderDate >= march);
  printHeaderFooter(
    "First order after March",
    () => printOrder(firstOrderAfterMarch, indentBy),
    indentBy
  );

  const firstOrderAfterSeptember = orders.first(
    order => order.OrderDate >= september
  );
  printHeaderFooter(
    "First or Default order after September",
    () => printOrder(firstOrderAfterSeptember, indentBy),
    indentBy
  );
}

Array.prototype.sum = function(propertySelector = obj => obj) {
  // This is same code in "reduceDemo"
  const intialValue = 0;
  return this.reduce((sum, obj) => sum + propertySelector(obj), intialValue);
};

Array.prototype.average = function(propertySelector = obj => obj) {
  const intialValue = 0;
  return (
    this.reduce((sum, obj) => sum + propertySelector(obj), intialValue) /
    this.length
  );
};

Array.prototype.count = function(predicate = obj => true) {
  return this.filter(predicate).length;
};

function countDemo(orders) {
  const ordersOnAndAfterMarch = orders.filter(
    order => order.orderDate >= march
  );
  printOrders(ordersOnAndAfterMarch, indentBy);
  const orderCountPlacedOnAndAfterMarch = orders.count(
    order => order.orderDate >= march
  );
  WriteLine(
    `Total Orders Placed On and After March: ${orderCountPlacedOnAndAfterMarch}`
  );
}

function averageDemo(orders) {
  var averageQuantity = orders.average(order => order.quantity);
  var totalQuantities = orders.sum(order => order.quantity);
  var count = orders.length;
  WriteLine(
    `Average Quantity: ${totalQuantities} / ${count} = ${averageQuantity}`
  );
}

function sumDemo(orders) {
  const totalQuantities = orders.sum(order => order.quantity);
  console.log(`sumDemo - Total Quantities: ${totalQuantities}`);
}

Array.prototype.union = function(other) {
  return [...new Set([...this, ...other])];
};
// SQL has "UNION ALL" that combines two sets without dropping duplicates.
// Array.prototype.unionAll = function(other) {
//   return [...this, ...other];
// };
Array.prototype.intersect = function(other, idSelector = obj => obj) {
  const otherSet = new Set([...other.map(idSelector)]);
  // Reference: http://2ality.com/2015/01/es6-set-operations.html
  const intersection = new Set(
    this.filter(object => otherSet.has(idSelector(object)))
  );
  return [...intersection];
};
Array.prototype.except = function(other, idSelector = obj => obj) {
  const otherSet = new Set([...other.map(idSelector)]);
  // Reference: http://2ality.com/2015/01/es6-set-operations.html
  const difference = new Set(
    this.filter(object => !otherSet.has(idSelector(object)))
  );
  return [...difference];
};

function exceptDemo(ordersOnHold, domesticOrders, internationalOrders) {
  const orderIdSelector = order => order.id;
  const allOrders = domesticOrders.union(internationalOrders);
  const allOrdersNotOnHold = allOrders.except(ordersOnHold, orderIdSelector);

  printOrders(allOrdersNotOnHold);
}

function intersectDemo(ordersOnHold, domesticOrders, internationalOrders) {
  const orderIdSelector = order => order.id;
  const usOrdersOnHold = ordersOnHold.intersect(
    domesticOrders,
    orderIdSelector
  );
  const internationalOrdersOnHold = ordersOnHold.intersect(
    internationalOrders,
    orderIdSelector
  );

  const indentBy = 4;
  const dividerCharacter = "*";
  printHeaderFooter(
    "US Orders on hold",
    () => printOrders(usOrdersOnHold, indentBy),
    indentBy,
    dividerCharacter
  );
  printHeaderFooter(
    "International Orders on hold",
    () => printOrders(internationalOrdersOnHold, indentBy),
    indentBy,
    dividerCharacter
  );
}

function unionDemo(domesticOrders, internationalOrders) {
  const allOrders = domesticOrders.union(internationalOrders);

  printOrders(allOrders);
}

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
  const divider = dividerCharacter.repeat(20);
  const indentation = " ".repeat(indentBy);
  WriteLine(`${indentation}${divider}  ${title}  ${divider}`);
  callback();
}

function printOrders(orders, indentBy = 0) {
  orders.forEach(order => printOrder(order, indentBy));
}

function printOrder(order, indentBy = 0) {
  const indentation = " ".repeat(indentBy);

  if (order) {
    const { id, quantity, orderDate } = order;
    WriteLine(
      `${indentation}Order ID: ${id}, Quantity: ${quantity}, Order Date: ${orderDate}`
    );
  } else {
    WriteLine(`${indentation}<NULL>`);
  }
}

main();
