import NavLink from "../components/NavLink";
import Cookie from "../components/Cookie";
import Modgura from "./modgura";

const Layout = ({ children }) => {
  return (
    <>
      <Modgura />
      <NavLink />
      {children}
      <Cookie />
    </>
  );
};
export default Layout;
