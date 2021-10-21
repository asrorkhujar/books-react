
function findBooks(books, titleRegex, languageValue, countryValue, minYear) {
  return books.filter(book => {
    const meetsCriteria = book.title.match(titleRegex) && (languageValue === 'Language' || book.language.includes(languageValue)) && (countryValue === 'Country' || book.country.includes(countryValue)) && (minYear === '' || book.year >= Number(minYear));
    return meetsCriteria;
  });
}
export default findBooks;