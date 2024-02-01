"use strict"

import { useRef } from "react"

class TerminalHandler {

  bindHandler = (handler) => {
    for (const [key, value] of Object.entries(handler)) {
      this[key] = value
    }
  }

}

export default function useTerminal() {
  const terminalRef = useRef(new TerminalHandler());
  return terminalRef.current;
}
