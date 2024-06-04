import React, { useState, useEffect } from 'react';

const DynamicTitleComponent = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <h1>Update Document Title</h1>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter new title"
      />
    </div>
  );
};

export default DynamicTitleComponent;
