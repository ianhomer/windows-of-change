import Layout from "../components/layout";
import lesson from "../lessons/cloudy-future";

export default function Page() {
  return (
    <Layout
      lesson={lesson}
      background="https://live.staticflickr.com/65535/50795410783_9ca36ea4f5_k.jpg"
    />
  );
}
