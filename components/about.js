import Contact from "./contact";
import ContentfulImage from "./contentful-image";
import Image from "next/image";
import profile from "../public/favicon/profile.png";
// import resume from "../public/favicon/Daniel_Shi_Resume.pdf"

export default function about() {
  return (
    <div className="about-container mt-auto mb-0">
      <div className="about-biography">
        {/* <div className="flex about-header-wrapper">
          <ContentfulImage
            width={36}
            height={36}
            alt={`Profile image`}
            src={profile}
          />
          <p className="display-lead"> VISUAL DESIGN PORTFOLIO | 2023 </p>
        </div> */}
        <div className="about-content-wrapper">
          <p className="mt-6">
          <strong>Meet Daniel</strong>, a highly skilled <strong>multidisciplinary</strong> visual designer who has crafted over 65 websites. Committed to staying up-to-date on the latest technologies in design and development, 
          </p>
          <p className="mt-6">
          I've held notable <strong>management positions</strong> in art direction, graphic design and web design. In these roles, I led teams ranging from 5 to 10 individuals, overseeing the creation and direction of visually compelling designs. This managerial experience complements my technical expertise, contributing to a holistic skill set in both web development and team leadership.
          </p>
        </div>
      </div>
      <div className="cta-about flex">
        <div className="underscore-cta">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1gdwYVnoFCCOzyvDeLPGFNNIlgWYbCKX7/view?usp=share_link"
          >
            resume
          </a>
        </div>
        <div className="underscore-cta ml-4">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/daniel-xiang-shi/"
          >
            linkedin
          </a>
        </div>
        <span>
          <strong>selected work ↴</strong>
        </span>
      </div>
    </div>
  );
}
