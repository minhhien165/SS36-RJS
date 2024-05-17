import React, { useState } from 'react';

export default function ChangeTitle() {
  const [newTitle, setNewTitle] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setNewTitle(inputValue);
    document.title = inputValue;
  };

  return (
    <div>
      Bt1
      <input
        type="text"
        placeholder="Nhập tiêu đề mới..."
        value={newTitle}
        onChange={handleInputChange}
      />
    </div>
  );
}