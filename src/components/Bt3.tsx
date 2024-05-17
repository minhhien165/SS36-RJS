import React, { useState } from 'react';

export default function Navbar() {
  const [currentPage, setCurrentPage] = useState<string>('Trang chủ');

  const tabs = ['Trang chủ', 'Sản phẩm', 'Giới thiệu', 'Liên hệ'];

  const handleItemClick = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div>
      Bt3
      <div>
        {tabs.map((tab) => (
          <button
            key={tab}
            style={{
              backgroundColor: currentPage === tab ? 'gray' : '',
              color: currentPage === tab ? 'white' : 'black',
            }}
            onClick={() => handleItemClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}