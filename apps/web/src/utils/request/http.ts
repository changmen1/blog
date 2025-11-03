import axios from 'axios'
// import { Base64 } from 'js-base64';

/**基础返回值 */
export interface HttpResponse<T = unknown> {
    code: number
    msg: string
    rows: T
    total: number
}

const axiosInstince = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

// axiosInstince.interceptors.request.use(
//     (config: AxiosRequestConfig<unknown>) => {
//         // const localToken = localStorage.getItem('token')
//         // const isFormData = config.data instanceof FormData;
//         config.headers = {
//             ...config.headers,
//             // Token: localToken ? `${localToken}` : '',
//             // Authorization: `${Base64.encode('lamp_web_pro:lamp_web_pro_secret')}`,
//             // ...(isFormData ? {} : { 'Content-Type': 'application/json' })
//         }
//         return config
//     },
//     (_error) => {
//         return Promise.reject()
//     }
// )

// TODO 用状态来判断是否过期 过期的话默认刷新token
//   if (error.response.status === 401) {
//     console.log(error.response.status);
//     localStorage.removeItem('token');
//     message.error('登录过期，请重新登录');
//     history.push(loginPath);
//   }

/** 响应拦截器 */
// axiosInstince.interceptors.response.use(
//     async (response) => {
//         NProgress.done();
//         const { data } = response
//         if (data.code === 11011) {
//             localStorage.removeItem('token');
//             Toast.show(`token过期请重新登录`)
//             window.location.href = '/login'
//         }
//         if (data?.success === false) {
//             Toast.show(`请求失败！${data?.msg}`)
//         }
//         return response;
//     },
//     (err) => {
//         NProgress.done();
//         return Promise.reject(err)
//     }
// )

export default axiosInstince
