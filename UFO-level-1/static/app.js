//Assign data from data.js to descriptive value
let ufodata = data;

//Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

//Create event handlers for clicking button or pressing enter key
button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    let filteredData = ufodata.filter(date => date.datetime === inputValue);

    console.log(filteredData);

    //Select the tbody element by class name
    let tablebody = d3.select("tbody");

    tablebody.html("")

    filteredData.forEach((ufo) => {
        let row = tablebody.append('tr');
        Object.entries(ufo).forEach(([key,value]) => {
            let cell = row.append('td');
            cell.text(value);
        });
    });

}

