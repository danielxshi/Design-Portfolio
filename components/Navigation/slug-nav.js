import style from "../../styles/modules/_slug.module.scss";

export default function SlugNav(props) {
  return (
    <nav className={[style["slug-nav"], ["col-span-full"]].join(" ")}>
      <div className="">
        <h4 className="slug-nav-header">{props.title}</h4>
        <span>-</span>
      </div>
      <ul className=" flex justify-between">
        <li>
          <a href="">overview</a>
        </li>
        <li>
          <a href="">process</a>
        </li>
        <li>
          <a href="">wireframes</a>
        </li>
        <li>
          <a href="">conclusion</a>
        </li>
      </ul>
    </nav>
  );
}
