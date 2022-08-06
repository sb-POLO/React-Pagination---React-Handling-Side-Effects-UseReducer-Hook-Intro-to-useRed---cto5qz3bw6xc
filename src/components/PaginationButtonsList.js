import React, { useContext, useMemo } from 'react';
import { pageContext } from '../Helper/pageContext';
import Buttons from './Buttons';

const PaginationButtonsList = () => {
    const { state } = useContext(pageContext);

    const generateButtons = (value) => {
        let buttons = [];
        for (let index = 1; index <= value; index++) {
            buttons = [...buttons, <Buttons
                key={index}
                pageNumber={index}
                currentPage={state.currentPage}
            />];
        }
        return buttons;
    }

    const getButtons = useMemo(() => generateButtons(state.paginationButtons), []);

    return (
        <div className="pagination-buttons-list">
            {
                getButtons.map((Button) => {
                    return (
                        Button
                    )
                })
            }
        </div>
    )
}

export { PaginationButtonsList }