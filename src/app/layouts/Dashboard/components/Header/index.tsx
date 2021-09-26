import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Col, Layout, Row, Typography } from 'antd';
import './styles.scss';

const { Header } = Layout;
const { Title, Text } = Typography;

interface DashboardHeaderProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function DashboardHeader({
  collapsed,
  onToggle,
}: DashboardHeaderProps) {
  return (
    <Header
      className="dashboard-header"
      style={{ paddingLeft: 20, paddingRight: 20 }}
    >
      <Row justify="space-between">
        <Col span={12}>
          <Row align="middle">
            <Button
              type="primary"
              onClick={onToggle}
              icon={collapsed ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            />
            &nbsp; &nbsp;
            <Row className="dashboard-header__title">
              <Title level={5}>Name of company</Title>
            </Row>
          </Row>
        </Col>
        <Col span={4}>
          <Row justify="end" align="middle">
            <Text>User Name</Text>
            &nbsp;
            <Avatar size={40} icon={<UserOutlined />} />
          </Row>
        </Col>
      </Row>
    </Header>
  );
}
