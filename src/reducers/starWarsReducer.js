import {
  FETCHING_CHARACTERS,
  FETCHING_CHARACTERS_SUCCESS,
  FETCHING_CHARACTERS_FAILURE,
} from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: '',
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CHARACTERS:
      console.log('STATE', state)
      return {
        ...state,
        error: '',
        isLoading: true,
      };
    case FETCHING_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload,
      };
    case FETCHING_CHARACTERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
