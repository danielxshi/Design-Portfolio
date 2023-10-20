import React, {
  useRef,
  useEffect,
  useCallback,
  Children,
  useState,
} from "react";
import ReactDom from "react-dom";
import useEventListener from "@use-it/event-listener";
import { useSpring, animated as a } from "react-spring";
import styled from "styled-components";
import PostBody from "./post-body";
import { MdClose } from "react-icons/md";
import NextButton from "./Button/NextButton";
import BackButton from "./Button/BackButton";
import { debounce } from "../util/helpers";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";

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

export const InfoModal = ({ showModal, setShowModal, content, morePosts }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(100%)`,
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

  // Scroll Ex 1
  const [hidden, setHidden] = useState(false);

  const [pos, setPos] = useState(0);

  const [element, setElement] = useState(null);
  useEventListener("scroll", (ev) => setPos(ev.target.scrollTop), element);

  useEffect(() => {
    console.log(pos + "test");
    // var posTest = 0;
    if (pos > 0) {
      // console.log((ev) => setPos(ev.target.scrollTop) + "this should hide");
      setHidden(true);
    }
    if (pos <= 1) {
      console.log("yo");
      setHidden(false);
    }
    // if (posTest < pos) {
    //   setHidden(false);
    // }
    // posTest = pos;
  });

  return (
    <>
      <AnimatePresence>
        {showModal ? (
          <motion.div
            ref={modalRef}
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <Background
              // onScroll={onScroll}
              className="flex"
              // onClick={closeModal}
              // ref={modalRef}
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
                  {/* <NextButton posts={morePosts.morePosts}/> */}

                  {morePosts && morePosts.length > 0 && (
                    <NextButton posts={morePosts} />
                  )}
                </motion.nav>
              </header>

              <a.div
                // variants={{
                //   visible: { y: 0 },
                //   hidden: { y: "-100%" },
                // }}
                // animate={hidden ? "hidden" : "visible"}
                // transition={{ duration: 0.35, ease: "easeInOut" }}

                className="slug-modal-wrapper"
                style={animation}
              >
                <ModalWrapper ref={(el) => setElement(el)}>
                  <motion.div
                    className="slug-animate-container mt-5 grid-container"
                    animate={hidden ? "hidden" : "visible"}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    variants={{
                      visible: { scale: 0.95 },
                      hidden: { scale: 1 },
                    }}
                  >
                    <PostBody content={content} />
                  </motion.div>
                </ModalWrapper>
              </a.div>
            </Background>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export async function getStaticProps({ params, preview = false }) {
  const data = await getPostAndMorePosts(params.slug, preview);

  return {
    props: {
      preview,
      post: data?.post ?? null,
      morePosts: data?.morePosts ?? null,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();
  return {
    paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
    fallback: true,
  };
}
