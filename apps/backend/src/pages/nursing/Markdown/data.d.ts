declare namespace Markdown {
  /**保存文章 */
  interface IMd {
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
