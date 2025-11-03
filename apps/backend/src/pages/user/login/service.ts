import { request } from '@umijs/max';
import { API } from 'types';

/**获取验证码 */
export async function getcaptcha() {
  return request('/captchaImage', {
    method: 'GET',
    headers: { isToken: false }
  });
}

/**登录接口 */
export async function loginApi(body: LoginModal.IReq) {
  return request('/login', {
    method: 'POST',
    data: body,
    headers: {
      isToken: false,
      repeatSubmit: false
    },
  });
}

/**获取用户信息 */
export async function getUserInfo() {
  return request<UserModal.IUserPrmtr>('/getInfo', {
    method: 'GET',
  });
}

/**退出登录 */
export async function loginOutApi() {
  return request('/manage/loginOut', {
    method: 'POST',
  });
}

/**用户菜单*/
export async function getResource() {
  return request<API.Result<UserModal.IResources>>('/anyone/visible/resource', {
    method: 'GET',
  });
}

/**修改密码接口 */
export async function getPassword(data: UserModal.IPassword) {
  return request('/anyone/password', {
    method: 'PUT',
    data,
  });
}

/**查询病人首页数据 */
export async function getBPatient(params: WeleCome.IHome) {
  return request<API.Result<WeleCome.IPatients>>('/bPatient/home', {
    method: 'GET',
    params
  });
}
