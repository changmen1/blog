/*
 * Author: zxl
 * 文件描述: 简历
 * 创建时间 2025年10月17日 16:23:00
 */
// https://community.vercel.com/t/deployment-failed/25402
// https://grubersjoe.github.io/react-github-calendar/#/?user=changmen1
import Image from "next/image"
import GitHubCalendar from 'react-github-calendar';

export default function Page() {
  return (
    <div className="relative z-[999] bg-white flex flex-col justify-center items-center gap-3 max-w-[800px] mx-auto p-[30px] mt-[40px]">
      {/* 头部 */}
      <div className="flex flex-col justify-center items-center gap-y-2 w-full max-w-full mx-auto">
        <div className="text-black/88 text-center tracking-widest text-[24px] font-semibold">
          朱昕龙
        </div>
        <div className="text-[#333] text-center w-full max-w-full text-[14px] font-normal block">
          前端开发 / 技术爱好者 / 4年经验
        </div>
        <div className="text-[#333] flex flex-wrap justify-center items-center gap-y-2 gap-x-5 text-[14px] font-normal">
          <div className="flex justify-center items-center gap-x-2">
            <svg className="w-4 h-4 text-[16px] block" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z"></path></svg>
            +86 17339811909
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M690.1 377.4c5.9 0 11.8.2 17.6.5-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 019.1 17.6c0 2.4-.5 4.6-1.1 6.9-5.5 20.3-14.2 52.8-14.6 54.3-.7 2.6-1.7 5.2-1.7 7.9 0 5.9 4.8 10.8 10.8 10.8 2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5 3.2 0 6.4.5 9.5 1.4 33.1 9.5 68.8 14.8 105.7 14.8 6 0 11.9-.1 17.8-.4-7.1-21-10.9-43.1-10.9-66 0-135.8 132.2-245.8 295.3-245.8zm-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1zm-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1 43.2 19.3 43.2 43.1-19.4 43.1-43.2 43.1zm586.8 415.6c56.9-41.2 93.2-102 93.2-169.7 0-124-120.8-224.5-269.9-224.5-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3 2.6-.8 5.2-1.2 7.9-1.2 5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 006.4-2.6 9 9 0 002.6-6.4c0-2.2-.9-4.4-1.4-6.6-.3-1.2-7.6-28.3-12.2-45.3-.5-1.9-.9-3.8-.9-5.7.1-5.9 3.1-11.2 7.6-14.5zM600.2 587.2c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9c0 19.8-16.2 35.9-36 35.9zm179.9 0c-19.9 0-36-16.1-36-35.9 0-19.8 16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 01-36 35.9z"></path></svg>
            zxl1907395787
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0068.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"></path></svg>
            zhangmen099@gmail.com
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <svg className="w-4 h-4 text-[16px] block" focusable="false" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1000 1000" width="1000" height="1000"><g fill="none" fillRule="evenodd"><circle cx="500" cy="500" r="500" fill="currentColor"></circle><path fill="#fff" d="M226.328 494.722c145.76-63.505 242.957-105.372 291.59-125.6 138.855-57.755 167.707-67.787 186.513-68.118 4.137-.073 13.385.952 19.375 5.813 5.059 4.104 6.45 9.649 7.117 13.54.666 3.892 1.495 12.757.836 19.684-7.525 79.061-40.084 270.924-56.648 359.474-7.009 37.47-20.81 50.033-34.17 51.262-29.036 2.672-51.085-19.189-79.208-37.624-44.006-28.847-68.867-46.804-111.583-74.953-49.366-32.531-17.364-50.411 10.77-79.631C468.281 550.92 596.214 434.556 598.69 424c.31-1.32.597-6.241-2.326-8.84-2.924-2.598-7.239-1.71-10.353-1.003-4.413 1.002-74.714 47.468-210.902 139.4-19.955 13.702-38.03 20.378-54.223 20.028-17.853-.386-52.194-10.094-77.723-18.393-31.313-10.178-56.2-15.56-54.032-32.846 1.128-9.003 13.527-18.211 37.196-27.624Z"></path></g></svg>
            电报
          </div>
        </div>
      </div>
      {/* github */}
      <div className="overflow-hidden box-border border border-[#d0d7de] rounded-md flex flex-col justify-center items-center w-full md:w-[764px] mx-auto py-2">
        {/* 保持原组件属性不变 */}
        <GitHubCalendar
          username="changmen1"
          fontSize={12}
          hideTotalCount={true}
          hideMonthLabels={false}
          hideColorLegend={false}
          colorScheme="light"
          year={2025}
          blockSize={10}
        />
      </div>
      {/* 个人简介 */}
      <div className="text-black tracking-[1px] text-left w-full mx-auto p-0 text-sm font-normal leading-[24px] block">
        &emsp;&emsp;主攻前端方向，可用java做接口开发，不希望过于依赖别人，即使没有设计没有产品，我依然想要把产品做到完美，毕竟全栈才能最高效的解决问题，在遇到技术问题我会去github查看issues，或是去google，stackoverflow寻找答案，但问题通常不一定有人遇到，或已被解决，所以熟练的阅读官方源码，查看手册，或是自己实验才是最终解决问题的办法，相信事实的结果需要动手去做！
      </div>
      {/* 社交信息 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          社交信息
        </div>
        <div className="text-[rgba(0,0,0,0.88)] text-start flex items-center gap-x-[6px] text-[15px] font-normal leading-[24px]">
          <svg className="block w-[16px] h-[16px] text-[16px]" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
          <span className="inline-block min-w-[76px]">GitHub：</span>
          <a href="https://github.com/changmen1" target="_blank" className="overflow-auto underline text-[15px] font-bold">https://github.com/changmen1</a>
        </div>
        <div className="text-[rgba(0,0,0,0.88)] text-start flex items-center gap-x-[6px] text-[15px] font-normal leading-[24px]">
          <svg className="block w-[16px] h-[16px] text-[16px]" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
          <span className="inline-block min-w-[76px]">掘金：</span>
          <a href="https://juejin.cn/user/2632668054823427" target="_blank" className="overflow-auto underline text-[15px] font-bold">https://juejin.cn/user/2632668054823427</a>
        </div>
        <div className="text-[rgba(0,0,0,0.88)] text-start flex items-center gap-x-[6px] text-[15px] font-normal leading-[24px]">
          <svg className="block w-[16px] h-[16px] text-[16px]" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="64 64 896 896" fill="currentColor" width="1em" height="1em"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
          <span className="inline-block min-w-[76px]">Dev：</span>
          <a href="https://dev.to/changmen1" target="_blank" className="overflow-auto underline text-[15px] font-bold">https://dev.to/changmen1</a>
        </div>
      </div>
      {/* 教育经历 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          教育经历
        </div>
        <div className="flex flex-col justify-center items-start w-full max-w-full">
          <div className="flex justify-between items-center w-full max-w-full text-[rgba(0,0,0,0.88)] text-[16px] font-bold leading-[28px]">
            兰州理工大学技术工程学院
            <span className="text-base font-normal leading-6">
              2021/7 – 2023/6
            </span>
          </div>
          <div className="text-[rgba(0,0,0,0.88)] text-sm font-normal leading-6">
            软件工程
          </div>
          <div className="flex justify-between items-center w-full max-w-full text-[rgba(0,0,0,0.88)] text-[16px] font-bold leading-[28px]">
            兰州资源环境技术大学
            <span className="text-base font-normal leading-6">
              2018/7 – 2021/6
            </span>
          </div>
          <div className="text-[rgba(0,0,0,0.88)] text-sm font-normal leading-6">
            机械工程
          </div>
        </div>
      </div>
      {/* 技术栈 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          技术栈
        </div>
        <ul className="list-disc list-outside pl-[20px]">
          <li>熟悉 <span className="text-black font-semibold">h5</span> / <span className="text-black font-semibold">JS</span> / TS / <span className="text-black font-semibold">CSS</span> / <span className="text-black font-semibold">Java</span> / go / Dart</li>
          <li>熟悉 <span className="text-black font-semibold">webApi</span></li>
          <li>熟悉 <span className="text-black font-semibold">React</span> / <span className="text-black font-semibold">Angular</span> / Vue / <span className="text-black font-semibold">Jquery</span></li>
          <li>熟悉 <span className="text-black font-semibold">taro</span> / <span className="text-black font-semibold">微信原生</span> / uniapp / <span className="text-black font-semibold">Flutter</span></li>
          <li>熟悉 <span className="text-black font-semibold">Electron</span> / <span className="text-black font-semibold">Tauri</span></li>
          <li>熟悉 springboot mybatis-plus mysql redis</li>
          <li>熟悉 <span className="text-black font-semibold">Antdesign</span>/ <span className="text-black font-semibold">Antdesign Pro</span> / <span className="text-black font-semibold">scanUi</span> / Mui / <span className="text-black font-semibold">vuetify</span> / Element</li>
          <li>熟悉 git github gitlab </li>
          <li>开源精神 开源基于本地客户端<span className="text-black font-semibold">AI对话工具</span>，本地客户端单片机温湿度检测工具，为<span className="text-black font-semibold">antdesignPro，afilmory，yatori-go-core贡献PR</span></li>
        </ul>
      </div>
      {/* 项目经历 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          项目经历
        </div>
        <div>
          <div className="text-[rgba(0,0,0,0.88)] mt-4 text-lg font-bold leading-8">
            ICU重症系统 NICU重症系统
            <a href="https://github.com/changmen1" target="_blank" className="underline ml-[20px] text-[15px] font-bold">https://github.com/changmen1</a>
          </div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            角色
          </div>
          <div>ICU重症系统后台管理的 <span className="text-black font-semibold">前端技术负责人</span> </div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            行动
          </div>
          <div>完成对ICU科室的医疗设备系统录入、病人生命体征检测、通过<span className="text-black font-semibold">AI进行病情分析</span>、减轻护士工作</div>
          <div>完成ICU科室对<span className="text-black font-semibold">体温单</span>、<span className="text-black font-semibold">重症单</span>、血滤单等文书文书表单提出的<span className="text-black font-semibold">定制化开发</span></div>
          <div>完成<span className="text-black font-semibold">戴小维AI模块对接</span></div>
          <div>完成与设备解析-对接婴儿培养箱-输注泵-监护仪-呼吸机-等设备 对数据进行检测</div>
          <div>...</div>
          <div className="text-[rgba(0,0,0,0.88)] mt-1 text-lg font-bold leading-8">
            结果
          </div>
          <div>成功落地浙江省多家医院</div>
          <div><span className="text-black font-semibold">产出了部门内部高移植性、与 UI 层高解耦、高扩展性的三测单、体温单、重症单、AI模块组件，可在各大关联业务中极速引入、扩展、定制</span></div>
          <div>集团内目前唯一提交商业化的软件项目</div>
        </div>
      </div>
      {/* 工作经历 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          工作经历
        </div>
        <div className="flex flex-col justify-center items-start w-full max-w-full my-2.5">
          <div className="flex justify-between items-center w-full max-w-full text-black/88">
            <div className="text-[18px] font-bold leading-[32px]">
              宁波戴维医疗器械股份有限公司
            </div>
            <div className="text-[16px]">
              2024.1 - 至今
            </div>
          </div>
          <div className="flex justify-start items-center gap-[20px] w-full max-w-full text-black/88 text-[16px] font-bold leading-[32px] relative">
            <div>高级前端开发工程师</div>
            <div>研发中心 • 智慧医疗部门 • 前端组</div>
          </div>
          <ul className="list-disc list-outside pl-[20px]">
            <li>主要负责医院中后台、小程序、医院数字大屏等相关业务开发</li>
            <li>负责项目的开发、维护、优化，确保其高性能和稳定性，高效支撑前端业务的长期迭代</li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start w-full max-w-full my-2.5">
          <div className="flex justify-between items-center w-full max-w-full text-black/88">
            <div className="text-[18px] font-bold leading-[32px]">
              兰州新昊源电子科技有限公司
            </div>
            <div className="text-[16px]">
              2022.7 - 2023-10
            </div>
          </div>
          <div className="flex justify-start items-center gap-[20px] w-full max-w-full text-black/88 text-[16px] font-bold leading-[32px] relative">
            <div>前端开发工程师</div>
            <div>研发中心 • 移动互联网部门 • 前端组</div>
          </div>
          <ul className="list-disc list-outside pl-[20px]">
            <li>主要负责医院中后台、互联网医院小程序、医院自助机、医院壁挂机等相关业务开发，医院官网移动端响应式UI改造</li>
            <li>参与组内每周CodeReview积极分享，每月列会项目汇报</li>
          </ul>
        </div>
      </div>
      {/* 在校经历 */}
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          在校经历
        </div>
        <div className="flex flex-col justify-center items-start w-full max-w-full my-2.5">
          <div className="flex justify-between items-center w-full max-w-full text-black/88">
            <div className="text-[18px] font-bold leading-[32px]">
              上海逻讯信息科技有限公司-兰州分公司
            </div>
          </div>
          <div className="flex justify-start items-center gap-[20px] w-full max-w-full text-black/88 text-[16px] font-bold leading-[32px] relative">
            <div>前端开发工程师</div>
            <div>研发中心</div>
          </div>
          <ul className="list-disc list-outside pl-[20px]">
            <li>主要负责兰州地区的项目开发，进度汇报与上海总公司后端开发工程师对接</li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-full mx-auto">
        <div className="text-[rgba(0,0,0,0.88)] text-start border-b-2 border-[rgba(0,0,0,0.88)] my-2 mb-1 text-[18px] font-semibold leading-[32px]">
          致谢
        </div>
        <div>感谢您花时间阅读我的简历，期待有机会能和您共事。</div>
      </div>
    </div>
  );
}
