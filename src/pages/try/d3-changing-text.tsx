import Layout from "../../components/layout";
import ChangingText from "../../components/changing-text";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("test");

  return (
    <Layout>
      <ChangingText>{text}</ChangingText>
      <input
        type="input"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
    </Layout>
  );
}
