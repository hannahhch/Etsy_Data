// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  let sum = 0;
  let average = 0;
  for (let i = 0; i < data.length; i ++){
    sum += data[i].price;
  }
  average = sum/data.length;
    return "The average price is $" + average.toFixed(2);
};

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let priceArr = [];
  priceArr.push('<ul>');
  for (let i = 0; i < data.length; i ++){
    if (data[i].price >= 14 && data[i].price <= 18){
      priceArr.push('<li>' + data[i].title + '</li>');
    }
  }
  priceArr.push('</ul>');

   return priceArr.join('\n');
};


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      return data[i].title + " costs " + data[i].price + " pounds.";
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let materialWood = [];
  materialWood.push('<ul>');
  for (let i = 0; i < data.length; i ++) {
    if (data[i].materials.includes("wood")) {
      materialWood.push('<li>' + data[i].title + " is made of wood." + '</li>');
    }
  }
  materialWood.push('</ul>');
  return materialWood.join('\n');

}


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let mainData = [];
  for (let i = 0; i < data.length; i++){
    if (data[i].materials.length >= 8){
      mainData.push(data[i].title + ' has ' + data[i].materials.length + " materials:");
      mainData.push("<ul>");
      for (j = 0; j < data[i].materials.length; j++){
        mainData.push( '<li>' + data[i].materials[j] + '</li>');
      }
      mainData.push("</ul>");
    }
  }
  return mainData.join('\n');
}

// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let peopleArr = [];
  for (let i = 0; i < data.length; i ++){
    if (data[i].who_made === 'i_did') {

      peopleArr.push(data[i].who_made);
    }
  }
  return peopleArr.length + ' items were made by their sellers.';

}

document.getElementById('answer_one').textContent = question1();

document.getElementById('answer_two').innerHTML = question2();

document.getElementById('answer_three').textContent = question3();

document.getElementById('answer_four').innerHTML = question4();

document.getElementById('answer_five').innerHTML = question5();

document.getElementById('answer_six').textContent = question6();
