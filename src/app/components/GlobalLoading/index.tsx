import { Spin } from 'antd';
import { memo } from 'react';
import './styles.scss';
import { LoadingOutlined } from '@ant-design/icons';
import { useGlobalUI } from 'app/hooks/global/useGlobalUI';

interface Props {}

const antIcon = <LoadingOutlined style={{ fontSize: 32 }} spin />;

export const GlobalLoading = memo((props: Props) => {
  const { isLoading } = useGlobalUI();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="global-loading">
      <div className="loading-container">
        <Spin indicator={antIcon} tip="Loading..." size="large" />
      </div>
    </div>
  );
});
