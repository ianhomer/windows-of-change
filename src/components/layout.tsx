import Head from "next/head";
import styles from "../styles/Layout.module.scss";
import Journey from "./journey";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import startCase from "lodash/startCase";
import { Asset, Lesson } from "../types/lesson";
import styled from "styled-components";

interface LayoutProps {
  assets?: (Asset | string)[];
  title?: string;
  children?: any;
  content?: string;
  notes?: string;
  lesson?: Lesson;
}

const Image = styled.img`
  position: absolute;
  left: 0;
  border: 1px solid #999;
`;

export default function Layout(props: LayoutProps): JSX.Element {
  const router = useRouter();
  const title = props.title ?? startCase(router.pathname.replace(/[/-]/g, " "));
  const content = props.content ?? props.lesson?.content;
  const notes = props.notes ?? props.lesson?.notes;
  const assets = props.assets ?? props.lesson?.assets;

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #0e253a;
          overflow: hidden;
        }
      `}</style>
      <Head>
        <title>{title}</title>
      </Head>
      <main className={styles.main}>
        <Journey />
        <h1>{title}</h1>
        <div className={styles.container}>
          {assets &&
            assets.map((asset) => {
              const url = typeof asset == "string" ? asset : asset.url;
              const width =
                typeof asset == "string" ? 300 : asset?.width ?? 300;
              return <Image width={width} src={url} />;
            })}
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
