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

  const observerRef = useRef(null);
  useEffect(() => {
    // Create an intersection observer instance
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]; // Get the first (and only) entry
        if (entry.isIntersecting && !isLoading) {
          generateMoreData(); // If it's in view, and we're not already loading data, load more
        }
      },
      { threshold: 1.0 }
    );

    // Start observing the sentinel element
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [isLoading]); // Runs again if `isLoading` changes

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
      <div
        ref={observerRef}
        className="h-5 bg-black border border-purple-700"
      ></div>
    </div>
  );
};

export default InfiniteScroll;
