import Contact from "./contact";

export default function about() {
  return (
    <div className=" sm:flex-col about-container md:mb-16 ">
      <div className="flex sm:flex-col">
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur. A leo eget eget pharetra a
            adipiscing volutpat quisque. Egestas tortor sollicitudin sed urna
            nibh aliquet. Nibh egestas vulputate dictum turpis fermentum tellus
            fermentum proin. Nisl gravida morbi in ipsum proin.{" "}
          </p>
          <p className="mt-5 ">
            Lorem ipsum dolor sit amet consectetur. A leo eget eget pharetra a
            adipiscing volutpat quisque. Egestas tortor sollicitudin sed urna
            nibh aliquet. Nibh egestas vulputate dictum turpis fermentum tellus
            fermentum proin. Nisl gravida morbi in ipsum proin.
          </p>
        </div>
        <div className="ml-12 sm:ml-0 mt-auto ">
          <Contact />
        </div>
      </div>

      <a className="mt-5" href="">
        Selected works ↴
      </a>
    </div>
  );
}
