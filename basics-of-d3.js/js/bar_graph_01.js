//prepare a data set
var dataSet = [300, 130, 5, 60, 240];

//draw a rectangular bar graph
d3.select("#myGraph") //select a SVG component
	.append("rect") //initialize a rectangle
	.attr("x", 0) //set an x coordinate
	.attr("y", 0) //set a y coordinate
	.attr("width", dataSet[0]) //set width
	.attr("height", "20px"); //set height
