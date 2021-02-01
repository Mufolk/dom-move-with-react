import {useState} from 'react';
import './App.css';

const App = () => {

  const [offsetTop, setOffsetTop] = useState(300);

  const moveBoxUp = () => {
    setOffsetTop(offsetTop - 50);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveBoxUp}>👆 Move Up 👆</button>

      {/* move this box using inline styles */}
      <div 
        className="box" 
        style={{
          transform: `translateY(${offsetTop}px)`
        }} 
      />
    </div>
  );
}

export default App;
