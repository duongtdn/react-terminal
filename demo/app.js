" use strict"

import React, { useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import Terminal, { decorate } from '../src';
import StyleFactory from '@duongtdn/style-factory';

const styleFactory = new StyleFactory();
styleFactory.useStyle(/Terminal/i, { color: 'red' } );

const StyleTerminal = decorate(Terminal).with(styleFactory);

const data = [
  'React Terminal',
  'This widget is used as an terminal in web application',
  'You can custom the font for the terminal via fontFamily property',
  'It can be styled by using decoration',
  'Enjoy!!!',
];

const Demo = () => {

  const [content, setContent] = useState('');
  const [interactive, setInteractive] = useState(false);
  const [font, setFont] = useState();

  const [dataPointer, setDataPointer] = useState(0);

  return (
    <div style = {{ padding: '16px'}}>
      <h2> React Terminal </h2>
      <div style = {{margin: '16px 0'}}>
        <button onClick = {addContent} style= {{margin: '0 8px'}}>Add Content</button>
        <button onClick = {() => setInteractive(interactive => !interactive)} style= {{margin: '0 8px'}}>Toggle Interative</button>
        <button onClick = {() => setFont('Courier New')} style= {{margin: '0 8px'}}>Courier New</button>
        <button onClick = {() => setFont('Consolas')} style= {{margin: '0 8px'}}>Consolas</button>
      </div>
      <div style={{ height: '200px', width: '100%', background: '#313131', color: '#fff'}}>
        <StyleTerminal
          height = '200px'
          content = {content}
          fontFamily = {font}
          interactive = {interactive}
          onPrompt = {onInteract}
        />
      </div>
    </div>
  );

  function addContent() {
    if (dataPointer < data.length) {
      setContent(content => content + data[dataPointer] + '\n');
      setDataPointer(dataPointer => dataPointer + 1);
    }
  }

  function onInteract(value) {
    setContent(content => content + `You have enter: ${value}` + '\n');
  }

}

const root = createRoot(document.getElementById('root'));
root.render(<Demo />);
