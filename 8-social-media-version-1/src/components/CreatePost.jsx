import React, { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/posts-list-store";

function CreatePost() {

   const { addPost } = useContext(PostList);

   const userIdElement = useRef();
   const postTitleElement = useRef();
   const postBodyElement = useRef();
   const reactionsElement = useRef();
   const tagsElement = useRef();

   function handleSubmit(event) {
      event.preventDefault();
      const userId = userIdElement.current.value;
      const postTitle = postTitleElement.current.value;
      const postBody = postBodyElement.current.value;
      const reactions = reactionsElement.current.value;
      const tags = tagsElement.current.value.split(" "); //bcause tags is array type

      userIdElement.current.value = "";
      postTitleElement.current.value = "";
      postBodyElement.current.value = "";
      reactionsElement.current.value = "";
      tagsElement.current.value = "";

      addPost(userId, postTitle, postBody, reactions, tags);
   }

   return (
      <form className="create-post" onSubmit={handleSubmit}>
         <div className="mb-3">
            <label htmlFor="userId" className="form-label" >UserId</label>
            <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder="Provide UserId Details" />
         </div>
         <div className="mb-3">
            <label htmlFor="postTitle" className="form-label" >Post Title</label>
            <input type="text" ref={postTitleElement} className="form-control" id="postTitle"
               placeholder="Provide Post Title" />
         </div>
         <div className="mb-3">
            <label htmlFor="postBody" className="form-label" >Post Content</label>
            <textarea type="text" ref={postBodyElement} rows="4" className="form-control" id="postBody" placeholder="Provide Post Content in Text" />
         </div>
         <div className="mb-3">
            <label htmlFor="reactions" className="form-label" >Reactions</label>
            <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder="Provide Reactions in Numbers" />
         </div>
         <div className="mb-3">
            <label htmlFor="tags" className="form-label" >Hash Tags</label>
            <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Provide Hash Tags using #" />
         </div>
         <button type="submit" className="btn btn-primary">Submit</button>
      </form>

   )
}

export default CreatePost;