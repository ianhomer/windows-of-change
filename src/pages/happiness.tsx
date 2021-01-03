import Layout from "../components/layout";
import Quote from "../components/quote";
import lesson from "../lessons/happiness";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = [
  {
    quote: (
      <Quote who="Mahatma Gandhi">
        Happiness is when what you think, what you say, and what you do are in
        harmony.
      </Quote>
    ),
  },
  {
    quote: (
      <Quote who="Joe Wicks">
        Don't look too far into the future, just look at tomorrow. One day at a
        time
      </Quote>
    ),
  },
];

export default function Page() {
  const [position, setPosition] = useState(0);
  const [quote, setQuote] = useState(positions[0].quote);

  useEffect(() => {
    setQuote(positions[position].quote);
  }, [position]);

  return (
    <Layout
      notes={lesson.notes}
      transition={transition(positions.length, setPosition)}
    >
      {quote}
    </Layout>
  );
}
