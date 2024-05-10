import logo from './logo.svg';
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
  return (
    <motion.div
      initial={{ opacity: 0.5, }}
      whileHover={{ scale: 1.2, opacity: 1 }}
      style={{
        borderRadius: "50%",
        width: width,
        height: height,
        backgroundColor: bgColor,
        borderWidth: borderWidth,
        borderColor: 'white',
        borderStyle: 'solid',
        position: "absolute",
        left: left,
        top: top,
        right: right,
        bottom: bottom
      }}
    ></motion.div>
  );
};

const MyComponent = () => {
  return (
    <div style={{ position: "relative", width: '648px', height: '100vh' }}>
      <Circle bgColor="#40b26b" left="140px" top="100px" width="80px" height="80px" />
      <Circle bgColor="#F9C518" right="0" top="50px" width="200px" height="200px" />
      <Circle bgColor="#F8922B" left="150px" top="280px" width="100px" height="100px" />
      <Circle bgColor="black" right="90px" top="320px" width="50px" height="50px" borderWidth="20px" />
      <Circle bgColor="grey" right="0px" top="350px" width="30px" height="30px" borderWidth="30px" />
      <Circle bgColor="#CD5CE7" left="90px" top="450px" width="80px" height="80px" borderWidth="30px" />
      <Circle bgColor="#3AB8D1" left="250px" top="420px" width="200px" height="200px" borderWidth="30px" />
      <Circle bgColor="#5D7CF9" right="0px" top="500px" width="100px" height="100px" borderWidth="20px" />
      <Circle bgColor="#F26497" right="100px" top="650px" width="70px" height="70px" borderWidth="30px" />
      <Circle bgColor="#94D82D" left="150px" top="700px" width="200px" height="200px" borderWidth="20px" />
      <Circle bgColor="#4AA9FD" right="0px" top="750px" width="50px" height="50px" borderWidth="20px" />
      {/* Add more <Circle /> components as needed */}
    </div>
  );
};

export default App;
