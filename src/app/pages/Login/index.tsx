import { Button, Checkbox, Form, Input, Typography } from 'antd';
import { useLoginForm } from 'app/hooks/auth/useLoginForm';
import { memo } from 'react';
import './styles.scss';

interface Props {}

const { Title } = Typography;

export const Login = memo((props: Props) => {
  const { onSubmit } = useLoginForm();

  const onFinish = (values: any) => {
    onSubmit({ email: values.email, password: values.password });
  };

  return (
    <div className="login">
      <div className="login-content">
        <Title level={2}>Sign in</Title>
        <Form
          name="login_form"
          className="login-content__form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email:"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Invalid email!' },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password:"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item className="login-content__extra">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-content__form-forgot" href="/">
              Forgot password?
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-content__form-button"
            >
              Sign-in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
});
