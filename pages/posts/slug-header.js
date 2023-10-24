import style from "../../styles/modules/_slug.module.scss";

export default function SlugHeader(props) {
  return (
    <section
      className={[["grid-container"], style["slug-header-container"]].join(" ")}
    >
      <div className={style["title-wrapper"]}>
        <h1>{props.title}</h1>
      </div>
      <div className={style["slug-description-container"]}>
        <div className="slug-description-details-wrapper mt-8">
          <ul className="flex flex-row justify-between">
            <li>{props.details}</li>
            <li>{props.details}</li>
            <li>{props.details}</li>
          </ul>
        </div>
        <p className="mt-8">{props.description}</p>
        {/* <a href={props.link}>let's chat!</a> */}
      </div>
    </section>
  );
}
