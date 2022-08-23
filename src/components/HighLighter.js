import React, { useState } from 'react';

import InputComponent from './input';

import logo from '../assets/logo.svg';
import './yellow.css';

const HightLightText = ({ text, search }) => {
  const patternFinder = (text, search) => {
    const splittedByLetters = text.split('');
    const splittedLetterToLowerCase = text.toLowerCase().split('');

    let indexPositions = [];
    let found = true;
    //pattern control starts.
    for (let i = 0; i < splittedLetterToLowerCase.length; i++) {
      found = true;
      for (let j = 0; j < search.length; j++) {
        if (splittedLetterToLowerCase[i + j] !== search[j]) {
          found = false;
          break;
        }
      }
      if (found) {
        for (let x = 0; x < search.length; x++) {
          indexPositions.push(i + x);
        }
      }
    }
    //pattern  control ends.

    let createNewText = '';
    for (let i = 0; i < splittedByLetters.length; i++) {
      indexPositions.includes(i)
        ? (createNewText += `<span class='yellow'>${splittedByLetters[i]}</span>`)
        : (createNewText += `${splittedByLetters[i]}`);
    }
    console.log(createNewText);
    return createNewText;
  };

  return <div dangerouslySetInnerHTML={{ __html: patternFinder(text, search) }}></div>;
};

const DisplayContent = () => {
  const [search, setSearch] = useState('');
  const text = `Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 
  'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
  have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
  `;
  return (
    <>
      <div className="content">
        <img className="logo" alt="hub.studio" src={logo}></img>
        <InputComponent
          className="searchbox"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <HightLightText text={text} search={search.toLowerCase()} />
      </div>
    </>
  );
};
export default DisplayContent;
