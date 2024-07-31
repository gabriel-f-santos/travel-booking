'use client';
import React from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
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
      <div className="h-full w-2/3 mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 transition-all">
          <h1
            className={`${
              isScrolled ? 'text-blue-600' : 'text-[#cec7c7] text-2xl font-bold'
            }`}
          >
            Travel App
          </h1>
          <AiOutlineHome
            size={25}
            color={isScrolled ? 'rgd(37 99 235)' : '#cec7c7'}
          />
        </Link>
        <div>
          <div className="cursor-pointer" onClick={toggleModal}>
            <AiOutlineUser
              size={25}
              color={isScrolled ? 'rgd(37 99 235)' : '#cec7c7'}
            />
          </div>
          {showModal && (
            <div
              onClick={toggleModal}
              className="absolute top-16 right-[270px] shadow-md flex flex-col gap-4 p-4 bg-white rounded-xl"
            >
              <Link href="/reservations" className="text-lg">
                Reservations
              </Link>
              <buttion onClick={() => signOut()} className="text-slate-500 text-center">
                Signup
              </buttion>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
