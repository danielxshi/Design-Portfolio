import React, {
  useRef,
  useEffect,
  useCallback,
  Children,
  useState,
} from "react";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";
import PostBody from "./post-body";
import { MdClose } from "react-icons/md";
import NextButton from "./Button/NextButton";
import BackButton from "./Button/BackButton";
import { debounce } from "../util/helpers";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// import SlugContent from "../components/slug-content";

const Background = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 15;
  height: -webkit-fit-content;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  color: #fff;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 15;
  border-radius: 3px;
  overflow-y: scroll;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 15;
`;

export const InfoModal = ({ showModal, setShowModal, content }) => {
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

  const divRef = useRef(null);

  const scrollToTop = () => {
    console.log("scroll" + divRef.current.scrollTop);
    if (divRef.current.scrollTop > 0) {
      console.log("this should hide");
      setHidden(true);
    }
    divRef.current.scroll({
      top: 0,
      behavior: "smooth",
    });
  };




  // Scroll Ex 1
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(latest);
    // const previous = scrollY.getPrevious();
    const previous = divRef.current.scrollTop;
    if (latest > previous && latest > 0) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });


  // End of Ex 1

  // Adding Event Listener
//   targetElement.onscroll = (event) => {

// };
// const [scrollTop, setScrollTop] = useState(0);

// useEffect(() => {
//   const handleScroll = (event) => {
//     setScrollTop(window.scrollY);
//   };

//   window.addEventListener('scroll', handleScroll);

//   return () => {
//     window.removeEventListener('scroll', handleScroll);
//   };
// }, []);



  

  return (
    <>
    
      {showModal ? (
        <Background
          // onScroll={onScroll}
          className="flex"
          onClick={closeModal}
          ref={modalRef}
        >
          <header>
            <motion.nav
              variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
              }}
              animate={hidden ? "hidden" : "visible"}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid-container items-center"
            >
              <div className="col-span-1 col-start-1 back-button-container">
                <CloseModalButton
                  aria-label="Close modal"
                  onClick={() => setShowModal((prev) => !prev)}
                />
              </div>
              <div className="col-end-9 flex text-cta-wrapper">
                <p className="mr-3">Next</p>
                <div className="text-cta">
                  <div
                    className="w-[1em] h-[1em] rounded-full"
                    style={{ backgroundColor: "tomato" }}
                  ></div>
                  <button
                    onClick={() => {
                      this.props.onClick();
                      this.handleClick();
                    }}
                  >
                    Project Information
                  </button>

                  <button type="button" onClick={() => scrollToTop()}>
                    Scroll to Top
                  </button>
                </div>
              </div>
            </motion.nav>
          </header>

          <a.div className="slug-modal-wrapper" style={animation}>
            <ModalWrapper onScroll={console.log("ok")} ref={divRef}>
              <PostBody content={content} />
              {/* <SlugContent/> */}
            </ModalWrapper>
          </a.div>
        </Background>
      ) : null}
    </>
  );
};
