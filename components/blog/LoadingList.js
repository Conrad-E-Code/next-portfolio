"use client";
import React, { useState, useEffect } from 'react';
import './LoadingList.css'; // Import your CSS file
import TypingEffect from './TypingEffect';

const LoadingList = ({ items, waitTimer }) => {
  const [loadedItems, setLoadedItems] = useState(0);

  useEffect(() => {
    setLoadedItems(prevLoadedItems => prevLoadedItems + 1)
    const interval = setInterval(() => {
      setLoadedItems(prevLoadedItems => prevLoadedItems + 1);
    }, waitTimer); // Adjust the delay as needed

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="loading-list">
      {items.slice(0, loadedItems).map((item, index) => (
        <div key={index} className="loading-list-item">
      {item}
        </div>
      ))}
    </div>
  );
};

export default LoadingList;
