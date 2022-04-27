import Head from 'next/head';
import {Footer} from '../Organisms/Footer';
import {DirHeader} from '../Organisms/DirHeader';

export default function DirLayout({children, title, description}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DirHeader />
      <main className="w-screen px-4">{children}</main>
      <Footer />
    </>
  );
}
