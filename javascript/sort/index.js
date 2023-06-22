'use strict';

function sortByYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}


function sortByTitle(movies) {
  return movies.sort((a, b) => {
    const titleA = removeLeadingArticles(a.title);
    const titleB = removeLeadingArticles(b.title);
    return titleA.localeCompare(titleB);
  });
}

function removeLeadingArticles(title) {
  const articles = ["A ", "An ", "The "];
  for (const article of articles) {
    if (title.startsWith(article)) {
      return title.substring(article.length);
    }
  }
  return title;
}

module.exports = {
  sortByYear,
  sortByTitle,
  removeLeadingArticles

};
