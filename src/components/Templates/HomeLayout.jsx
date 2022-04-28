import Head from 'next/head';
import {Footer} from '../Organisms/Footer';
import {Header} from '../Organisms/Header';

export default function HomeLayout({children, title, description}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Header />
      <main className="w-screen max-w-screen-2xl px-4 mx-auto">{children}</main>
      <Footer />
    </>
  );
}
