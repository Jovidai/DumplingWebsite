var url = "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/53158/dumpling-emoji-clipart-md.png"
d3.json(url)
  .then(function(data) {

    d3.select("#dumpling-button")
      .style("background-image", "url('" + data[0].url + "')");

  });

  var bannerPosition = d3.scaleLinear()
  .domain([0, window.innerHeight / 2])
  .range([100, 0]);

d3.select(window)
  .on("scroll", function() {

    var y = bannerPosition(window.scrollY);
    d3.select("#dumpling-button")
      .style("background-position", "50% " + y + "%");

  });