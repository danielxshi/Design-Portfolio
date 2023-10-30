import Intro from "./intro";
import About from "./about";
import bg from "../public/favicon/portfolio-bg-v2.png";
import ContentfulImage from "./contentful-image";

const styling = {
  width: "100%",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: "-1",
  height: "100vh",
  padding: "0"
};

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="grid-container " style={styling}>
        <div className="col-start-5 landing-bg  " style={styling}>
          {/* <ContentfulImage
            src={bg}
            layout="cover"
            // fill={true}
            alt={"bg"}

          /> */}
        </div>
        <div className="landing-bg-gradient" style={styling}></div>
      </div>
      <Intro />
      <About />
    </div>
  );
}
