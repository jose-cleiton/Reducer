import React from "react";
import { connect } from "react-redux";
import { movieAction } from "../redux/actions/movieActions";

function Sidebar({ categories, selectMovie, dispatch }) {
  // const { categories } = props;
  // console.log(dispatch);

  return (
    <aside>
      <fieldset>
        <legend>
          {"< "}
          Sidebar
          {" >"}
        </legend>
        {categories.map((category) => (
          <div key={category.id}>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={movie.id}>
                  {movie.title} was released in {movie.released}
                  <button
                    type="button"
                    // onClick={() => dispatch(movieAction(category, movie))}
                    onClick={() => selectMovie(category, movie)}
                  >
                    Assistir
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </fieldset>
    </aside>
  );
}

const mapStateToProps = (store) => ({
  categories: store.movieReducer.categories
});

const mapDispatchToProps = (dispatch) => ({
  selectMovie: (category, movie) => dispatch(movieAction(category, movie))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
