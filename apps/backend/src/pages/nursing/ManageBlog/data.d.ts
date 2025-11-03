declare namespace MarkdownBlog {

  /**文章列表 */
  interface IMdBlog {
    id: number
    /**标题 */
    title: string
    /**markdown 原文 */
    contentMd: string
    /**转换后的 HTML */
    contentHtml: string
    /**作者 */
    author: string;
  }

  /**修改博客内容 */
  interface IUpdateBlog {
    id: number
    /**标题 */
    title: string
    /**markdown 原文 */
    contentMd: string
    /**转换后的 HTML */
    contentHtml: string
    /**作者 */
    author: string;
  }
}
