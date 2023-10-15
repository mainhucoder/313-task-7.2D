 import React from 'react';
import UploadImage from './uploadImage';
import { getDatabase, ref, set } from "firebase/database";
import{collection, addDoc} from "firebase/firestore"
import{db } from "./firebase";
import {useState} from 'react';

function ArticleForm() {
  const[title, setTitle] = useState("")
  const[abstract, setAbstract ] = useState("")
  const[article, setArticle ] = useState("")
  const[tag, setTag ]= useState("")
  
  const userCollectionRef = collection(db, "article");
  
  const writeUserData = async() => {
  await addDoc( userCollectionRef, {title: title, abstract: abstract, article: article, tag: tag}).then(() => {
       alert("Data Uploaded!");})
  }

  return (
    <div className="post-form">
    
      <h2>Create an Article</h2>
      <div>
        <h3>Uploade Image</h3>
        <UploadImage/>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter a descriptive title"
            onChange={(event) => {setTitle(event.target.value)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="abstract">Abstract</label>
          <textarea id="abstract" name="abstract" rows="3" placeholder="Write an abstract..."
           onChange={(event) => {setAbstract(event.target.value)}}>
          </textarea>
        </div>
        <div className="form-group">
          <label htmlFor="articleText">Article Text</label>
          <textarea
            id="articleText"
            name="articleText"
            rows="6"
            placeholder="Write your article here..."
            onChange={(event) => {setArticle(event.target.value)}}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="tags">Tags</label>
          <input type="text" id="tags" name="tags" 
          onChange={(event) => {setTag(event.target.value)}}/>

        </div>
      </form>
      <button onClick={writeUserData} type="submit">Post Article</button>
    </div>
  );
}

export default ArticleForm;