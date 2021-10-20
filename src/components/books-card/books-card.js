import iconlanguage from "../../assets/images/icon-language.svg"
import icondate from "../../assets/images/icon-date.svg"
import iconlibrary from "../../assets/images/icon-library_books.svg"
import iconouthor from "../../assets/images/icon-author.svg"
import iconwiki from "../../assets/images/wikipedia.svg"

let url = "../../assets/";

function BookCard({title, imageLink, year, language, pages, author, link}) {
  // console.log(process.env.PUBLIC_URL+imageLink);
  console.log(imageLink);

  return (
    <div className="books__item col-sm-6 col-md-4 mb-4">
    <div className="book card h-100" style={{borderRadius: '15px', backgroundColor: '#fff8ee', border: '1px solid rgb(219, 215, 215)'}}>
    <div className="p-4 mx-auto">
    <img className="book__img card-img-top" src={imageLink} alt="rasm" width={200} height={400} />
    </div>
    <div className="card-body d-flex flex-column">
    <h3 className="book__title h3 text-success card-title">{title}</h3>
    <div className="d-flex flex-wrap justify-content-between mb-2 small">
    <span className="d-flex align-items-center me-2">
    <img className="me-1" src={iconlanguage} alt="" width={16} height={16} />
    <span className="book__language">{language}</span>
    </span>
    <span className="d-flex align-items-center me-2">
    <img className="me-1" src={icondate} alt="" width={16} height={16} />
    <span className="book__year">{year}</span>
    </span>
    <span className="d-flex align-items-center ">
    <img className="me-1" src={iconlibrary} alt="" width={16} height={16} />
    <span className="book__pages">{pages}</span>
    </span>
    </div>
    <div className="d-flex align-items-center mb-4">
    <img className="me-1" src={iconouthor} alt="" width={25} height={25} />
    <p className="book__author text-secondary fw-bolder card-text h6">{author}</p>
    </div>
    <div className="d-flex mt-auto">
    <a className="book-info-modal__wikipedia-link me-2 btn btn-success flex-grow-1" href={link} rel="noreferrer" target="_blank">Wiki
    <img className="ms-1" src={iconwiki} alt="" width={20} height={20} />
    </a>
    <button className="flex-grow-1 btn btn-outline-secondary btn-sm js-bookmark-button">Bookmark</button>
    </div>
    </div>
    </div>
    </div>
    )
  }

  export default BookCard;