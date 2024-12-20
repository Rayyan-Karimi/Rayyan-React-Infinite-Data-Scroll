import React, { useState, useEffect, useRef } from "react";

const InfiniteScroll = () => {
  const initialItems = ["1", "2", "3", "4", "5"];
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState(initialItems);

  const generateMoreData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newItems = [
        (Math.random() * 101).toFixed(2),
        (Math.random() * 101).toFixed(2),
        (Math.random() * 101).toFixed(2),
        (Math.random() * 101).toFixed(2),
        (Math.random() * 101).toFixed(2),
      ];
      setItems((prev) => [...prev, ...newItems]);
      setIsLoading(false);
    }, 1000);
  };

  const myRef = useRef(null);
  useEffect(() => {
    const currentRef = myRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const myEntry = entries[0];
        if (myEntry.isIntersecting && !isLoading) {
          generateMoreData();
          // Custom sentinel bg.
        }
      },
      { threshold: 1.0 }
    );
    if (currentRef) observer.observe(currentRef);
    return () => currentRef && observer.unobserve(currentRef);
  }, [isLoading]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="px-10 py-6 m-8 border border-black rounded-2xl"
          >
            {item}
          </li>
        ))}
      </ul>
      {isLoading && <p>Generating data ...</p>}
      <div ref={myRef} className="h-5"></div>
    </div>
  );
};

export default InfiniteScroll;
