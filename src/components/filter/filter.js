import { useState } from "react";
import iconsettings from "../../assets/images/icon-settings.svg"
import iconbooks from "../../assets/images/icon-books.svg"
import allBooks from "../../books";
import sortBooks from "./sortBooks";
import findBooks from "./findBooks";
// import Input from "../input/input";
// import Select from "../select/select";

function Filter({setBooks}) {
  const [selectValue, setSelectValue] = useState();
  const [inputValue, setInputValue] = useState("");
  const [languageValue, setLanguageValue] = useState("Language");
  const [countryValue, setCountryValue] = useState("Country");
  const [minYear, setMinYearValue] = useState("");


  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const titleRegExp = new RegExp(inputValue, "gi");
    let filteredBooks = findBooks(allBooks, titleRegExp, languageValue, countryValue, minYear);
    sortBooks(filteredBooks, selectValue);
    setBooks(filteredBooks);
  }

   const handleSearchChange = (evt) => {
    setInputValue(evt.target.value);
  };
  const handleLanguageChange = (evt) => {
    setLanguageValue(evt.target.value);
  };

  const handleCountryChange = (evt) => {
    setCountryValue(evt.target.value);
  }
  const handleYearChange = (evt) => {
    setMinYearValue(evt.target.value);
  }
  const handleSortChange = (evt) => {
    setSelectValue(evt.target.value);
  }

  return (
    <>
    <div className="d-flex">
    <button className="btn btn-info d-sm-none mb-3 d-block flex-grow-1 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm" aria-expanded="false" aria-controls="collapseForm">
    <span className="d-flex align-items-center">
    <span><img src={iconsettings} alt="" width={25} height={25} /></span>
    <span className="h5 mb-0 ms-2" style={{fontFamily: 'Stick No Bills'}}>Filter</span>
    </span>
    </button>
    </div>
    <div className="collapse" id="collapseForm">
    <form onSubmit={handleFormSubmit} className="row mb-3 js-book-search-form" action="https://echo.htmlacademy.ru" method="GET">
    <div className="col-md-2">
    <input onChange={handleSearchChange} className="form-control rounded-pill js-book-search-input" type="search" name="title" placeholder="Book title" aria-label="Book title" style={{borderRadius: '15px', backgroundColor: '#fff8ee', border: '1px solid rgb(219, 215, 215)'}} />
    {/* <Input /> */}
    </div>
    <div className="col-md-2 mt-2 mt-md-0">
    <select onChange={handleLanguageChange} className="form-control rounded-pill js-language-select" name="language" aria-label="Language" style={{borderRadius: '15px', backgroundColor: '#fff8ee', border: '1px solid rgb(219, 215, 215)'}}>
    <option value="Language">Language</option>
    <option value="Akkadian">Akkadian</option>
    <option value="Arabic">Arabic</option>
    <option value="Chinese">Chinese</option>
    <option value="Classical Latin">Classical Latin</option>
    <option value="Danish">Danish</option>
    <option value="English">English</option>
    <option value="French">French</option>
    <option value="French, English">French, English</option>
    <option value="German">German</option>
    <option value="Greek">Greek</option>
    <option value="Hebrew">Hebrew</option>
    <option value="Icelandic">Icelandic</option>
    <option value="Italian">Italian</option>
    <option value="Japanese">Japanese</option>
    <option value="Norwegian">Norwegian</option>
    <option value="Old Norse">Old Norse</option>
    <option value="Persian">Persian</option>
    <option value="Portuguese">Portuguese</option>
    <option value="Russian">Russian</option>
    <option value="Sanskrit">Sanskrit</option>
    <option value="Spanish">Spanish</option>
    <option value="Swedish">Swedish</option>
    </select>
    </div>
    <div className="col-md-2 mt-2 mt-md-0">
    <select onChange={handleCountryChange} className="form-control rounded-pill js-country-select" name="country" aria-label="Country" style={{borderRadius: '15px', backgroundColor: '#fff8ee', border: '1px solid rgb(219, 215, 215)'}}>
    <option value="Country">Country</option>
    </select>
    </div>
    <div className="col-md-2 mt-2 mt-md-0">
    <input onChange={handleYearChange} className="form-control rounded-pill js-start-year-input" type="number" name="year" aria-label="Year" placeholder="Year" style={{borderRadius: '15px', backgroundColor: '#fff8ee', border: '1px solid rgb(219, 215, 215)'}} />
    </div>
    <div className="col-md-2 mt-2 mt-md-0">
    <select onChange={handleSortChange} className="form-control rounded-pill js-sort-select" name="sort" aria-label="Sorting" style={{borderRadius: '15px', backgroundColor: '#fff8ee', border: '1px solid rgb(219, 215, 215)'}}>
    <option value disabled>Sorting by...</option>
    <option value="az">A-Z</option>
    <option value="za">Z-A</option>
    <option value="pages_asc">Pages 🔼</option>
    <option value="pages_desc">Pages 🔽</option>
    <option value="year_asc">Year (old-new)</option>
    <option value="year_desc">Year (new-old)</option>
    </select>
    </div>
    <div className="col-md-1 mt-2 mt-md-0">
    <button className="btn btn-info text-white rounded-pill" type="submit">Search</button>
    </div>
    <div className="col-md-1 mt-2 mt-md-0">
    <button className="btn btn-warning text-white js-book-list-button" type="button" data-bs-toggle="modal" data-bs-target="#modal-book-list"><img src={iconbooks} alt="icon-books" width={20} height={20} />
    </button>
    </div>
    </form>
    </div>
    </>
    );
  }

  export default Filter;