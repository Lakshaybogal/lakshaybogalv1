import React from 'react';
import '../../App.css';
import { Nav, Header, Main, About, Footer } from '../../component';
function Homepage() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Header />
      </header>
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default Homepage;
