// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  let sum = 0;
  let average = 0;
  for (i = 0; i < data.length; i ++){
    sum += data[i].price;
    average = sum/data.length
  }
  console.log( "The average price is $" + average.toFixed(2));
};


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let priceArr = [];
  for (i = 0; i < data.length; i ++){
    if (data[i].price >= 14 && data[i].price <= 18){
      priceArr.push(data[i].title);
    }
  }
   console.log(priceArr.join('\n'));
};


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let currencyPounds = "";
  for (i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      currencyPounds = (data[i].title + " costs " + data[i].price + " pounds.");

    }
  }
  console.log(currencyPounds);
  // Answer:
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let materialWood = [];
  for (i = 0; i < data.length; i ++) {
    if (data[i].materials.includes("wood")) {
      materialWood.push(data[i].title + " is made of wood.");
    }
  }
  console.log(materialWood.join('\n'));
  // Answer: fix this so it targeted entire array
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let manyMaterials = "";
  for (i = 0; i < data.length; i++){
    if (data[i].materials.length >= 8){
      manyMaterials = (data[i].title + data[i].materials + data[i].materials.length);
    }
  }
  console.log(manyMaterials);
  // Answer: why is this only giving me one answer and how do I make it a list?
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  // Answer:
}
