import React from "react";
import Aux from "../Auxilliary/Auxilliary";
import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
  state = { sideDrawerVisible: false };

  setSideDrawerVisible = (bool) => {
    this.setState({ sideDrawerVisible: bool });
  };

  render() {
    return (
      <Aux>
        <SideDrawer
          visible={this.state.sideDrawerVisible}
          setSideDrawerVisible={this.setSideDrawerVisible}
        />
        <Toolbar setSideDrawerVisible={this.setSideDrawerVisible} />
        <main className={styles.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
