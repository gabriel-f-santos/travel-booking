'use client';
import React from 'react';

export default function NavBar() {
  const [showModal, setShowModal] = React.useState(false);
  const [isScrolled, setisScrolled] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  React.useEffect(() => {
    window.onscroll = () => {
      setisScrolled(window.pageYOffset === 0 ? false : true);
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div
      className={`fixed z-20 h-16 w-full top-0 left-0 ${
        isScrolled ? 'shadow-md backdrop-blur' : ''
      }`}
    >
      <h1>Nav bar</h1>
    </div>
  );
}
