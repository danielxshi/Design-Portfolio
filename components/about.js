import Contact from "./contact";
import ContentfulImage from "./contentful-image";
import Image from "next/image";
import profile from "../public/favicon/profile.png";
// import resume from "../public/favicon/Daniel_Shi_Resume.pdf"

export default function about() {
  return (
    <div className="about-container mt-auto mb-0">
      <div className="about-biography">
        <div className="flex about-header-wrapper">
          <ContentfulImage
            width={36}
            height={36}
            alt={`Profile image`}
            src={profile}
          />
          <p className="display-lead"> VISUAL DESIGN PORTFOLIO | 2023 </p>
        </div>
        <div className="about-content-wrapper">
          <p className="mt-6">
            <strong>Meet Daniel, </strong> a highly skilled multidisciplinary
            UX/UI designer whose expertise extends across various facets of
            design and development. With a robust background of seven years in{" "}
            <strong>web design</strong>
          </p>
          <p className="mt-6">
            With a track record of delivering high-quality,{" "}
            <strong>commercially successful</strong> solutions, Daniel stands as
            a testament to the power of a multidisciplinary approach in the
            ever-evolving realm of UX/UI design.
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
