import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getCharacters } from '../actions';

class CharacterListView extends React.Component {

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.isLoading) {
      return (
        <div>Loading...</div>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = ({ charsReducer }) => {
  return {
    characters: charsReducer.characters,
    isLoading: charsReducer.isLoading,
  };
};


export default connect(
  mapStateToProps,
  {
    getCharacters,
  }
)(CharacterListView);
