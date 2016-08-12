//prepare a data set
var dataSet = [300, 130, 5, 60, 240];

//draw the first bar
d3.select("#myGraph")
	.append("rect")
	.attr("x", 0)
	.attr("y", 0)
	.attr("width", dataSet[0])
	.attr("height", "20px");

//draw the second bar
d3.select("#myGraph")
	.append("rect")
	.attr("x", 0)
	.attr("y", 25)
	.attr("width", dataSet[1])
	.attr("height", "20px");

	//draw the third bar
d3.select("#myGraph")
	.append("rect")
	.attr("x", 0)
	.attr("y", 50)
	.attr("width", dataSet[2])
	.attr("height", "20px");

	//draw the fourth bar
d3.select("#myGraph")
	.append("rect")
	.attr("x", 0)
	.attr("y", 75)
	.attr("width", dataSet[3])
	.attr("height", "20px");

	//draw the fifth bar
d3.select("#myGraph")
	.append("rect")
	.attr("x", 0)
	.attr("y", 100)
	.attr("width", dataSet[4])
	.attr("height", "20px");
