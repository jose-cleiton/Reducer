import React from "react";
import { connect } from "react-redux";

class Player extends React.Component {
  render() {
    return (
      <div className="player">
        <fieldset>
          <legend>Player</legend>
          <h1>{this.props.selectedCategory.name}</h1>
          <h1>{this.props.selectedMovie.title}</h1>
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  selectedMovie: store.movieReducer.selectedMovie,
  selectedCategory: store.movieReducer.selectedCategory
});

export default connect(mapStateToProps)(Player);
