import style from "../../styles/modules/_slug.module.scss";
import Link from "next/link";
import Router from "next/router";
import { MouseEvent } from "react";

export default function SlugSideNav(props) {
  return (
    <nav className={[style["slug-nav"], ["container max-w-2xl mx-auto col-span-full"]].join(" ")}>
      <div className="">
        <h4 className="slug-nav-header">{props.title}</h4>
        <span>-</span>
      </div>
      <ul className=" flex justify-between">
        <li>
          <Link href="#overview">overview</Link>
        </li>
        <li>
          <Link href="#process">process</Link>
        </li>
        <li>
          <Link href="#wireframes">wireframes</Link>
        </li>
        <li>
          <Link href="#conclusion">conclusion</Link>
        </li>
      </ul>
    </nav>
  );
}
