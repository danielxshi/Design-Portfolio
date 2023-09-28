import Contact from "./contact";

export default function about() {
  return (
    <div className="about-container">
      <div className="about-biography">
        <p>
          Lorem ipsum dolor sit amet consectetur. A leo eget eget pharetra a
          adipiscing volutpat quisque. Egestas tortor sollicitudin sed urna nibh
          aliquet. Nibh egestas vulputate dictum turpis fermentum tellus
          fermentum proin.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur. A leo eget eget pharetra a
          adipiscing volutpat quisque. Egestas tortor sollicitudin sed urna nibh
          aliquet. Nibh egestas vulputate dictum turpis fermentum tellus
          fermentum proin.{" "}
        </p>
      </div>
      <div className="cta-about flex">
        <div>
          <ul className="flex">
            <li>
              <a href="">resume</a>
            </li>
            <li>
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
