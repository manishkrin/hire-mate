"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './main';
import Footer from './footer';
import Header from './header';

export default function Home() {
  return (
    <>
      {/* header */}
      <Header />
      {/* Main Content Area */}
      <Main />
      {/* Footer */}
      <Footer />
    </>
  );
}