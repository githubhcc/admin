import React from "react";
import Contents from "../components/content";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import style from "./home.module.css";
import menus from "../components/siderMenus";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Index extends React.Component {
  render() {
    return (
      <>
        <Layout className="index_height">
          <Header className="index_head">
            <div className="flex_between">
              <div>
                <span>尚智定管理后台</span>
                <span onClick={this.toggleCollapsed} className={style.pack_up}>收起</span>
                <span>面包屑:{this.state.path}</span>
              </div>
              <span>昵称头像部分</span>
            </div>
          </Header>
          <Layout className="index_height index_hidden">
            <Sider collapsible trigger={null} collapsed={this.state.collapsed}>
              <div className="index_height index_side">
                <Menu mode="inline" defaultOpenKeys={menus.defOpe} defaultSelectedKeys={menus.defSel}
                  style={{ height: '100%' }} inlineCollapsed={this.state.collapsed} onSelect={this.selectItem}>
                  {menus.data.map((n, i) => {
                    return <SubMenu key={n.key} title={<span><Icon type={n.icon} />{!this.state.collapsed && n.title}</span>}>
                      {n.item.map((m, j) => {
                        return <Menu.Item key={m.key}>
                          <span >{m.title}</span>
                        </Menu.Item>
                      })}
                    </SubMenu>
                  })}
                </Menu>
              </div>
            </Sider>
            <Content>
              <div className={style.index_content}>
                <Contents />
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
  state = {
    collapsed: false,
    path: ""
  };

  toggleCollapsed = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };
  selectItem = (e) => {
    this.props.history.push(e.key)
    this.setState({ path: e.key });
  }
}

export default Index;
