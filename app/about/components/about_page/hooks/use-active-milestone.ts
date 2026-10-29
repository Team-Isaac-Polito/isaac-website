"use client";

import { useState } from "react";

export function useActiveMilestone() {
  const [activeMilestoneIndex, setActiveMilestoneIndex] = useState(0);

  return { activeMilestoneIndex, setActiveMilestoneIndex };
}
