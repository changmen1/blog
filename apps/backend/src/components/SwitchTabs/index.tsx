import { useMemoizedFn } from 'ahooks';
import { ConfigProvider, Dropdown, Menu, Tabs } from 'antd';
import type { MenuProps } from 'antd/lib/menu';
import type { TabsProps } from 'antd/lib/tabs';
import classNames from 'classnames';
import type * as H from 'history-with-query';
import _get from 'lodash/get';
import React, { JSX, useEffect, useRef } from 'react';
import type { ActionType, UseSwitchTabsOptions } from 'use-switch-tabs';
import useSwitchTabs from 'use-switch-tabs';
import { useLocation, history } from '@umijs/max';
import styles from './index.less';

enum CloseTabKey {
  Current = 'current',
  Others = 'others',
  ToRight = 'toRight',
}

export interface RouteTab {
  tab: React.ReactNode;
  key: string;
  content: JSX.Element;
  closable?: boolean;
  location: Omit<H.Location, 'key'>;
}

export interface SwitchTabsProps
  extends Omit<UseSwitchTabsOptions, 'location' | 'history'>,
  Omit<TabsProps, 'hideAdd' | 'activeKey' | 'onEdit' | 'onChange' | 'children'> {
  fixed?: boolean;
  footerRender?: (() => React.ReactNode) | false;
}

export default function SwitchTabs(props: SwitchTabsProps): JSX.Element {
  const { mode, fixed, originalRoutes, setTabName, persistent, children, ...rest } = props;
  const location = useLocation() as any;
  const actionRef = useRef<ActionType>(undefined);
  const { tabs, activeKey, handleSwitch, handleRemove, handleRemoveOthers, handleRemoveRightTabs } =
    useSwitchTabs({
      children,
      setTabName,
      originalRoutes,
      mode,
      persistent,
      location,
      history,
      actionRef,
    });

  const remove = useMemoizedFn((key: string) => {
    handleRemove(key);
  });

  const handleTabEdit = useMemoizedFn((targetKey: string, action: 'add' | 'remove') => {
    if (action === 'remove') {
      remove(targetKey);
    }
  });

  const handleTabsMenuClick = useMemoizedFn((tabKey: string): MenuProps['onClick'] => (event) => {
    const { key, domEvent } = event;
    domEvent.stopPropagation();
    if (key === CloseTabKey.Current) {
      handleRemove(tabKey);
    } else if (key === CloseTabKey.Others) {
      handleRemoveOthers(tabKey);
    } else if (key === CloseTabKey.ToRight) {
      handleRemoveRightTabs(tabKey);
    }
  });

  const setMenu = useMemoizedFn((key: string, index: number) => (
    <Menu
      onClick={handleTabsMenuClick(key)}
      items={[
        {
          label: '关闭',
          disabled: tabs.length === 1,
          key: CloseTabKey.Current,
        },
        {
          label: '关闭其他',
          disabled: tabs.length === 1,
          key: CloseTabKey.Others,
        },
        {
          label: '关闭右侧',
          disabled: tabs.length === index + 1,
          key: CloseTabKey.ToRight,
        },
      ]}
    ></Menu>
  ));

  const setTab = useMemoizedFn((tab: React.ReactNode, key: string, index: number) => (
    <span onContextMenu={(event) => event.preventDefault()}>
      <Dropdown dropdownRender={() => setMenu(key, index)} trigger={['contextMenu']}>
        <span className={styles.tabTitle}>{tab}</span>
      </Dropdown>
    </span>
  ));

  useEffect(() => {
    (window as any).tabsAction = actionRef.current!;
  }, [actionRef.current]);
  return (
    <div className={styles.tabBox}>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              borderRadiusLG: 0,
              lineWidth: 0,
              cardBg: "#95b4fc"
            },
          },
        }}
      >
        <Tabs
          tabPosition="top"
          type="editable-card"
          tabBarStyle={{ margin: 0, backgroundColor: "#6497f9" }}
          tabBarGutter={0}
          animated={false}
          className={classNames('switch-tabs', { 'switch-tabs-fixed': fixed }, styles.tabTitleStyle)}
          {...rest}
          hideAdd
          activeKey={activeKey}
          onEdit={handleTabEdit as TabsProps['onEdit']}
          onChange={handleSwitch}
          items={tabs.map((item, index) => {
            return {
              key: item.key,
              forceRender: _get(persistent, 'force', false),
              closable: item.closable,
              label: setTab(item.title, item.key, index),
              children:
                item.key === activeKey ? (
                  <main className={styles.content}>{item.content}</main>
                ) : null,
            };
          })}
        ></Tabs>
      </ConfigProvider>
    </div>
  );
}
