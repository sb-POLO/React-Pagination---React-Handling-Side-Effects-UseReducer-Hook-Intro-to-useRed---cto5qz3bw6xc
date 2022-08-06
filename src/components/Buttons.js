import React, { useContext } from 'react';
import { PAGE_NUMBER } from '../actions/action.type';
import { pageContext } from '../Helper/pageContext';

export default function Buttons({ pageNumber }) {
    const { state, dispatch } = useContext(pageContext);
    return (
        <button
            className={state.currentPage === pageNumber ? 'active-btn' : ''}
            id={`button-${pageNumber}`}
            onClick={() => {
                dispatch({ type: PAGE_NUMBER, payload: { pageNumber: pageNumber } });
            }}
        >
            {pageNumber}
        </button>
    )
}