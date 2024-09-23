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
        <img src="./public/assets/LogoFinal.png" alt="" className="h-8 mr-3" />
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
          <div className="profile w-11 h-11 rounded-[100%] bg-black">
            <img
              src={`https://api.adorable.io/avatars/285/${accessToken}.png`}
              alt=""
              className="rounded-full h-8 w-8"
            />
            <span className="ml-2 font-medium text-primary100 hover:text-primary200">
              {accessToken.substr(0, 10)}...
            </span>
          </div>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink className="" as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/aboutus">
          About Us
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
