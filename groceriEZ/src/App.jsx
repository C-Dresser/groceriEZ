import { useState } from 'react';
import Header from './components/header';
import Nav from './components/Nav';
import Footer from './components/footer';


function App() {
  return (
    
    <>
      <Header />
      <Nav />
      <main>
        <useState/>
      </main>
      <Footer />
    </>
  );
}

export default App;