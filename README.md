# JavaScript source code for 
[the blog entry](https://www.slightedgecoder.com/2018/02/24/approximate-equivalent-linq-methods-javascript/)

## How to run the source code
### NOTE: Requires [NodeJS](https://nodejs.org/en/).
Clone the source code

```bash
git clone https://github.com/dance2die/blog.LinqAndJavascript.JavascriptDemo.git
```

Go to the cloned directory
```bash
cd blog.LinqAndJavascript.JavascriptDemo
```

Run the source code
```bash
node index.js
```

Result would look like the following
```bash
====================  Map (LINQ 'Select' Equivalent) DEMO - Print Order Quantities  ====================
Quantity: 40
Quantity: 20
Quantity: 30
Quantity: 10
Quantity: 20
====================  Reduce (LINQ 'Aggregate' Equivalent) DEMO - Sum Quantities  ====================
Total Quantities: 120
====================  Filter (LINQ 'Where' Equivalent) DEMO - Order with Quantity over 30  ====================
Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
====================  Sort (LINQ 'OrderBy' Equivalent) DEMO1 - Order by Quantities in Ascending Order  ====================
Order ID: 4, Quantity: 10, Order Date: Fri May 04 2018 04:04:04 GMT-0400 (Eastern Daylight Time)
Order ID: 2, Quantity: 20, Order Date: Fri Mar 02 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 5, Quantity: 20, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
Order ID: 3, Quantity: 30, Order Date: Tue Apr 03 2018 03:03:03 GMT-0400 (Eastern Daylight Time)
Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
====================  Sort (LINQ 'OrderByDescending' Equivalent) DEMO2 - Order by Quantities in Descending Order  ====================
Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
Order ID: 3, Quantity: 30, Order Date: Tue Apr 03 2018 03:03:03 GMT-0400 (Eastern Daylight Time)
Order ID: 2, Quantity: 20, Order Date: Fri Mar 02 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 5, Quantity: 20, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
Order ID: 4, Quantity: 10, Order Date: Fri May 04 2018 04:04:04 GMT-0400 (Eastern Daylight Time)
```
