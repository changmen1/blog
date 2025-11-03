import { FontSizeOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { Alert, Col, InputRef, Row, message } from 'antd';
import { useEffect, useRef, useState } from 'react';
import mystyles from './index.less';
import { getcaptcha, getPassword, loginApi } from './service';
import { useModel, history } from '@umijs/max';
import { flushSync } from 'react-dom';

const Page = () => {
  const [userLoginState, setUserLoginState] = useState<string>('');
  /**验证码png */
  const [formState, setFormState] = useState('');
  const [uuid, setUuid] = useState<string>()
  const passwordRef = useRef<InputRef>(null);
  const codeRef = useRef<InputRef>(null);
  const { initialState, setInitialState } = useModel('@@initialState');
  const fetchUserInfo = async () => {
    const userInfo = await initialState?.fetchUserInfo?.();
    if (userInfo) {
      flushSync(() => {
        setInitialState((s) => ({
          ...s,
          currentUser: userInfo,
        }));
      });
    }
  };

  /**获取验证码 */
  const buildCaptcha = async () => {
    try {
      const res = await getcaptcha();
      setFormState("data:image/gif;base64," + res.img)
      setUuid(res.uuid)
      return
    } catch {
      return '';
    }
  };

  const handleSubmit = async (values: LoginModal.IReq) => {
    const datas = {
      uuid: uuid!,
    };
    const data = { ...values, ...datas };
    // 登录
    const msg = await loginApi({ ...data }).catch((error) => {
      buildCaptcha();
    });
    setUserLoginState(msg.msg);
    if (msg.code === 200) {
      message.success('登录成功');
      sessionStorage.setItem('token', msg.token);
      await fetchUserInfo();
      history.push('/');
      return;
    }
  };

  const LoginMessage: React.FC<{
    content: string;
  }> = ({ content }) => {
    return (
      <Alert
        style={{
          marginBottom: 24,
        }}
        message={content}
        type="error"
        showIcon
      />
    );
  };

  useEffect(() => {
    buildCaptcha();
  }, []);
  return (
    <div
      style={{
        backgroundColor: 'white',
        height: '100vh',
      }}
    >
      <LoginFormPage
        // backgroundImageUrl="/davidBanner.png"
        // logo="/davidlogo.png"
        title="XXX系统"
        subTitle="          "
        onFinish={async (values) => {
          await handleSubmit(values as LoginModal.IReq);
        }}
      >
        {userLoginState && <LoginMessage content={`${userLoginState}`} />}
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined />,
              onPressEnter: () => {
                passwordRef.current?.focus()
              },
            }}
            placeholder={'用户名'}
            rules={[
              {
                required: true,
                message: '用户名是必填项',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            fieldProps={{
              size: 'large',
              ref: passwordRef,
              prefix: <LockOutlined />,
              onPressEnter: () => {
                codeRef.current?.focus()
              },
            }}
            placeholder={'密码'}
            rules={[
              {
                required: true,
                message: '密码是必填项',
              },
            ]}
          />
          <Row>
            <Col span={14}>
              <ProFormText
                placeholder="验证码"
                rules={[
                  {
                    required: true,
                    message: '验证码是必填项',
                  },
                ]}
                fieldProps={{
                  size: 'large',
                  ref: codeRef,
                  prefix: <FontSizeOutlined />,
                }}
                name="code"
              />
            </Col>
            <Col span={1}></Col>
            <Col span={1}>
              {formState ? (
                <img
                  src={formState}
                  alt="captcha"
                  className={mystyles.code}
                  onClick={buildCaptcha}
                />
              ) : (
                <img
                  src="/captcha_404.png"
                  alt="captcha"
                  className={mystyles.code}
                  onClick={buildCaptcha}
                />
              )}
            </Col>
          </Row>
        </>
      </LoginFormPage>
    </div>
  );
};

export default () => {
  return (
    <Page />
  );
};
