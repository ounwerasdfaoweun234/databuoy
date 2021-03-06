var Utils = {
  parseStringToArray: function(string) {
    return string.split(",").map(function (dataset) {
      return dataset.trim();
    });
  },
  parseKeywords: function(keyword_array) {
    return keyword_array.join(", ");
  },
  parseEmail: function(email_string) {
    return email_string.replace("mailto:", "");
  },
  parseDescription: function(description) {
    return description.slice(0,137) + '...';
  },
  setPageTitle: function(page_title) {
    $('title').text(page_title);
    $('h1 a').text(page_title);
  }
};
