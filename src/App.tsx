import React from 'react';
import './App.css';
import Header from './components/Header';
import QuestionList from './components/QuestionList';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <QuestionList />
    </div>
  );
}

export default App;
