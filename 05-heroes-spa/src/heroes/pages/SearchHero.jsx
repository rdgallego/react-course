import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components";
import queryString from "query-string";
import { getHeroesByName } from "../helpers";

export const SearchHero = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {q} = queryString.parse(location.search);

  const heroes = getHeroesByName(q);


  const { searchText, onInputChange } = useForm({
    searchText: q
  });



  const onSearch = (event) => {
    event.preventDefault();
    if(searchText.trim().length <= 1){
      return;
    }

    navigate(`?q=${searchText.toLowerCase().trim()}`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearch} aria-label="form">
            <input type="text" placeholder="Search a hero" className="form-control" name="searchText" autoComplete="off" value={searchText} onChange={onInputChange}/>
            <button className="btn btn-outline-primary mt-1">Seach</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Result</h4>
          <hr />
          {
            (q === '')
            ?  <div className="alert alert-primary">
                Search a hero
              </div>
            : (heroes.length === 0) &&
              <div className="alert alert-danger">
                No hero with <b>{q}</b>
              </div>
          }

          {heroes.map(hero => (<HeroCard key={hero.id} {...hero}/>))}
        </div>
      </div>

    </>
  )
}
