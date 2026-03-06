1.	What is the difference between var, let, and const?
Answer:
In JavaScript, var, let, and const are all used to declare variables, but they behave a bit differently. var is the older way of declaring variables and it is function-scoped, which means it can be accessed anywhere inside the function where it was created. It also allows you to redeclare and update the variable. On the other hand, let and const were introduced in ES6 and are block-scoped. It means that they only work within the { } block where they are defined. A variable declared with let can be updated later.But it cannot be declared again in the same scope. const is used for values that should not change. Once a value is assigned to a const variable, it cannot be reassigned.
2.	What is the spread operator (...)?
Answer:
The spread operator (...) was introduced in ES6 and is used to expand elements from an array. It’s very helpful when copying arrays.

3.What is the difference between map(), filter(), and forEach()?
Answer:
map(), filter(), and forEach() are common array methods used to work with array elements. The forEach() method runs a function for every item in an array. It is usually to perform an action like printing values and updating something. However, it does not return a new array. The map() method also runs a function for each element. But it returns a new array with the transformed values, which makes it useful when you want to modify data. The filter() method is used when you want to keep only certain elements that match a condition. It returns a new array with those selected items. 
4. What is an arrow function?
Answer:
An arrow function is a shorter and more modern way to write functions in JavaScript, introduced in ES6. Instead of using the function keyword, it uses the (=>) symbol. Arrow functions help make code more concise and easier to read.
5. What are template literals?
Answer:
Template literals are a modern way to write strings in JavaScript using backticks (`). One of their biggest advantages is that they allow the insertion of variables.
