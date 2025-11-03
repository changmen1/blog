import { request } from '@umijs/max';
import { API } from 'types';


/**
 * 图片上传
 * @param params
 * @returns
 */
export async function getInsertImage(data: any) {
  return request('/common/upload', {
    method: 'POST',
    data
  });
}

/**
 * 博客内容上传
 */
export async function SaveMd(data: Markdown.IMd) {
  return request('/blog', {
    method: 'POST',
    data,
  });
}
