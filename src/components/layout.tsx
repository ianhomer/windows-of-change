import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import Journey from "./journey";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import startCase from "lodash/startCase";

interface LayoutProps {
  title?: string;
  children?: any;
  content?: string;
  notes?: string;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const router = useRouter();
  const title = props.title ?? startCase(router.pathname.replace(/[/-]/g, " "));

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
          {props.notes && (
            <div className={styles.notes}>
              <ReactMarkdown children={props.notes} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
