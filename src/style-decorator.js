"use strict"

import React, { useEffect, useState } from "react"

export default function decorate(Terminal) {

  return {

    with: (styleFactory) => (props) => {

      const [content, setContent] = useState(props.content);

      useEffect(
        () => setContent(
                use(styleFactory).decorate(props.content)
              )
      , [props.content]);

      return React.createElement(Terminal, { ...props, content });

    }

  }
}

function use(styleFactory) {
  return {
    decorate: (content) => is('String')(content) ? styleFactory.create(content) : content,
  };
}

function is(type) {
  return (s) => Object.prototype.toString.call(s) === `[object ${type}]`
}
