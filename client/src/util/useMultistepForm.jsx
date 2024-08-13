import { useState } from "react";

<<<<<<< HEAD
export function useMultistepForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
=======
export function useMultistepForm(steps, validateStep) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function next() {
    if (validateStep && !validateStep(currentStepIndex)) {
      return;
    }
>>>>>>> cf0b6974242fddcb6d4d2994ac061ada0203344a
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  }

  function back() {
    setCurrentStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  };
}
