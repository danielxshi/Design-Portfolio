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
            <strong>Meet Daniel, </strong> a highly skilled <strong>multidisciplinary </strong>
             designer, crafted over 65 websites and held positions in lead art direction, visual design, front-end development and marketing.
          </p>
          <p className="mt-6">
            Developing a track record of high-quality,{" "}
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
