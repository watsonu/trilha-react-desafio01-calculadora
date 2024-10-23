import React from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  // Função para limpar a calculadora
  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  // Função para adicionar um número ou ponto decimal
  const handleAddNumber = (num) => {
    if (num === '.' && currentNumber.includes('.')) return; // Evitar múltiplos pontos decimais
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  // Função para somar números
  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  };

  // Função para subtrair números
  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const difference = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(difference));
      setFirstNumber('0');
      setOperation('');
    }
  };

  // Função para multiplicar números
  const handleMultiplyNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('*');
    } else {
      const product = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(product));
      setFirstNumber('0');
      setOperation('');
    }
  };

  // Função para dividir números
  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const quotient = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(quotient));
      setFirstNumber('0');
      setOperation('');
    }
  };

  // Função para calcular o resultado da operação
  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          setCurrentNumber(String(Number(firstNumber) + Number(currentNumber)));
          setOperation('');
          break;
        case '-':
          setCurrentNumber(String(Number(firstNumber) - Number(currentNumber)));
          setOperation('');
          break;
        case '*':
          setCurrentNumber(String(Number(firstNumber) * Number(currentNumber)));
          setOperation('');
          break;
        case '/':
          setCurrentNumber(String(Number(firstNumber) / Number(currentNumber)));
          setOperation('');
          break;
        default:
          break;
      }
      setFirstNumber('0');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="c" onClick={handleOnClear} />
          <Button label="." onClick={() => handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
