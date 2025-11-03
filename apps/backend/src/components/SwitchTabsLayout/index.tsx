import React, { JSX } from 'react';
import deepEqual from 'fast-deep-equal';
import _isArray from 'lodash/isArray';
import memoizedOne from 'memoize-one';
import { MenuDataItem, PageLoading, useIntl } from '@ant-design/pro-components';
import { Route } from '@umijs/route-utils/dist/types';
import type { Mode, RouteConfig } from 'use-switch-tabs';
import { isSwitchTab } from 'use-switch-tabs';
import { useLocation, history } from '@umijs/max';
import SwitchTabs, { SwitchTabsProps } from '../SwitchTabs';
export interface MakeUpRoute extends Route, Pick<RouteConfig, 'follow'> { }

function localeRoutes(
  routes: MakeUpRoute[],
  formatMessage: any,
  parent: MakeUpRoute | null = null,
): MenuDataItem[] {
  const result: MenuDataItem[] = [];
  routes.forEach((item) => {
    const { routes: itemRoutes, ...rest } = item;
    if (!item.name) {
      return;
    }
    // 初始化 locale 字段
    let newItem: MenuDataItem = {
      ...rest,
      locale: item.name,
    };
    const localeId = parent ? `${parent.locale}.${newItem.locale}` : `menu.${newItem.locale}`;
    newItem = {
      ...rest,
      locale: localeId,
      name: item.name,
    };
    if (_isArray(itemRoutes) && itemRoutes.length) {
      newItem = {
        ...newItem,
        children: localeRoutes(itemRoutes, formatMessage, newItem),
      };
    }
    result.push(newItem);
  });

  return result;
}

const memoizedOneLocaleRoutes = memoizedOne(localeRoutes, deepEqual);

export interface RouteTabsLayoutProps
  extends Pick<SwitchTabsProps, 'persistent' | 'fixed' | 'setTabName' | 'footerRender'> {
  mode?: Mode | false;
  loading?: boolean;
  routes?: MakeUpRoute[];
  children: React.ReactElement;
}

export default function SwitchTabsLayout(props: RouteTabsLayoutProps): JSX.Element {
  const { mode, loading, children, routes, ...rest } = props;
  const { getMessage } = useIntl();
  const location = useLocation();
  // TODO 线上重定向  也可以在Nginx配置
  if (location.pathname === '/') {
    history.replace('/welcome');
  }
  const originalRoutes = memoizedOneLocaleRoutes(routes || [], getMessage);
  if (mode && isSwitchTab(location as any, originalRoutes)) {
    if (loading) {
      return <PageLoading />;
    }
    if (routes) {
      return (
        <SwitchTabs
          mode={mode}
          {...rest}
          originalRoutes={originalRoutes}
        // animated={true}
        >
          {children}
        </SwitchTabs>
      );
    }
  }
  return children;
}
