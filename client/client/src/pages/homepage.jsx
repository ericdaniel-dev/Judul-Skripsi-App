import React from 'react';
import Introduction from '../../component/introduction.jsx';
import Daftarjudul from '../../component/daftarjudul.jsx';

function HomePage() {
  return (
    <>
      <section id="introductionBoxes" className="w-full h-auto">
        <Introduction />
      </section>
      <section id="daftarjudulBoxes" className="h-auto">
        <Daftarjudul />
      </section>
    </>
  );
}

export default HomePage;
