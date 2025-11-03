import { request } from '@umijs/max';
import { API } from 'types';


/**
 * 博客文章分页查询
 * @param params
 * @returns
 */
export async function getBlogList(params: { pageNum: number, pageSize: number }) {
  return request<API.Result<MarkdownBlog.IMdBlog[]>>('/blog/list', {
    method: 'GET',
    params
  });
}


/**
 * 修改博客内容
 * @param params
 * @returns
 */
export async function updateBlog(data: MarkdownBlog.IUpdateBlog) {
  return request<API.Result<MarkdownBlog.IMdBlog[]>>('/blog', {
    method: 'PUT',
    data
  });
}


/**
 * 删除博客内容
 * @param data
 * @returns
 */
export async function remove(data: number[]) {
  return request<API.Result<any>>(`/blog/${data}`, {
    method: 'DELETE',
  });
}
