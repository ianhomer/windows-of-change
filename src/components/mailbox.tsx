export default function Mailbox(): JSX.Element {
  const messages = [{ title: "Important", from: "CI", when: "10 mins ago" }];
  return (
    <div>
      <div>15 emails</div>
      {messages.map((message) => (
        <div>
          <span>{message.title}</span>
          {message.from} - {message.when}
        </div>
      ))}
    </div>
  );
}
