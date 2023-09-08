# React Terminal - @duongtdn/react-terminal

A customizable and interactive React terminal component for your web applications. It  adds a terminal-like interface, enabling interactive commands and rich text formatting in your projects.

## Installation

```bash
npm install @duongtdn/react-terminal --save
```

## Basic Usage

1. Import the `Terminal` component and other necessary dependencies:

```javascript
import Terminal, { decorate } from '@duongtdn/react-terminal';
```

2. Decorate the `Terminal` component with `StyleFactory`:

```javascript
import StyleFactory from '@duongtdn/style-factory';
const StyleTerminal = decorate(Terminal).with(new StyleFactory());
```

## Example

Here's a basic example of how to use:

```javascript
import React, { useState } from 'react';
import Terminal, { decorate } from '@duongtdn/react-terminal';
import StyleFactory from '@duongtdn/style-factory';

const styleFactory = new StyleFactory();
styleFactory.useStyle(/Terminal/i, { color: 'red' } );

const StyleTerminal = decorate(Terminal).with(styleFactory);

const Demo = () => {
  const [content, setContent] = useState('');

  const onPrompt = (msg) => setContent(content => content + msg + '\n');

  return (
    <div>
      <div style={{ height: '200px', width: '100%', background: '#313131', color: '#fff' }}>
        <StyleTerminal
          height="200px"
          content={content}
          fontFamily="Consolas"
          interactive={true}
          onPrompt={onPrompt}
        />
      </div>
    </div>
  );
}
```

## Contributing

Contributions are welcome! If you have ideas, suggestions, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).