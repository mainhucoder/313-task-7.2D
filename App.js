import React, { useState } from 'react';
import './App.css';
import PostBar from './PostBar';
import TypeSelector from './TypeSelector';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import FindQuestion from './FilterQuestion';

function App() {
  const [selectedPostType, setSelectedPostType] = useState('question');

  const handlePostTypeChange = (type) => {
    setSelectedPostType(type);
  };

  return (
    <div className="App">
      <h1>New Post</h1>
      <TypeSelector selectedPostType={selectedPostType} setSelectedPostType={setSelectedPostType} />
      {selectedPostType === 'question' ? <QuestionForm /> : null}
      {selectedPostType === 'article' ? <ArticleForm /> : null}
      <div className="Find"> 
      {selectedPostType === 'FindQuestion' ? <FindQuestion /> : null} 
      </div>
     
    </div>
  );
}

export default App;