import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Journey from "./journey";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import startCase from "lodash/startCase";

interface LayoutProps {
  title?: string;
  children?: any;
  content?: string;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const router = useRouter();
  const title =
    props.title ?? startCase(router.pathname.replace(/[\/-]/g, " "));

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Journey />
        <h1>{title}</h1>
        <div className={styles.container}>
          {props.content && <ReactMarkdown children={props.content} />}
          {props.children && <>{props.children}</>}
        </div>
      </main>
    </>
  );
}
