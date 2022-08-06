import React, { useContext } from 'react';
import { pageContext } from '../Helper/pageContext';
import { PaginationButtonsList } from './PaginationButtonsList';
import Loader from './Loader';
import { Post } from './Post';


const PostList = () => {
    const { state, dispatch } = useContext(pageContext);
    return (
        <>
            {state.isLoading ? (<Loader />) : (
                <>
                    {state.pageData && Object.entries(state.pageData).map((data, index) => {
                        return (
                            <Post
                                key={index}
                                title={data[1].title}
                                body={data[1].body}
                            />
                        )
                    })}
                </>
            )}
            <PaginationButtonsList />
        </>
    )
}

export { PostList }