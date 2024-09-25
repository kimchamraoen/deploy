import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {
  getAccessToken,
  removeAccessToken,
} from "../../lib/secureLocalStorage";
import { useEffect, useState } from "react";
import darkMode from "../../pages/auth/darkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export function NavbarComponent({ username, profileUrl, bio }) {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const token = getAccessToken();
    setAccessToken(token);
  }, []);

  // Handle logout

  const handleLogout = () => {
    removeAccessToken();
  };

  //darmode
  const [colorTheme, setTheme] = darkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "lighht" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };

  return (
    <Navbar fluid rounded className="bg-slate-100 dark:bg-black">
      <NavbarBrand>
        <img src="./public/assets/LogoFinal.png" alt="" className="h-8 mr-3" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-secondary200">
          STORYBRIGED
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {accessToken ? (
          <>
            <button onClick={() => toggleDarkMode(false)}>
              {!darkSide ? (
                <FontAwesomeIcon icon={faMoon} className="h-6 mt-2 mx-3" />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  className="h-6 mt-2 mx-3 text-white"
                />
              )}
            </button>
            <Dropdown
              label={
                <div className="profile w-11 h-11 rounded-full bg-black"></div>
              }
              inline
            >
              <Dropdown.Item
                as={Link}
                to="/profile"
                state={{ username, bio, profileUrl }}
              >
                View Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/editprofile">
                Edit Profile
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/postcard">
                Add Card
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
            </Dropdown>
          </>
        ) : (
          <>
            <button onClick={() => toggleDarkMode(false)}>
              {!darkSide ? (
                <FontAwesomeIcon icon={faMoon} className="h-6 mt-2 mx-3" />
              ) : (
                <FontAwesomeIcon
                icon={faSun}
                className="h-6 mt-2 mx-3 text-white"
              />
              )}
            </button>
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
          <>
            <Button onClick={() => handleLogout()} className="ml-2">
              Logout
            </Button>
            <Link
              to="/profile"
              className="rounded overflow-hidden max-h-10 bg-black"
            ></Link>
          </>
        )}
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/aboutus">
          About Us
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
