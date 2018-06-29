function updatePage(NYTData) {
  const numArticles = 25;

  console.log(NYTData); // log the NYTData to console,
  
  // loop through and build elements for the defined number of articles
  for (let i = 0; i < numArticles; i++) {
    var article = NYTData.response.docs[i];
    var articleCount = i + 1;

    // create the HTML well (section) and add the article content for each
    var $articleWell = $("<article>");
    $articleWell.addClass("well");
    $articleWell.attr("id", "article-well-" + articleCount);


    // if the article has a headline, log and append to $articleWell
    var headline = article.headline;

    if (headline && headline.main) {
      console.log(headline.main);

      $articleWell.append(
        "<h3 class='articleHeadline'>" +
        "<span class='label label-primary'>" + articleCount + "</span>" +
        "<strong> " + headline.main + "</strong></h3>"
      );
    }

    // if the article has a byline, log and append to $articleWell
    var byline = article.byline;

    if (byline && byline.original) {
      console.log(byline.original);

      $articleWell.append("<h5>" + byline.original + "</h5>");
    }

    // log section, and append to document if exists
    var section = article.section_name;
    console.log(article.section_name);
    if (section) {
      $articleWell.append("<h5>Section: " + section + "</h5>");
    }

    // log published date, and append to document if exists
    var pubDate = article.pub_date;
    console.log(article.pub_date);
    if (pubDate) {
      $articleWell.append("<h5>" + article.pub_date + "</h5>");
    }

    // append and log url
    $articleWell.append(
      "<a href='" + article.web_url + "'>" + article.web_url + "</a>"
    );
    console.log(article.web_url);
  }
}

// function to empty out the articles
function clear() {
  $("#well-section").empty();
}

// CLICK HANDLERS
// ==========================================================

// .on("click") function associated with the Search Button
$("#run-search").on("click", function(event) {
  // This line allows us to take advantage of the HTML "submit" property
  // This way we can hit enter on the keyboard and it registers the search
  // (in addition to clicks). Prevents the page from reloading on form submit.
  event.preventDefault();

  // empty the region associated with the articles
  clear();

  // build the query URL for the ajax request to the NYT API
  var queryURL = buildQueryURL();

  // make the AJAX request to the API - GETs the JSON data at the queryURL.
  // the data then gets passed as an argument to the updatePage function
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(updatePage);
});

$("#clear-all").on("click", clear);
