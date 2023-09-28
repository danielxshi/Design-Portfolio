import Avatar from "../components/avatar";
import CoverImage from "../components/cover-image";
import PostTitle from "../components/post-title";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import markdownStyles from "./markdown-styles.module.css";
import RichTextAsset from "./rich-text-asset";

const customMarkdownOptions = (projectHeaderDescription) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={projectHeaderDescription.links.assets.block}
      />
    ),
  },
});

export default function PostHeader({
  title,
  coverImage,
  date,
  projectHeaderDescription,
}) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        {documentToReactComponents(
          projectHeaderDescription.json,
          customMarkdownOptions(projectHeaderDescription)
        )}

        <PostTitle>{title}</PostTitle>
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} url={coverImage.url} />
        </div>
      </div>
    </div>
  );
}
