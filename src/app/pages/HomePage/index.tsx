import { Helmet } from 'react-helmet-async';
import { Button } from 'antd';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
    </>
  );
}
