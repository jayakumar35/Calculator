import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };
  const Clear = () => {
    setInput('');
    setResult('');
  };
  const Calculate = () => {
    try {
      // Create a new function to evaluate the mathematical expression
      const result = new Function('return ' + input)();
      setResult(result);
    } catch (error) {
      setResult('Error');
    }
  };
  document.addEventListener('keydown', function (evant) {
    const key = evant.key;
    const validkeys = '0123456789/*-+.%';
    if (validkeys.includes(key)) {
      handleClick(key === '*' ? 'x' : key);
    }
    else if (key === 'Enter') {
      Calculate();
    }
    else if (key === 'Backspace') {
      Clear();
    }
  }
  )

  return (
    <Container>
      <Row>
        <Col>
          <div className="calculator">
            <h1>React Calculator</h1>
            <div className="display">
              <input type="text" value={input} readOnly />
              <div className="result">{result}</div>
            </div>
            <div className="keypad">
              <button className='btn1' onClick={Clear}>AC</button>
              <button className='btn1' onClick={() => handleClick('+/-')}>+/-</button>
              <button className='btn1' onClick={() => handleClick('%')}>%</button>
              <button className='btn2' onClick={() => handleClick('/')}>/</button>
              <button className='btn3' onClick={() => handleClick('7')}>7</button>
              <button className='btn3' onClick={() => handleClick('8')}>8</button>
              <button className='btn3' onClick={() => handleClick('9')}>9</button>
              <button className='btn2' onClick={() => handleClick('*')}>x</button>
              <button className='btn3' onClick={() => handleClick('4')}>4</button>
              <button className='btn3' onClick={() => handleClick('5')}>5</button>
              <button className='btn3' onClick={() => handleClick('6')}>6</button>
              <button className='btn2' onClick={() => handleClick('-')}>-</button>
              <button className='btn3' onClick={() => handleClick('1')}>1</button>
              <button className='btn3' onClick={() => handleClick('2')}>2</button>
              <button className='btn3' onClick={() => handleClick('3')}>3</button>
              <button className='btn2' onClick={() => handleClick('+')}>+</button>
              <button id='zoro' onClick={() => handleClick('0')}>0</button>
              <button className='btn3' onClick={() => handleClick('.')}>.</button>
              <button className='btn2' onClick={Calculate}>=</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

  );
}

export default App;
