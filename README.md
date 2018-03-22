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
dance2die@LELOUCH c:\misc\sources\blog\blog.LinqAndJavascript.JavascriptDemo
> node index.js
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
====================  Some (LINQ 'Any' Equivalent) DEMO - Check if there are *any* orders with certain quantities  ====================
Are there orders with quantity great than and equal to 30? true
Are there orders ordered before 2018? false
Do we have more than 100 Orders? false
====================  Filter (LINQ 'Distinct' Equivalent) DEMO - Get Distinct Order Quantities  ====================
Distinct Quantity: 40
Distinct Quantity: 20
Distinct Quantity: 30
Distinct Quantity: 10
====================  Filter (LINQ 'Distinct' Equivalent) DEMO2 - Get Distinct Order Quantities using "Set"  ====================
Distinct Quantity: 40
Distinct Quantity: 20
Distinct Quantity: 30
Distinct Quantity: 10
====================  Concat (LINQ 'Concat' Equivalent) DEMO - Concatenate the first and the last orders  ====================
Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
Order ID: 5, Quantity: 20, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
====================  Spread Operator (LINQ 'SelectMany' Equivalent) DEMO - Concatenate the first and the last orders  ====================
Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
Order ID: 5, Quantity: 20, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
====================  Reverse (LINQ 'Reverse' Equivalent) DEMO - Reverse current data source elements  ====================
    ********************  Reversing from this list  ********************
    Order ID: 3, Quantity: 30, Order Date: Tue Apr 03 2018 03:03:03 GMT-0400 (Eastern Daylight Time)
    Order ID: 4, Quantity: 10, Order Date: Fri May 04 2018 04:04:04 GMT-0400 (Eastern Daylight Time)
    Order ID: 5, Quantity: 20, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
    Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
    Order ID: 2, Quantity: 20, Order Date: Fri Mar 02 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 2, Quantity: 20, Order Date: Fri Mar 02 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
Order ID: 5, Quantity: 20, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
Order ID: 4, Quantity: 10, Order Date: Fri May 04 2018 04:04:04 GMT-0400 (Eastern Daylight Time)
Order ID: 3, Quantity: 30, Order Date: Tue Apr 03 2018 03:03:03 GMT-0400 (Eastern Daylight Time)
====================  Map (LINQ 'Zip' Equivalent) DEMO - Appending Order Numbers in Text  ====================
Quantity of Order One: 40
Quantity of Order Two: 20
Quantity of Order Three: 30
Quantity of Order Four: 10
Quantity of Order Five: 20
====================  Math.min/max (LINQ 'Min/Max' Equivalent) DEMO - Appending Order Numbers in Text  ====================
Minimum Quantity: 10
Maximum Quantity: 40
====================  Array.prototype.union (LINQ 'Union' Equivalent) DEMO - Display Domestic & International Orders  ====================
Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
Order ID: 11, Quantity: 20, Order Date: Sun Dec 02 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 111, Quantity: 450, Order Date: Sat Dec 01 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 1111, Quantity: 230, Order Date: Tue Dec 11 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 3, Quantity: 30, Order Date: Tue Apr 03 2018 03:03:03 GMT-0400 (Eastern Daylight Time)
Order ID: 33, Quantity: 300, Order Date: Tue Apr 03 2018 03:03:03 GMT-0400 (Eastern Daylight Time)
Order ID: 4, Quantity: 10, Order Date: Fri May 04 2018 04:04:04 GMT-0400 (Eastern Daylight Time)
Order ID: 44, Quantity: 100, Order Date: Fri May 04 2018 04:04:04 GMT-0400 (Eastern Daylight Time)
Order ID: 5, Quantity: 20, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
Order ID: 55, Quantity: 200, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
====================  Array.prototype.intersect (LINQ 'Intersect' Equivalent) DEMO - Find All Orders on Hold  ====================
    ********************  US Orders on hold  ********************
    Order ID: 1, Quantity: 40, Order Date: Thu Feb 01 2018 01:01:01 GMT-0500 (Eastern Standard Time)
    ********************  International Orders on hold  ********************
    Order ID: 3, Quantity: 30, Order Date: Tue Apr 03 2018 03:03:03 GMT-0400 (Eastern Daylight Time)
    Order ID: 4, Quantity: 10, Order Date: Fri May 04 2018 04:04:04 GMT-0400 (Eastern Daylight Time)
    Order ID: 5, Quantity: 20, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
====================  Array.prototype.except (LINQ 'Except' Equivalent) DEMO - Get all orders NOT on hold  ====================
Order ID: 11, Quantity: 20, Order Date: Sun Dec 02 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 111, Quantity: 450, Order Date: Sat Dec 01 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 1111, Quantity: 230, Order Date: Tue Dec 11 2018 02:02:02 GMT-0500 (Eastern Standard Time)
Order ID: 33, Quantity: 300, Order Date: Tue Apr 03 2018 03:03:03 GMT-0400 (Eastern Daylight Time)
Order ID: 44, Quantity: 100, Order Date: Fri May 04 2018 04:04:04 GMT-0400 (Eastern Daylight Time)
Order ID: 55, Quantity: 200, Order Date: Tue Jun 05 2018 05:05:05 GMT-0400 (Eastern Daylight Time)
```
