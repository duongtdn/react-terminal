"use strict"

import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import ScrollBox from '@duongtdn/react-scrollbox';

const Input = styled.input.attrs({ type: 'text'})`
  border: none;
  background: none;
  outline: none;
  padding: 0;
  flex: 1;
  color: inherit;
  font-family: inherit;
  font-size: inherit;
`;

const KEY = { Enter: 13 };

export default function({ content, height, whiteSpace = 'pre-wrap', fontFamily = 'Consolas', interactive = false, onPrompt }) {

  const [promptValue, setPromptValue] = useState('');

  const scrollHandler = useRef();

  useEffect(() => {
    scrollHandler.current && scrollHandler.current.scrollToBottom();
  }, [content]);

  const promptRef = useRef();

  return (
    <div style = {{padding: '0', height }} >
      <div style = {{display: 'flex', flexDirection: 'row', height: '100%'}}>
        <div style = {{padding: '8px 6px 8px 16px', height: '100%', flex: 1}}>
          <div style = {{ display: 'flex', flexDirection: 'column', height: '100%', fontFamily: fontFamily}} >
            <ScrollBox  onClick = {e => promptRef.current && promptRef.current.focus()}
                        onMounted = {h => scrollHandler.current = h}
            >
              <div onClick={ e => e.stopPropagation()}>
                {
                  content.map(
                    ({text, style}, index) => (
                      <span style={{ whiteSpace: whiteSpace, ...style}} key = {index}>{text}</span>
                    )
                  )
                }
                {
                  interactive?
                    <div style = {{display: 'inline'}} onClick={ e => e.stopPropagation()}>
                      <Input  ref = {promptRef}
                              value = {promptValue}
                              onChange = {handlePromptChange}
                              onKeyUp = {handlePromptKeyUp}
                      />
                    </div>
                  :null
                }
              </div>

            </ScrollBox>
          </div>
        </div>
      </div>
    </div>
  );

  function handlePromptChange(e) {
    setPromptValue(e.target.value);
  }

  function handlePromptKeyUp(e) {
    const key = e.keyCode || e.which;
    if (key === KEY.Enter) {
      onPrompt && onPrompt(promptValue);
      setPromptValue('');
    }
  }

}
