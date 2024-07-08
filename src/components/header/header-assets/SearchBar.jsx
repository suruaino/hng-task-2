import searchIcon from "./search-icon.svg";
import "./search.css";
const SearchBar = () => {

    return(
        <div className="search-bar">
            <input type="search" placeholder="Search Books, Authors, Cathegories" />
            <button>
                <img src={searchIcon} alt="" />
            </button>
        </div>
    )
}

export default SearchBar;