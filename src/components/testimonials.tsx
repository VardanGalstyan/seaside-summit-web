"use client";

import useRotatingQuotes from "@/hooks/useQuoteRotation";
import { BlockType } from "../lib/types";

interface TestimonialType {
  id: number;
  quote: string;
  source: string;
}

export interface TestimonialPropType extends BlockType {
  quotes: TestimonialType[];
}

const Testimonials = ({ data }: { data: TestimonialPropType }) => {
  const currentQuote = useRotatingQuotes(data);

  return (
    <section className="p-5">
      <div className="max-w-screen-2xl mx-auto flex justify-center items-center min-h-96 h-full">
        <div className="flex flex-col gap-4 items-center text-center max-w-7xl">
          <div className="font-bold text-xl sm:text-3xl lg:text-4xl">
            {currentQuote.quote}
          </div>
          <div className="text-md font-semibold text-darkGray">
            {currentQuote.source}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
