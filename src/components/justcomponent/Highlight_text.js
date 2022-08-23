/*To use highlight component, first parameter takes text.
 Second parameter takes the pattern that you are looking for */

/* Do not forget to rename or create class for the text you want to highlight. */

const HighLightText = ({ text, search }) => {
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

export default HighLightText;
