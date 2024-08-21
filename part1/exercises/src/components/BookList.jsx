export default function BookList() {
  let pageTitle = "Love of Books";
  let book1 =
    "https://www.thoughtco.com/thmb/SuveYjmc-r0wMBYj4QOea0cE7D0=/1488x2338/filters:fill(auto,1)/Twilight_book_cover-589fa4625f9b58819cb2e790.jpg";
  let book2 =
    "https://www.femalefirst.co.uk/image-library/port/1000/n/new-moon-book-cover.jpg";
  let book3 =
    "https://stepheniemeyer.com/wp-content/uploads/2008/08/breaking-dawn-book-cover-678x1024.jpg";

  return (
    <div>
      <h3>{pageTitle}</h3>
      <img src={book1} alt="Twilight" />
      <img src={book2} alt="New Moon!" />
      <img src={book3} alt="Breaking Dawn!" />
    </div>
  );
}
