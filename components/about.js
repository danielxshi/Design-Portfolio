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
          <p className="display-lead">DANIEL SHI | VISUAL DESIGN PORTFOLIO </p>
        </div>
        <div className="about-content-wrapper">
          <p className="mt-6">
            <strong>First a little about me </strong>A leo eget eget pharetra a
            adipiscing volutpat quisque. Egestas tortor sollicitudin sed urna
            nibh aliquet. Nibh egestas vulputate dictum turpis fermentum,
          </p>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur. A leo eget eget pharetra a
            branding volutpat quisque. Egestas tortor sollicitudin sed urna nibh
            aliquet. <strong>research</strong> egestas{" "}
            <strong>accessibility</strong>
          </p>
        </div>
      </div>
      <div className="cta-about flex">
        <div className="underscore-cta">
          <a target="_blank" href="https://drive.google.com/file/d/1gdwYVnoFCCOzyvDeLPGFNNIlgWYbCKX7/view?usp=share_link">resume</a>
        </div>
        <div className="underscore-cta ml-4">
          <a target="_blank" href="https://www.linkedin.com/in/daniel-xiang-shi/">linkedin</a>
        </div>
        <span>
          <strong>work collection ↴</strong>
        </span>
      </div>
    </div>
  );
}
