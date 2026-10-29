"use client";

import { useState } from "react";
import { divisions } from "../divisions-data";

export function useActiveDivision() {
  const [activeDivisionIndex, setActiveDivisionIndex] = useState(0);

  return {
    activeDivision: divisions[activeDivisionIndex],
    activeDivisionIndex,
    setActiveDivisionIndex,
  };
}
