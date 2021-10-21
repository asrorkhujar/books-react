function sortBooks(books, sortType) {
  if (sortType === 'az') {
    books.sort((a, b) => {
      if (a.title > b.title) return 1;
      if (a.title < b.title) return -1;
      return 0;
    });
  } else if (sortType === 'za') {
    books.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    });
  } else if (sortType === 'pages_asc') {
    books.sort((a, b) => a.pages - b.pages);
  } else if (sortType === 'pages_desc') {
    books.sort((a, b) => b.pages - a.pages);
  } else if (sortType === 'year_asc') {
    books.sort((a, b) => a.year - b.year);
  } else if (sortType === 'year_desc') {
    books.sort((a, b) => b.year - a.year);
  }
}

export default sortBooks;