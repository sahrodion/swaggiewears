import Navbar from '../components/Navbar';
// import { Head } from 'next/head';
import Footer from './Footer';

export default function Layout({children}){
  return (
    <div className="">
      {/* <Head>
        <title>Swaggie Wears</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/favicon/site.webmanifest" />
      </Head> */}
      <header>
        <Navbar />
      </header>
      <main className="">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}