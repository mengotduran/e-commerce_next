import { Dropdown, textTransforms } from "@nextui-org/react";
import Link from "next/link";


export default function DropdownMenu() {
  return (
    <div>
      <div className="res_nav_links">
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
                height: "40px",
                fontSize: "1rem",
                textTransform:"uppercase",
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
                  fontSize: "1rem",
                  textTransform:"uppercase",
                }}
              >
                presentation de holistic hopital
              </Dropdown.Item>
              <Dropdown.Item key="copy" css={{
                  textTransform: "uppercase"
                }}>medecine holistique</Dropdown.Item>
              <Dropdown.Item key="edit" css={{
                  textTransform: "uppercase"
                }}>les Spécialiste</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Button
              css={{
                borderRadius: 0, // radii.xs
                background: "white", // colors.pink800
                color: "grey",
                height: "40px",
                fontSize: "1rem",
                textTransform:"uppercase",
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
                  textTransform: "uppercase"
                }}
              >
                presentation de holistic hopital
              </Dropdown.Item>
              <Dropdown.Item key="copy" css={{
                  textTransform: "uppercase"
                }}>medecine holistique</Dropdown.Item>
              <Dropdown.Item key="edit" css={{
                  textTransform: "uppercase"
                }}>les Spécialiste</Dropdown.Item>
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
  );
}
