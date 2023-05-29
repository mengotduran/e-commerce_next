import Link from "next/link";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import DropdownMenu from "../../../Elatic/Dropdown";
import { Dropdown } from "@nextui-org/react";

export const Header = () => {
  const [lang, setLang] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const toggleLanguage = () => {
    setLang(!lang);
  };

  const handleSidebar = (status) => {
    if (status) {
      setIsSidebarOpen(true);
    } else {
      setIsSidebarOpen(false);
    }
  };

  const handleClick = (event) => {
    setIsShown((current) => !current);
    setOpenLang(!openLang);
  };

  return (
    <>
      <header className="main-header">
        <div className="main-div">
          <div className="first-header">
            <div className="FH-icons">
              <Link href="#" className="icon-links">
                <BsFacebook />
              </Link>
              <Link href="#" className="icon-links">
                <SlSocialInstagram />
              </Link>
              <Link href="#" className="icon-links">
                <ImWhatsapp />
              </Link>
            </div>
            <div className="search_lang-div">
              <div className="search_div">
                <input id="gsearch" name="gsearch" className="input" />
                <IoSearch className="search" />
              </div>
              <div className="lang_div">
                <button
                  onClick={toggleLanguage}
                  className={lang ? "toggleL" : "toggleN"}
                >
                  EN
                </button>
                <button
                  onClick={toggleLanguage}
                  className={lang ? "toggleN" : "toggleL"}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
          <div className="second-header">
            <div className="logo">
              <Link href="/">
                <Image src="/logo.jpg" width={50} height={50} />
              </Link>
            </div>

            <div className="last-SH">
              <div className="navbar-container">
                <div className="nav_links">
                  <Link href="#" className="nav_link_text">
                    Home
                  </Link>
                  <div className="drop_down_div">
                    <Dropdown> 
                      <Dropdown.Button
                        css={{
                          borderRadius: 0, // radii.xs
                          background: "white", // colors.pink800
                          color: "grey",
                          height: "$12",
                          margin: "0px",
                          "&:hover": {
                            background: "#eef075",
                          },
                          "&:active": {
                            background: "$pink200",
                          },
                        }}
                      >
                        A Propos
                      </Dropdown.Button>
                      <Dropdown.Menu aria-label="Static Actions">
                        <Dropdown.Item
                          key="new"
                          css={{
                            height: "60px",
                          }}
                        >
                          presentation de holistic hopital
                        </Dropdown.Item>
                        <Dropdown.Item key="copy">
                          medecine holistique
                        </Dropdown.Item>
                        <Dropdown.Item key="edit">
                          les Spécialiste
                        </Dropdown.Item>
                        <Dropdown.Item key="agency">nos agences</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Button
                        css={{
                          borderRadius: 0, // radii.xs
                          background: "white", // colors.pink800
                          color: "grey",
                          height: "$12",
                          "&:hover": {
                            background: "#eef075",
                          },
                          "&:active": {
                            background: "$pink200",
                          },
                        }}
                      >
                        Nos Therapie
                      </Dropdown.Button>
                      <Dropdown.Menu aria-label="Static Actions">
                        <Dropdown.Item
                          key="new"
                          css={{
                            height: "60px",
                          }}
                        >
                          presentation de holistic hopital
                        </Dropdown.Item>
                        <Dropdown.Item key="copy">
                          medecine holistique
                        </Dropdown.Item>
                        <Dropdown.Item key="edit">
                          les Spécialiste
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Link href="#" className="nav_link_text">
                    pathologie
                  </Link>
                  <Link href="#" className="nav_link_text">
                    Galerie
                  </Link>
                  <Link href="#" className="nav_link_text">
                    Actualites
                  </Link>
                  <Link href="#" className="nav_link_text">
                    contact
                  </Link>
                </div>
              </div>

              <div className="hamburger_container">
                <div
                  className={`${
                    isActive ? "hamburger" : "hamburger menu-active"
                  }`}
                  onClick={() => {
                    if (isActive) {
                      setIsActive(!isActive);
                      handleSidebar(true);
                    } else {
                      setIsActive(!isActive);
                      handleSidebar(false);
                    }
                  }}
                >
                  <span className="hamburger-line hamburger-line-top"></span>
                  <span className="hamburger-line hamburger-line-middle"></span>
                  <span className="hamburger-line hamburger-line-bottom"></span>
                </div>
              </div>
              <button className="shop_btn">shop</button>
            </div>
          </div>
        </div>
      </header>

      <aside
        className={`${isSidebarOpen ? "sidebar sidebar-open" : "sidebar"}`}
      >
        <DropdownMenu />
      </aside>
    </>
  );
};
