//prepare a data set
var dataSet = [300, 130, 5, 60, 240];

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

//handle an event of clicking the button
d3.select("#update")
	.on("click", function() {
		for(var i = 0; i < dataSet.length; i++) {
			dataSet[i] = Math.floor(Math.random() * 320);//get a random number between 0 and 320
		}
		d3.select("#myGraph")
			.selectAll("rect")
			.data(dataSet)
			.transition() //set transition animation
			.attr("width", function(d) {
				return d + "px";
			})
	});

