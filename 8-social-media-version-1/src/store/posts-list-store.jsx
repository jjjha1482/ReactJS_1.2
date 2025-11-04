import { createContext, useReducer } from "react";


export const PostList = createContext({
   postList: [],
   addPost: () => { },
   deletePost: () => { },
});

function postListReducer(currentPostList, action) {
   let newPostList = currentPostList;
   if (action.type === "DELETE_POST") {
      newPostList = currentPostList.filter((post) => post.id !== action.payload.postId);
   } else if (action.type === "ADD_POST") {
      newPostList = [action.payload, ...currentPostList]
   }
   return newPostList;
}

function PostListProvider({ children }) {

   const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

   function addPost(userId, postTitle, postBody, reactions, tags) {
      dispatchPostList({
         type: 'ADD_POST',
         payload: {
            id: Date.now(),
            userId: userId,
            postTitle: postTitle,
            postBody: postBody,
            reactions: reactions,
            tags: tags,
         }
      })

   }

   function deletePost(postId) {
      dispatchPostList({
         type: 'DELETE_POST',
         payload: {
            postId
         },
      });
   }


   return (<PostList.Provider value={{
      postList,
      addPost,
      deletePost,
   }}>{children}</PostList.Provider>);

}
const DEFAULT_POST_LIST = [{
   id: '1',
   postTitle: 'Going to Mumbai',
   postBody: 'Hi Friends, I am going to mumbai for my vacation',
   reactions: 2,
   userId: 'user-9',
   tags: ['vacation', 'Mumbai', 'Enjoy'],
},
{
   id: '2',
   postTitle: 'Pass ho bhai',
   postBody: 'Hard to belive',
   reactions: 15,
   userId: 'user-12',
   tags: ['Graduating', 'Unbelievable'],
}]

export default PostListProvider;