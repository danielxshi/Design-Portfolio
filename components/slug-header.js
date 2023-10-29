import style from "../styles/modules/_slug.module.scss";

export default function SlugHeader(post) {
  return (
    <section
      className={[
        ["grid-container relative"],
        style["slug-header"],
        style["slug-header-desktop"],
      ].join(" ")}
    >
      {/* <ContentfulHeaderImage url={post.headerImage.url} /> */}

      <div
        className={[
          ["mt-auto"],
          style["post-description"],
          style["slug-header-grid"],
          style["post-description-desktop-container"],
        ].join(" ")}
      >
        <div className={style["slug-header-text"]}>
          <h1 className={style["post-description"]}>{post.title}</h1>

          <h4 className="leading-none">
            {post.projectType} | {post.client}
          </h4>
        </div>
      </div>

      <div className={[style["slug-header-description"]].join(" ")}>
        <p>{post.projectRole}</p>
        <p>{post.projectTask}</p>
      </div>

      <div
        className={[
          [" project-details-wrapper"],
          style["project-details"],
        ].join(" ")}
      >
        <ul>
          <li>
            <h4>Role</h4>
            <p>{post.role}</p>
          </li>
          <li>
            <h4>Team</h4>
            <p>{post.team}</p>
          </li>
          <li>
            <h4>Website</h4>
            <div className="underscore-cta">
              <a
                onClick={() =>
                  window.open(
                    post.website.startsWith("http://") ||
                      post.website.startsWith("https://")
                      ? item.url
                      : "http://" + post.website,
                    "_blank"
                  )
                }
              >
                {post.website}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

{
  /* <section
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

</div>
</section> */
}
