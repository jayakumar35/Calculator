import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { evaluate } from 'mathjs';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');

  const solve = (value) => {
    setInput(input + value);
  };

  const clear = () => {
    setInput('');
  };

  const backspace = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      const result = evaluate(input);
      setInput(result.toString());
    } catch (error) {
      alert('Invalid Expression');
    }
  };

  return (
    <Container className='cal-container'>
      <Row>
        <Col sm={12} md={12} lg={12}>
          <div id="Calculator">
            <div id="content">
              <span className='casio'>Casio</span>
              <form>
                <div className="output">
                  <input type="text" id="input" value={input} readOnly />
                </div>
                <div className="btn">
                  <input className="bgrup1" type="button" value="AC" onClick={clear} />
                  <input className="bgrup1" type="button" value="<-" onClick={backspace} />
                  <input className="bgrup1" type="button" value="%" onClick={() => solve('%')} />
                  <input className="bgrup2" type="button" value="/" onClick={() => solve('/')} />

                  <input className="bgrup3" type="button" value="7" onClick={() => solve('7')} />
                  <input className="bgrup3" type="button" value="8" onClick={() => solve('8')} />
                  <input className="bgrup3" type="button" value="9" onClick={() => solve('9')} />
                  <input className="bgrup2" type="button" value="x" onClick={() => solve('*')} />

                  <input className="bgrup3" type="button" value="4" onClick={() => solve('4')} />
                  <input className="bgrup3" type="button" value="5" onClick={() => solve('5')} />
                  <input className="bgrup3" type="button" value="6" onClick={() => solve('6')} />
                  <input className="bgrup2" type="button" value="-" onClick={() => solve('-')} />

                  <input className="bgrup3" type="button" value="1" onClick={() => solve('1')} />
                  <input className="bgrup3" type="button" value="2" onClick={() => solve('2')} />
                  <input className="bgrup3" type="button" value="3" onClick={() => solve('3')} />
                  <input className="bgrup2" type="button" value="+" onClick={() => solve('+')} />

                  <input id="zoro" type="button" value="0" onClick={() => solve('0')} />
                  <input className="bgrup3" type="button" value="." onClick={() => solve('.')} />
                  <input className="bgrup2" type="button" value="=" onClick={calculateResult} />
                </div>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Calculator;
