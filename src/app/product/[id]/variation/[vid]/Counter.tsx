"use client";

import { state } from "@/app/state";
import { useState } from "react";

export const Counter = () => {
  const [, forceUpdate] = useState(0);

  return (
    <button
      onClick={() => {
        state.a++;
        forceUpdate((s) => s + 1);
      }}
    >
      count ({state.a})
    </button>
  );
};
