'use client';
import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { fetchValidNames }  from './lib/data';

export default function Home() {
  const [entry, setEntry] = useState('');
  const [inputColor, setInputColor] = useState('black');
  const [names, setNames] = useState<string[]>([]);
  const [paragraphText, setParagraphText] = useState('I am the best developer.');

  useEffect(() => {
    const loadNames = async () => {
       try {
         const fetchedNames = await fetchValidNames();
         setNames(fetchedNames);
       } catch (error) {
         console.error('Error loading names:', error);
         // Optionally, update the UI to reflect the error
         setParagraphText('Error loading names, please try again later.');
       }
      const fetchedNames = await fetchValidNames();
    };
  
    loadNames();
  }, []);

  const handleChange = (event) => {
    setEntry(event.target.value);
    setInputColor('#283618'); // Change color to blue when typing
  };

  const handleKeyDown = (event) => {
    let isValid = false;
    if (event.key === 'Enter') {
      names.forEach((name) => {
        if(entry === name){
          isValid = true;
          if(name === "Satsuki Shiga"){
            setParagraphText(`${name} is not a developer but a WONDERFUL WIFE.`);
          }else{
            setParagraphText(`${name} is one of the greatest developers.`);
          }
        }
      });
      if (!isValid){
        setParagraphText(`Dude who is ${entry}?`);
      }
    }
  };

  return (
    <main className="h-screen flex items-center justify-center bg-color1">
      <div className="grid grid-cols-1 grid-rows-3 gap-0">
        <p className="m-0" id="paragraph">{paragraphText}</p>
        <p className='m-0'>But... Who else is the best developer?</p>
        <TextField
          id="best-developer"
          label="Who?"
          variant="standard"
          value={entry}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          inputProps={{ style: { color: inputColor } }}
        />
      </div>
    </main>
  );
};
