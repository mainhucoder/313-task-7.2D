 import React from 'react';
 import UploadImage from './uploadImage'
import{db } from "./firebase";
import {  useState } from 'react';
import{collection, addDoc} from "firebase/firestore"


function QuestionForm() {

  const[title, setTitle] = useState("");
  const[desc, setDesc] = useState("");
  const[tag, setTag] = useState("");
  const userCollectionRef = collection(db, "questions");
  const writeUserData = async() => {
    await addDoc( userCollectionRef, {title: title, desc: desc, tag: tag}).then(() => {
         alert("Data Uploaded!");})
    }

  return (

    <div className="post-form">
      <h2>Ask a Question</h2>
      <h3>Uploade Image</h3>
        <UploadImage/>
      <form>
        <div className="form-group">
          <label htmlFor="questionTitle">Title</label>
          <input
            type="text"
            id="questionTitle"
            name="questionTitle"
            placeholder="Enter a descriptive title"
            onChange={(event) => {setTitle(event.target.value)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="problemDescription">Describe Your Problem</label>
          <textarea
            id="problemDescription"
            name="problemDescription"
            rows="6"
            placeholder="Describe your problem here..."
            onChange={(event) => {setDesc(event.target.value)}}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="questionTags">Tags</label>
          <input type="text" id="questionTags" name="questionTags"  
          onChange={(event) => {setTag(event.target.value)}}/>
         
        </div>
      </form>
      <button onClick={writeUserData} className="submit">Post Question</button>
    </div>
  );
}

export default QuestionForm;