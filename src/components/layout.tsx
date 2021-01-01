import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import Journey from "./journey";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import startCase from "lodash/startCase";
import { Lesson } from "../types/lesson";

interface LayoutProps {
  title?: string;
  children?: any;
  content?: string;
  notes?: string;
  lesson?: Lesson;
}

export default function Layout(props: LayoutProps): JSX.Element {
  const router = useRouter();
  const title = props.title ?? startCase(router.pathname.replace(/[/-]/g, " "));
  const content = props.content ?? props.lesson?.content;
  const notes = props.notes ?? props.lesson?.notes;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Journey />
        <h1>{title}</h1>
        <div className={styles.container}>
          {content && <ReactMarkdown children={content} />}
          {props.children && <>{props.children}</>}
          {notes && (
            <div className={styles.notes}>
              <ReactMarkdown children={notes} />
            </div>
          )}
        </div>
      </main>
    </>
  );
}
