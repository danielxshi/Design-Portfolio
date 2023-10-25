import React, { useRef, useEffect, useCallback, useState } from "react";
import useEventListener from "@use-it/event-listener";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 15;
`;
export const SlugNav = ({ showModal, setShowModal, content, morePosts }) => {
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

  keyPress = useCallback(
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

  const [pos, setPos] = useState(0);
  const [element, setElement] = useState(null);
  const [hidden, setHidden] = useState(false);
  useEventListener("scroll", (ev) => setPos(ev.target.scrollTop), element);

  useEffect(() => {
    console.log(pos + "test");

    if (pos > 0) {
      setHidden(true);
    }
    if (pos <= 1) {
      console.log("yo");
      setHidden(false);
    }
  });

  return (
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
        {/* <div className="col-span-1 col-start-1 back-button-container">
          <CloseModalButton
            aria-label="Close modal"
            onClick={() => setShowModal((prev) => !prev)}
          />
        </div> */}

        {/* {morePosts && morePosts.length > 0 && <NextButton posts={morePosts} />} */}
      </motion.nav>
    </header>
  );
};

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getPostAndMorePosts(params.slug, preview);

//   return {
//     props: {
//       preview,
//       post: data?.post ?? null,
//       morePosts: data?.morePosts ?? null,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllPostsWithSlug();
//   return {
//     paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
//     fallback: true,
//   };
// }
