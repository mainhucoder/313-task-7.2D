import React from 'react';

function TypeSelector({ selectedPostType, setSelectedPostType }) {
  const handlePostTypeChange = (event) => {
    setSelectedPostType(event.target.value);
  };

  return (
    <div className="header">
      <label>Select Post Type:</label>
      <div>
        <input
          type="radio"
          id="question"
          name="postType"
          value="question"
          checked={selectedPostType === 'question'}
          onChange={handlePostTypeChange}
        />
        <label htmlFor="question">Question</label>
      </div>
      <div>
        <input
          type="radio"
          id="article"
          name="postType"
          value="article"
          checked={selectedPostType === 'article'}
          onChange={handlePostTypeChange}
        />
        <label htmlFor="article">Article</label>
      </div>
      <div>
        <input
          type="radio"
          id="FindQuestion"
          name="postType"
          value="FindQuestion"
          checked={selectedPostType === 'FindQuestion'}
          onChange={handlePostTypeChange}
        />
        <label htmlFor="FindQuestion">Find Question</label>
      </div>
    </div>
  );
}

export default TypeSelector;
