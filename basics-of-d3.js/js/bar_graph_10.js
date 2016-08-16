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

	//set linear scale
	var xScale = d3.scale.linear() //set linear scale
		.domain([0, 300]) //set data range
		.range([0, 300]); //set output range

	//display linear scale
	d3.select("#myGraph")
		.append("g") //group components
		.attr("class", "axis") // set stylesheet class
		//.attr("transform", "translate(10, " + ((1 + dataSet.length) * 20 + 5) + ")")
		.call(d3.svg.axis()
			.scale(xScale) //apply linear scale
			.orient("bottom") //place scale to the bottom
		)
		.attr("transform", "translate(10, " + ((1 + dataSet.length) * 20 + 5) + ")"); //adjust the position of scale
});
