import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
   try {
       const { data } = await api.fetchPosts();

       dispatch({ type: 'FETCH_ALL', payload: data });
   } catch (error) {
       console.log(error.message);
   }
}

export const createPost = (post) => async (dispatch) => {
    console.log(post, 'I am the post');
    console.log(dispatch, 'I am the dispatch');
    try {
        const { data } = await api.createPost(post);
        console.log(data, 'i am the data');

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error);
    }
}