import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundImage: "url('/hua7.jpg')",
        // objectFit: "cover",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        // backgroundSize: "cover",
        // backgroundPosition: "center",
        height: "calc(100vh - 96px)",
        backgroundColor: "#ffffff"
      }}
    >
      <h1>
        前台源码地址
      </h1>
      <a href="https://github.com/changmen1" target="_blank" rel="noopener noreferrer">https://github.com/changmen1</a>
    </div>
  );
};

export default Welcome;
