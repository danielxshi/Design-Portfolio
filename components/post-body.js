import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import markdownStyles from './markdown-styles.module.css'
import RichTextAsset from './rich-text-asset'
import style from "../styles/modules/_slug.module.scss"

const customMarkdownOptions = (content) => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <RichTextAsset
        id={node.data.target.sys.id}
        assets={content.links.assets.block}
      />
    ),
  },
})

export default function PostBody({ id, content }) {
  return (
    <section id={id} className={[["col-span-full container max-w-2xl mx-auto"]].join(" ")}>
      <h2>process.</h2>
      <div className={markdownStyles['markdown']}>
        {documentToReactComponents(
          content.json,
          customMarkdownOptions(content)
        )}
      </div>
    </section>
  )
}
