import { LOADING, PAGE_DATA, PAGE_NUMBER } from '../actions/action.type';

const pageReducer = (state, action) => {
    switch (action.type) {
        case LOADING:
            return { ...state, isLoading: state.isLoading = action.payload.loading };

        case PAGE_DATA:
            return { ...state, pageData: [...action.payload.data] };

        case PAGE_NUMBER:
            return { ...state, currentPage: state.currentPage = action.payload.pageNumber };

        default:
            return state;
    }
}

export default pageReducer;