import type { Settings as LayoutSettings } from '@ant-design/pro-components';
import { SettingDrawer } from '@ant-design/pro-components';
import type { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { history } from '@umijs/max';
import { AvatarDropdown, AvatarName, Question, SelectLang } from '@/components';
import defaultSettings from '../config/defaultSettings';
import { errorConfig } from './requestErrorConfig';
import '@ant-design/v5-patch-for-react-19';
import React, { type JSX } from 'react';
import routers from '../config/routes';
import SwitchTabsLayout from './components/SwitchTabsLayout';
import { getUserInfo } from './pages/user/login/service';

const isDev = process.env.NODE_ENV === 'development';
const loginPath = '/user/login';

/**
 * @see https://umijs.org/docs/api/runtime-config#getinitialstate
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  currentUser?: UserModal.IUserPrmtr;
  loading?: boolean;
  fetchUserInfo?: () => Promise<UserModal.IUserPrmtr | undefined>;
}> {
  // TODO 获取用户信息
  const fetchUserInfo = async () => {
    try {
      const msg = await getUserInfo();
      if (msg.code === 401) {
        history.push(loginPath);
      }
      return msg;
    } catch (_error) {
      history.push(loginPath);
    }
    return undefined;
  };
  // 如果不是登录页面，执行
  const { location } = history;
  if (location.pathname !== loginPath) {
    const currentUser = await fetchUserInfo();
    return {
      fetchUserInfo,
      currentUser,
      settings: defaultSettings as Partial<LayoutSettings>,
    };
  }
  return {
    fetchUserInfo,
    settings: defaultSettings as Partial<LayoutSettings>,
  };
}

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  const { switchTabs } = defaultSettings;
  return {
    actionsRender: () => [
      <Question key="doc" />,
      <SelectLang key="SelectLang" />,
    ],
    avatarProps: {
      src: "/zxl.jpg",
      title: <AvatarName />,
      render: (_, avatarChildren) => {
        return <AvatarDropdown>{avatarChildren}</AvatarDropdown>;
      },
    },
    // TODO layout 的内容区 style 类型	CSSProperties
    contentStyle: {
      padding: 0,
    },
    // TODO 自定义顶部title
    // headerTitleRender: (logo: React.ReactNode, title) => (
    //   <div>
    //     {React.isValidElement(logo)
    //       ? React.cloneElement(logo as JSX.Element, {
    //         style: {
    //           // backgroundColor: '#6497f9',
    //           padding: 4,
    //           borderRadius: 4,
    //           width: 40,
    //           height: 50,
    //         },
    //       })
    //       : logo}
    //     {title}
    //   </div>
    // ),
    onPageChange: () => {
      const { location } = history;
      // 如果没有登录，重定向到 login
      if (!initialState?.currentUser && location.pathname !== loginPath) {
        history.push(loginPath);
      }
    },
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          <SwitchTabsLayout
            mode={switchTabs?.mode}
            persistent={switchTabs?.persistent}
            fixed={switchTabs?.fixed}
            routes={routers}
          >
            {children}
          </SwitchTabsLayout>
          {/* {isDev && (
            <SettingDrawer
              disableUrlParams
              enableDarkTheme
              settings={initialState?.settings}
              onSettingChange={(settings) => {
                setInitialState((preInitialState) => ({
                  ...preInitialState,
                  settings,
                }));
              }}
            />
          )} */}
        </>
      );
    },
    ...initialState?.settings,
  };
};

const keyCodeMap: { [key: number]: boolean } = {
  // 91: true, // command
  61: true,
  107: true, // 数字键盘 +
  109: true, // 数字键盘 -
  173: true, // 火狐 - 号
  187: true, // +
  189: true, // -
};
// 覆盖ctrl||command + ‘+’/‘-’
document.onkeydown = (event) => {
  const e = event || window.event;
  const ctrlKey = e.ctrlKey || e.metaKey;
  if (ctrlKey && keyCodeMap[e.keyCode]) {
    e.preventDefault();
  } else if (e.detail) {
    // Firefox
    event.returnValue = false;
  }
};
// 覆盖鼠标滑动
document.body.addEventListener(
  'wheel',
  (e) => {
    if (e.ctrlKey) {
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      }
      if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    return false;
  },
  { passive: false },
);

/**
 * @name request 配置，可以配置错误处理
 * 它基于 axios 和 ahooks 的 useRequest 提供了一套统一的网络请求和错误处理方案。
 * @doc https://umijs.org/docs/max/request#配置
 */
export const request: RequestConfig = {
  ...errorConfig,
};
