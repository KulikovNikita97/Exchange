import { getBitcionAPI } from "./../api/api";

const SET_TYPE_OF_CURRENCY = "SET-TYPE-OF-CURRENCY";
const IS_LOADING = "IS-LOADING";
const SET_IN_STATE_BITCOIN_COURSE = "SET-IN-STATE-BITCOIN-COURSE";

let initialState = {
  type: "",
  isLoading: false,
  setInStateBitcoinCourse: "",
};

const ChartsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TYPE_OF_CURRENCY: {
      let stateCopy = { ...state, type: action.name };
      return stateCopy;
    }
    case IS_LOADING: {
      let stateCopy = { ...state, isLoading: !state.isLoading };
      return stateCopy;
    }
    case SET_IN_STATE_BITCOIN_COURSE: {
      let stateCopy = { ...state, setInStateBitcoinCourse: action.data };
      return stateCopy;
    }
    default:
      return state;
  }
};

//action creators

export const isLoadingAC = () => {
  return {
    type: IS_LOADING,
  };
};

export const setInStateBitcoinCourseAC = (data) => {
  return {
    type: SET_IN_STATE_BITCOIN_COURSE,
    data: data,
  };
};

//thunks

export const getBitcoinCreatorTHUNK = () => {
  return (dispatch) => {
    dispatch(isLoadingAC());
    getBitcionAPI().then((response) => {
      dispatch(setInStateBitcoinCourseAC(response));
      dispatch(isLoadingAC());
    });
  };
};

export default ChartsReducer;
