//integrate all scripts
var lengthOfArray = 5;
var dataSet = generateRandomNums(lengthOfArray);
var barColorChanged = false;

d3.select("#myGraph")
	.selectAll("rect")
	.data(dataSet)
	.enter()
	.append("rect")
	.attr("x", 0)
	.attr("y", function(d, i) {
		return i * 25;
	})
	.on("click", function() {
		if (!barColorChanged) {
			d3.select(this)
				.style("fill", "cyan");
			barColorChanged = true;
		} else {
			d3.select(this)
				.style("fill", "red");
			barColorChanged = false;
		}
	})
	.attr("width", "0px")
	.transition()
	.duration(2500)
	.attr("width", function(d) {
		return d + "px";
	})
	.attr("height", "20px");

d3.select("#update")
	.on("click", function() {
		dataSet = generateRandomNums(lengthOfArray);
		d3.select("#myGraph")
			.selectAll("rect")
			.data(dataSet)
			.transition()
			.duration(2500)
			.attr("width", function(d) {
				return d + "px";
			});
	});

var xScale = d3.scale.linear()
	.domain([0,300])
	.range([0, 300]);

d3.select("#myGraph")
	.append("g")
	.attr("class", "axis")
	.call(
		d3.svg.axis()
			.scale(xScale)
			.orient("bottom")
	)
	.attr("transform", "translate(10, " + ((1 + dataSet.length) * 20 + 5) + ")");

function generateRandomNums(length) {
	var dataSet = [];
	for(var i = 0; i < length; i++) {
		dataSet.push(Math.floor(Math.random() * 300));
	}
	return dataSet;
}
