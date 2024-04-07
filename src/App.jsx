import { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { PanelMenu } from "primereact/panelmenu";
import { Badge } from "primereact/badge";
import { SpeedDial } from "primereact/speeddial";
import "./css/sidebar.css";
import avatar_logo from "./img/LogoMario.png";
import mario from "./img/MarioSalazar.jpeg";

export default function HeadlessDemo() {
  const [visible, setVisible] = useState(false);

  const itemRenderer = (item, options) => (
    <a
      className="flex align-items-center px-3 py-2 cursor-pointer"
      onClick={options.onClick}
    >
      <span className={`${item.icon} text-primary`} />
      <span className={`mx-2 ${item.items && "font-semibold"}`}>
        {item.label}
      </span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {item.shortcut && (
        <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
          {item.shortcut}
        </span>
      )}
    </a>
  );

  const items2 = [
    {
      label: "Add",
      icon: "pi pi-pencil",
    },
    {
      label: "Update",
      icon: "pi pi-refresh",
    },
    {
      label: "Delete",
      icon: "pi pi-trash",
    },
    {
      label: "Upload",
      icon: "pi pi-upload",
    },
    {
      label: "React Website",
      icon: "pi pi-external-link",
    },
  ];

  const items = [
    {
      label: "Mail",
      icon: "pi pi-envelope",
      badge: 5,
      template: itemRenderer,
      items: [
        {
          label: "Compose",
          icon: "pi pi-file-edit",
          shortcut: "⌘+N",
          template: itemRenderer,
        },
        {
          label: "Inbox",
          icon: "pi pi-inbox",
          badge: 5,
          template: itemRenderer,
        },
        {
          label: "Sent",
          icon: "pi pi-send",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
        {
          label: "Trash",
          icon: "pi pi-trash",
          shortcut: "⌘+T",
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Reports",
      icon: "pi pi-chart-bar",
      shortcut: "⌘+R",
      template: itemRenderer,
      items: [
        {
          label: "Sales",
          icon: "pi pi-chart-line",
          badge: 3,
          template: itemRenderer,
        },
        {
          label: "Products",
          icon: "pi pi-list",
          badge: 6,
          template: itemRenderer,
        },
      ],
    },
    {
      label: "Profile",
      icon: "pi pi-user",
      shortcut: "⌘+W",
      template: itemRenderer,
      items: [
        {
          label: "Settings",
          icon: "pi pi-cog",
          shortcut: "⌘+O",
          template: itemRenderer,
        },
        {
          label: "Privacy",
          icon: "pi pi-shield",
          shortcut: "⌘+P",
          template: itemRenderer,
        },
      ],
    },
  ];

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={({ closeIconRef, hide }) => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "290px" }}
            >
              <div className="flex flex-column h-full sidebar">
                <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                  <span className="inline-flex align-items-center gap-2">
                    <div className="div-logo">
                      <img
                        alt="logo"
                        src={avatar_logo}
                        height="40"
                        className="mr-2 logo-mario"
                      ></img>
                    </div>
                    <span className="font-semibold text-2xl text-primary">
                      Mario Salazar S.A
                    </span>
                  </span>

                  <span>
                    <Button
                      type="button"
                      ref={closeIconRef}
                      onClick={(e) => hide(e)}
                      icon="pi pi-times"
                      rounded
                      outlined
                      className="h-2rem w-2rem"
                    ></Button>
                  </span>
                </div>
                <hr className="mb-3 mx-3 border-top-3 border-none surface-border" />
                <div className="card flex justify-content-center sidebar">
                  <PanelMenu model={items} className="w-full md:w-20rem" />
                </div>
                <div className="mt-auto">
                  <hr className="mb-3 mx-3 border-top-3 border-none surface-border" />

                  <div className="flex align-items-center justify-content-between px-4 pt-3 flex-shrink-0">
                    <span className="inline-flex align-items-center gap-2">
                      <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                        <Avatar image={mario} shape="circle" tooltip="Hola" />
                        <span className="font-bold">Mario Salazar</span>
                      </a>
                    </span>

                    <span>
                      <div className="card">
                        <div>
                          <SpeedDial
                            model={items2}
                            radius={80}
                            type="semi-circle"
                            direction="up"
                            style={{
                              left: "calc(85% - 2rem)",
                              bottom: "calc(5% - 1rem)",
                            }}
                          />
                        </div>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
      <Button icon="pi pi-align-justify" onClick={() => setVisible(true)} />
    </div>
  );
}
