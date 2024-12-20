import React, { useState } from "react";

const InfiniteScroll = () => {
  const initialItems = ["1", "2", "3", "4", "5"];
  const [isLoading, setIsLoading] = useState(false);

  // State to hold the list items
  const [items, setItems] = useState(initialItems);

  const generateMoreData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newItems = [
        Math.random() * 101,
        Math.random() * 101,
        Math.random() * 101,
        Math.random() * 101,
        Math.random() * 101,
      ];
      setItems((prev) => [...prev, ...newItems]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="p-10 m-10 border border-black">
            {item}
          </li>
        ))}
      </ul>
      {isLoading && <p>Generating data . ...</p>}
      <button onClick={generateMoreData}>Load More</button>
    </div>
  );
};

export default InfiniteScroll;
