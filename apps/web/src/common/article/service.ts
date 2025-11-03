import axiosInstince, { type HttpResponse } from "@/utils/request/http"

/**
 * 博客文章分页查询
 * @param params
 * @returns
 */
export const getBlogList = (params: { pageNum?: number, pageSize?: number, id?: number }) => {
    return axiosInstince.get<HttpResponse<Article.IArticle[]>>(`/blog/list`, { params })
}
