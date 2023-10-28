import FooterMessages from "./JSON/FooterItems";
import Link from "next/link";

export const renderSwitch = (params) => {
  //   if (!params) {
  //     return "";
  //   }
  const keys = Object.keys(params);
  const value = keys;
  console.log("params" + params[0]);
  const test = params[value];
  const test2 = test["link"];

  switch (keys[0]) {
    case "contact":
      return (
        <div className="footer-contact-container">
          <h3>say hello</h3>
          <ul>
            {test2.map((item, index) => (
              <>
                <li key={index} className="underscore-cta">
                  <Link href="mailto: danielxshi@hotmail.com">danielxshi@hotmail.com</Link>
                </li>
                <li key={index} className="underscore-cta">
                  <Link href={item["link"]}>{item["text"]}</Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      );
    case "education":
      return (
        <div className="education-container">
          <h3>education</h3>
          <ul>
            {test2.map((item, index) => (
              <>
                <li key={index}>
                  <p className="whitespace-nowrap">{item["school"]}</p>
                  <p>{item["certification"]}</p>
                </li>
              </>
            ))}
          </ul>
        </div>
      );

    case "experience":
      return (
        <div className="experience-container">
          <h3>experience</h3>
          <ul>
            {test2.map((item, index) => (
              <>
                <li key={index}>
                  <p className="whitespace-nowrap	">{item["company"]}</p>
                  <p className="whitespace-nowrap	">{item["position"]}</p>
                  <p className="whitespace-nowrap	">{item["date"]}</p>
                </li>
              </>
            ))}
          </ul>
        </div>
      );
    case "socials":
      return (
        <div className="social-container">
          <h3>links</h3>
          <ul>
            {test2.map((item, index) => (
              <>
                <li className="underscore-cta">
                  <Link href={item["url"]}>{item["link"]}</Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      );
    default:
      return (
        <>
          {JSON.stringify(params)}
          <br></br>
          {keys[0]}
        </>
      );
  }
};

export default function Footer() {
  return (
    <footer className="footer-container">
      {FooterMessages.FooterItems.map((item, index) => {
        return <>{renderSwitch(item)}</>;
      })}

      <div className="footer-feedback-container">
        {/* <Link href="">portfolio feedback?</Link> */}
        <div className="">
          <p>currently seeking work: </p>
          <div className="wrapper">
            <div className="marquee">
              <span>
                {" "}
                uxui design, front-end design, web design, visual design,
                videography, photography, product design,
              </span>
              <span>
                {" "}
                uxui design, front-end design, web design, visual design,
                videography, photography, product design,
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="whitespace-nowrap">&copy; 2023 Daniel Shi</p>
      </div>
    </footer>
  );
}
