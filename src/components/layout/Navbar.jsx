import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
} from "../../lib/secureLocalStorage";
import { useEffect, useState } from "react";

export function NavbarComponent() {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const accessToken = getAccessToken();
    setAccessToken(accessToken);
  }, [accessToken]);
  console.log("accessToken", accessToken);

  // handle logout
  const handleLogout = () => {
    removeAccessToken();
  };
  return (
    <Navbar fluid rounded className=" bg-slate-100">
      <NavbarBrand>
        <img src="./public/assate/LogoFinal.png" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-secondary200">
          STORYBRIGED
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {!accessToken && (
          <>
            <Button
              as={Link}
              to="/register"
              className="bg-primary100 hover:bg-primary200"
            >
              Register
            </Button>
            <Button
              className="ml-2 bg-primary100 hover:bg-primary200"
              as={Link}
              to="/login"
            >
              Login
            </Button>
          </>
        )}
        {accessToken && (
          <Button onClick={() => handleLogout()} className="ml-2">
            Logout
          </Button>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink className="" as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/products">
          About Us
        </NavbarLink>
        
      </NavbarCollapse>
    </Navbar>
  );
}
