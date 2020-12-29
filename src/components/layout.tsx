import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Journey from "./journey";
import ReactMarkdown from "react-markdown";

interface LayoutProps {
  title: string;
  children?: any;
  content?: string;
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>
        <Journey />
        <h1>{props.title}</h1>
        <div className={styles.container}>
          {props.content && <ReactMarkdown children={props.content} />}
          {props.children && <>{props.children}</>}
        </div>
      </main>
    </>
  );
}
