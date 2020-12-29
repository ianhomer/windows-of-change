import Head from "next/head";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  title: string;
  children: any;
}

export default function Layout(props: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <main>
        <h1>{props.title}</h1>
        <div className={styles.container}>{props.children}</div>
      </main>
    </>
  );
}
