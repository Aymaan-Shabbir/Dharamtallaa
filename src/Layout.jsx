import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Provider } from "react-redux";
import appStore from "./store/store";
const Layout = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
};

export default Layout;
