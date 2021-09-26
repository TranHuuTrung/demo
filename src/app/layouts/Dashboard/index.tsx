import { Layout } from 'antd';
import { useCallback, useState } from 'react';
import DashboardHeader from './components/Header';
import DashboardSidebar from './components/Sidebar';
import './styles.scss';

const { Content } = Layout;

interface DashboardLayoutProps {
  children: Element;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = useCallback(() => {
    setCollapsed(prev => !prev);
  }, []);

  return (
    <Layout className="dashboard-layout">
      <DashboardSidebar collapsed={collapsed} onToggle={onToggle} />

      <Layout>
        <DashboardHeader collapsed={collapsed} onToggle={onToggle} />
        <Content className="dashboard-layout__content">{children}</Content>
      </Layout>
    </Layout>
  );
}
