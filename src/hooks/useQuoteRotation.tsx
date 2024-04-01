"use client";

import { TestimonialPropType } from "@/components/testimonials";
import { useEffect, useState } from "react";

/**
 *
 * Rotates the quotes every 10 seconds
 * @param data
 * @returns
 */
const useRotatingQuotes = (data: TestimonialPropType) => {
  const { quotes } = data;
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // updates the quotes every 10 secondsn
  const tenSeconds = 10 * 1000;

  useEffect(
    () => {
      const intervalId = setInterval(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
      }, tenSeconds);

      return () => clearInterval(intervalId);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [quotes]
  );

  if (!quotes) return null;

  const currentQuote = quotes[currentQuoteIndex];

  return currentQuote;
};

export default useRotatingQuotes;
