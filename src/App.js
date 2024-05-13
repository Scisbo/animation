import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './App.css';

function App() {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}



const Circle = ({ bgColor, left = 'none', top = 'none', width, height, right = 'none', bottom = 'none', borderWidth = '50px' }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let customWidth = windowWidth > 768 ? width : `${parseInt(width) / 1.2}px`;
  let customHeight = windowWidth > 768 ? height : `${parseInt(height) / 1.2}px`;
  const customLeft = windowWidth > 768 ? left : `${parseInt(left) - 70}px`;
  const customBorder = windowWidth > 420 ? borderWidth : `${0}px`;
  let customDisplay = 'block';


  if (customLeft === 'NaNpx') {
    customDisplay = 'none';
  }

  return (
    <motion.div
      initial={{ opacity: 0.5, }}
      whileHover={{ scale: 1.2, opacity: 1 }}
      whileTap={{ scale: 1.2, opacity: 1 }}
      style={{
        borderRadius: "50%",
        width: customWidth,
        height: customHeight,
        backgroundColor: bgColor,
        borderWidth: customBorder,
        borderColor: 'white',
        borderStyle: 'solid',
        position: "absolute",
        left: customLeft,
        top: top,
        right: right,
        bottom: bottom,
        display: customDisplay
      }}
    ></motion.div>
  );
};

const MyComponent = () => {
  return (
    <div style={{ position: "relative", maxWidth: '648px', height: '100vh' }}>
      <Circle bgColor="#40b26b" left="140px" top="100px" width="80px" height="80px" />
      <Circle bgColor="#F9C518" left="calc(100% - 200px)" top="50px" width="200px" height="200px" />
      <Circle bgColor="#F8922B" left="150px" top="280px" width="100px" height="100px" />
      <Circle bgColor="black" left="calc(100% - 140px)" top="320px" width="50px" height="50px" borderWidth="20px" />
      <Circle bgColor="grey" left="calc(100% - 30px)" top="350px" width="30px" height="30px" borderWidth="30px" />
      <Circle bgColor="#CD5CE7" left="90px" top="450px" width="80px" height="80px" borderWidth="30px" />
      <Circle bgColor="#3AB8D1" left="250px" top="420px" width="200px" height="200px" borderWidth="30px" />
      <Circle bgColor="#5D7CF9" left="calc(100% - 100px)" top="500px" width="100px" height="100px" borderWidth="20px" />
      <Circle bgColor="#F26497" left="calc(100% - 170px)" top="650px" width="70px" height="70px" borderWidth="30px" />
      <Circle bgColor="#94D82D" left="150px" top="700px" width="200px" height="200px" borderWidth="20px" />
      <Circle bgColor="#4AA9FD" left="calc(100% - 50px)" top="750px" width="50px" height="50px" borderWidth="20px" />
      {/* Add more <Circle /> components as needed */}
    </div>
  );
};

export default App;
