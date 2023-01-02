import React from "react";
import Charts from "./Charts";
import { getBitcoinCreatorTHUNK } from "../Redux/ChartsReducer";
import { connect } from "react-redux";

const stateFunc = (state) => {
    return {
        fromState: state.ChartsReducer
    }
}

const dispatchFunc = (dispatch) => {
    return {
        bitcoinCourse: ((text) => dispatch(getBitcoinCreatorTHUNK(text)))
    }
}

const ChartsContainer = connect(stateFunc, dispatchFunc)(Charts);

export default ChartsContainer;