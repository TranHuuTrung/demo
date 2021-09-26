import { MenuFoldOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Divider, Drawer, Menu, Row, Typography } from 'antd';
import { useMemo, ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './styles.scss';

const { Title, Text } = Typography;

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface MenuOption {
  key: string;
  label: string;
  icon?: ReactElement;
}

export default function DashboardSidebar({
  collapsed,
  onToggle,
}: DashboardSidebarProps) {
  const { t } = useTranslation();
  const menuItems: MenuOption[] = useMemo(() => {
    return [
      { key: 'dashboard', label: t('SIDE_BAR.DASHBOARD') },
      { key: 'inventory', label: t('SIDE_BAR.INVENTORY') },
      { key: 'quotes', label: t('SIDE_BAR.QUOTES') },
      { key: 'orders', label: t('SIDE_BAR.ORDERS') },
      { key: 'users', label: t('SIDE_BAR.USERS') },
      {
        key: 'automated-reports',
        label: t('SIDE_BAR.AUTOMATED_REPORTS'),
        icon: <UploadOutlined />,
      },
    ];
  }, [t]);

  return (
    <Drawer
      title={
        <Row justify="space-between">
          <Title level={4}>Demo</Title>
          <Button
            type="primary"
            onClick={onToggle}
            icon={<MenuFoldOutlined />}
          />
        </Row>
      }
      closable={false}
      visible={collapsed}
      placement="left"
      className="dashboard-sidebar"
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['quotes']}
        defaultOpenKeys={['quotes']}
        style={{ height: '100%', borderRight: 1 }}
      >
        {menuItems.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={`/${item.key}`}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>

      <Row style={{ padding: '0 16px 0px 24px' }}>
        <Divider />
        <Link to="/my-profile" className="dashboard-sidebar__link-item">
          {t('SIDE_BAR.MY_PROFILE')}
        </Link>
        <Link to="/settings" className="dashboard-sidebar__link-item">
          {t('SIDE_BAR.SETTINGS')}
        </Link>
        <Link to="/logout" className="dashboard-sidebar__link-item">
          {t('SIDE_BAR.LOGOUT')}
        </Link>

        <Divider />
        <Link
          to="/terms-and-conditions"
          className="dashboard-sidebar__link-item"
        >
          {t('SIDE_BAR.TERMS_AND_CONDITIONS')}
        </Link>
        <Link to="/policy" className="dashboard-sidebar__link-item">
          {t('SIDE_BAR.POLICY')}
        </Link>
        <Text type="secondary" className="dashboard-sidebar__copyright">
          {t('SIDE_BAR.COPYRIGHT')}
        </Text>
      </Row>
    </Drawer>
  );
}
