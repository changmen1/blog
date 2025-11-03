/**
 * 
 * @returns 返回当前手机环境是否处与移动设备
 */
export function useZxlIsMobile() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    console.log('>>>>>>>>>>>>>>>>>>', ua)
    const mobileRegex = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|windows phone|phone|webos|kindle|tablet/i;
    return mobileRegex.test(ua.toLowerCase());
}