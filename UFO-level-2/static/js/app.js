// from data.js
var tableData = data;
//console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {
    //console.log(ufoSighting);
    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    // Use `Object.entries` to console.log each UFO Sighting value
    Object.entries(ufoSighting).forEach(function([key, value]) {
      //console.log(key, value);
      // Append a cell to the row for each value
      var cell = row.append("td");
      cell.text(value);
    });
});

// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    d3.event.preventDefault(); 

    // Select the input date get the raw HTML nodes
    var inputSelection = d3.select("#dropdownselection");

    var inputElement = d3.select("#input")
    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var selection = inputSelection.property("value")
    var filteredData = [];
    switch(selection)
      {
      case "Date":
        filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
      break;
      case "City":
        filteredData = tableData.filter(sighting => sighting.city === inputValue);
      break;
      case "State":
        filteredData = tableData.filter(sighting => sighting.state === inputValue);
      break;
      case "Country":
        filteredData = tableData.filter(sighting => sighting.country === inputValue);
      break;
      case "Shape":
        filteredData = tableData.filter(sighting => sighting.shape === inputValue);
      break;
      default:
        filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
      } 
    
    console.log(filteredData);

    filteredData.forEach(function(selections) {
      console.log(selections);
      // Append one table row `tr` for each UFO Sighting object
      var row = tbody.append("tr");
      // Use `Object.entries` to console.log each UFO Sighting value
      Object.entries(selections).forEach(function([key, value]) {
          console.log(key, value);
          // Append a cell to the row for each value
          var cell = row.append("td");
          cell.text(value);
      });
    });
});