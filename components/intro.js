import { CMS_NAME, CMS_URL } from "../lib/constants";
import Contact from "./contact";

export default function Intro() {
  return (
    <section className="intro-container flex-col flex">
      <div>
        <h1>
          <em>Daniel Shi</em> - a{" "}
          <strong>visual designer</strong> specializing in crafting visual
          graphics and application interfaces for the past{" "}
          <strong>seven</strong> years.
        </h1>
        <p className="md:text-left subhead">
          He has worked with clients such as The Main Event, Moment Energy &
          YOGOST
        </p>
      </div>
      <Contact/>
    </section>
  );
}
