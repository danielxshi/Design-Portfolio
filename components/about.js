import Contact from "./contact";
import ContentfulImage from "./contentful-image";
import Image from "next/image";
import profile from "../public/favicon/profile.png";

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
        <div>
          <ul className="flex">
            <li className="underscore-cta">
              <a href="">resume</a>
            </li>
            <li className="underscore_cta">
              <a href="">linkedin</a>
            </li>
          </ul>
        </div>
        <a className="" href="">
          work collection ↴
        </a>
      </div>
    </div>
  );
}
