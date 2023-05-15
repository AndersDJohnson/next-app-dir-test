"use client";

import { useCallback } from "react";

export default function Button() {
  const handleClick = useCallback(() => {
    alert("Thanks!");
  }, []);

  return <button onClick={handleClick}>Click me!</button>;
}
