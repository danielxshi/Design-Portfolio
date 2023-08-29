import { CMS_NAME, CMS_URL } from "../lib/constants";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto vel modi ipsum nisi libero possimus cumque consequatur recusandae impedit laboriosam illum non atque nam hic, soluta provident enim fugiat dicta.
      </h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <a href="./abcf32x.pdf" download="How-to-download-file.pdf">
        <button>Download File</button>
      </a>
    </section>
  );
}
