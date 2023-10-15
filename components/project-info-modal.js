import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";
// import { MdClose } from 'react-icons/md';
// import GIT from '../images/icons/github-logo.svg';
// import IG from '../images/icons/instagram.svg';
// import LinkedIn from '../images/icons/linkedin.svg';

const Background = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
`;

const ModalWrapper = styled.div`
  width: 80vw;
  height: 90vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #000;
  color: #fff;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 15;
  border-radius: 3px;
`;

const ModalContent = styled.div`
  overflowY: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  width: 100%;
  height: 100%;

  p {
    margin-bottom: 1rem;
  }

  h1{
      margin: auto;
      position: absolute;
      
  }

  button {
    padding: 10px 24px;
    background: #000;
    color: #fff;
    border: none;
  }
  ul li a{
    margin: 0 .5rem;
  }
  h1{
    a{
      color: black;
    }
    a:hover{
      color: black;
    }
  }
  a {

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }
  a:after{
    transition: 0.25s ease-in-out;       
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #4d9735;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after{
    width: 100%; 
    left: 0; 
  }


  .social-media-wrapper{
    margin: auto;
    margin-bottom: 0;
    p {
      text-align: center;
      letter-spacing: 2.5px;
      user-select: none; 
    }
  }

  ul{
    margin: auto;
    margin-bottom: 3rem;
`;

// const CloseModalButton = styled(MdClose)`
//   cursor: pointer;
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   width: 32px;
//   height: 32px;
//   padding: 0;
//   z-index: 15;
// `;

export const ContactModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },

    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <a.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalContent>
                <h1 className="modal-address">
                  <a
                    className="secondary-cta"
                    href="mailto:danielxshi@hotmail.com"
                  >
                    danielxshi@hotmail.com
                  </a>
                </h1>
                <div className="social-media-wrapper"></div>
                {/* <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                /> */}
              </ModalContent>
            </ModalWrapper>
          </a.div>
        </Background>
      ) : null}
    </>
  );
};
