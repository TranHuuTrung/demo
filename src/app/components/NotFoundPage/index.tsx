import { Result } from 'antd';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link to="/">Back Home</Link>}
      />
    </>
  );
}
