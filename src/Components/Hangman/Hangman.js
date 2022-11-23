import React, {useState, useEffect} from 'react';
import Header from './Header';
import Figure from './Figure';
import WrongLetters from './WrongLetters';
import Word from './Word';
import Notification from './Notification';
import Popup from './Popup';
import {showNotification as show} from './helpers/helpers';


import './Hangman.css';

const words = ['application', 'programming', 'interface', 'wizard', 'algorithm', 'burger', 'array', 'coding', 'camel', 'java',];
let selectedWord = words[Math.floor(Math.random() * words.length)];

function Hangman() {
  const [playable, setPlayable] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode} = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();

        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
      } else {
        if (!wrongLetters.includes(letter)) {
          setWrongLetters(wrongLetters => [...wrongLetters, letter]);
        } else {
          show(setShowNotification);
        }
      }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

function playAgain() {
  setPlayable(true);

  //Empty Arrays
  setCorrectLetters([]);
  setWrongLetters([]);

  const random = Math.floor(Math.random() * words.length);
  selectedWord = words[random];
}

  return (
    <>
    <Header/>
    <div className="game-container">
      <Figure wrongLetters={wrongLetters} />
      <WrongLetters wrongLetters={wrongLetters} />
      <Word selectedWord={selectedWord} correctLetters={correctLetters} />
    </div>
    <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain} />
    <Notification showNotification={showNotification} />
    </>
  );
}
export default Hangman;