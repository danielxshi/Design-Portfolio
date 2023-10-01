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
          <h4>let's work</h4>
          <ul>
            {test2.map((item, index) => (
              <>
                <li>
                  <Link href="">{item["text"]}</Link>
                </li>
              </>
            ))}
          </ul>{" "}
        </div>
      );
    case "education":
      return (
        <div className="education-container">
          <h4>education</h4>
          <ul>
            {test2.map((item, index) => (
              <>
                <li>
                  <p className="whitespace-nowrap">{item["school"]}</p>
                  <p>{item["certification"]}</p>
                </li>
              </>
            ))}
          </ul>{" "}
        </div>
      );

    case "experience":
      return (
        <div className="experience-container">
          <h4>experience</h4>
          <ul>
            {test2.map((item, index) => (
              <>
                <li>
                  <p className="whitespace-nowrap	">{item["company"]}</p>
                  <p className="whitespace-nowrap	">{item["position"]}</p>
                  <p className="whitespace-nowrap	">{item["date"]}</p>
                </li>
              </>
            ))}
          </ul>{" "}
        </div>
      );
    case "socials":
      return (
        <div className="social-container">
          <h4>links</h4>
          <ul>
            {test2.map((item, index) => (
              <>
                <li>
                  <Link href={item["url"]}>{item["link"]}</Link>
                </li>
              </>
            ))}
          </ul>{" "}
        </div>
      );
    default:
      return (
        <>
          {" "}
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
        <Link href="">portfolio feedback?</Link>
        <div className="">
          <h4>currently seeking work: </h4>
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
