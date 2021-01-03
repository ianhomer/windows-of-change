import Layout from "../components/layout";
import Quote from "../components/quote";
import lesson from "../lessons/happiness";
import { useEffect, useState } from "react";
import { transition } from "../utils/journeyish";

const positions = [
  {
    quote: <Quote who="John von Neumann">Chess is not a game.</Quote>,
  },
  {
    quote: (
      <Quote who="John von Neumann - profilic physicist, mathematician and economist">
        ~Chess is not a game.~ Chess is a well-defined form of computation. You
        may not be able to work out the answers, but in theory there must be a
        solution, a right procedure in any position.
      </Quote>
    ),
  },
  {
    quote: (
      <Quote who="John von Neumann - profilic physicist, mathematician and economist">
        ~Chess is not a game. Chess is a well-defined form of computation. You
        may not be able to work out the answers, but in theory there must be a
        solution, a right procedure in any position.~ Now, real games are not
        like that at all. Real life is not like that.
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
