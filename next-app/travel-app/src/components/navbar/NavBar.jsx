"use client";
import React from 'react'

export default function NavBar() {
  const [showModal, setShowModal] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  }
  
  React.useEffect(() => {
    window.onscroll = () => {
      setIsScrolling(window.pageYOffset === 0 ? false : true);
    }

    return () => {
      window.onscroll = null;
    }

  }, []);

  return (
    <div>NavBar</div>
  )
}
