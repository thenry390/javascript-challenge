var tableData = data;

tableData.forEach((ufoSighting) => {
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the form
var form = d3.select("#form");
var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {
  // Prevent the page from refreshing
  d3.event.preventDefault();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");
  // Get the value property of the input element
  var inputValue = inputElement.property("value");
 
  var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};



