import React, { useEffect, useReducer } from 'react'
import '../styles/App.css';
import { PostList } from './PostList';
import { pageContext } from '../Helper/pageContext';
import pageReducer from "../reducer/pageReducer";
import { fetchPosts } from '../api/fetchPosts';
import { LOADING, PAGE_DATA } from '../actions/action.type';

const App = () => {
  const [state, dispatch] = useReducer(pageReducer, {
    isLoading: true,
    currentPage: 1,
    paginationButtons: 20,
    pageData: [],
  });

  const loadData = async (page) => {
    const pageData = await fetchPosts(page);
    dispatch({ type: LOADING, payload: { loading: false } });
    dispatch({ type: PAGE_DATA, payload: { data: [...pageData] } });
  }

  useEffect(() => {
    dispatch({ type: LOADING, payload: { loading: true } });
    loadData();
  }, []);

  useEffect(() => {
    dispatch({ type: LOADING, payload: { loading: true } });
    loadData(state.currentPage)
  }, [state.currentPage])

  return (
    <div id="main">
      <pageContext.Provider value={{ state, dispatch }}>
        <PostList />
      </pageContext.Provider>
    </div>
  )
}


export default App;