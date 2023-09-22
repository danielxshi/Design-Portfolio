import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-col flex mb-16 md:mb-12">
      <h1>
        <strong>Daniel Shi</strong> <em>- -</em> a{" "}
        <strong>visual designer</strong> specializing in crafting visual
        graphics and application interfaces for the past <strong>seven</strong>{" "}
        years.
      </h1>
      <p className="md:text-left mt-5 ">
        He has worked with clients such as The Main Event, Moment Energy &
        YOGOST
      </p>
    </section>
  );
}
