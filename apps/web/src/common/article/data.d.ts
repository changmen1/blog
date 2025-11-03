declare namespace Article {
    /**
     * 博客内容
     */
    interface IArticle {
        id: number
        /**标题 */
        title: string
        /**markdown 原文 */
        contentMd: string
        /**转换后的 HTML */
        contentHtml: string
        /**作者 */
        author: string;
        /**创建时间 */
        createdAt: string
        /**更新时间 */
        updatedAt: string
    }
}