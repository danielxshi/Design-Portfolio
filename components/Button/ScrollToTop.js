import { AnimatePresence, motion, useScroll } from "framer-motion";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const { scrollYProgress } = useScroll();
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <AnimatePresence>
      <motion.div
        // style={{ rotateX: scrollYProgress }}
        animate={showTopBtn ? "showTopBtn" : "invisible"}
        initial={{ opacity: 0 }}
        variants={{
          invisible: { opacity: 0 },
          showTopBtn: { opacity: 1 },
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        exit={{ opacity: 0 }}
        className="top-to-btm"
      >
        {" "}
        {/* {showTopBtn && ( */}
        <motion.button onClick={goToTop} className="scroll-to-top">
          <p>UP</p>
        </motion.button>
        {/* )}{" "} */}
      </motion.div>
    </AnimatePresence>
  );
};
export default ScrollToTop;
