//draw a rectangular bar graph by importing data from csv
d3.csv("data/mydata.csv", function(err, d) {
	var dataSet = []; //initialize an array for storing data
	for(var i = 0; i < d.length; i++) {
		dataSet.push(d[i].item1); //append data at item1 column
	}

	//draw a set of bars
	d3.select("#myGraph") //select a SVG component
		.selectAll("rect") //set the SVG as a component for rendering rectangle bars
		.data(dataSet) //import data
		.enter() //create a rect component based on the number of data
		.append("rect") //initialize a rectangle
		.attr("x", 0) //set x coordinates
		.attr("y", function(d, i) {
			return i * 25;
		}) //set y coordinates with a 25 px interval
		.attr("width", function(d) {
			return d + "px";
		}) //set data values as widths
		.attr("height", "20px"); //set height
});
