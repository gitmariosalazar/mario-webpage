import { useState, useRef } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { StyleClass } from "primereact/StyleClass";

import "./css/sidebar.css";
import avatar_logo from "./img/LogoMario.png";
import mario from "./img/MarioSalazar.jpeg";

export default function HeadlessDemo() {
  const [visible, setVisible] = useState(false);
  const btnRef1 = useRef(null);
  const btnRef2 = useRef(null);
  const btnRef3 = useRef(null);
  const btnRef4 = useRef(null);

  return (
    <div className="card flex justify-content-center">
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        content={({ closeIconRef, hide }) => (
          <div className="min-h-screen flex relative lg:static surface-ground">
            <div
              id="app-sidebar-2"
              className="surface-section h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border select-none"
              style={{ width: "280px" }}
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

                <div className="overflow-y-auto">
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef1}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef1}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">FAVORITES</span>
                          <i className="pi pi-chevron-down"></i>
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-home mr-2"></i>
                            <span className="font-medium">Dashboard</span>
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-bookmark mr-2"></i>
                            <span className="font-medium">Bookmarks</span>
                          </a>
                        </li>
                        <li>
                          <StyleClass
                            nodeRef={btnRef2}
                            selector="@next"
                            enterClassName="hidden"
                            enterActiveClassName="slidedown"
                            leaveToClassName="hidden"
                            leaveActiveClassName="slideup"
                          >
                            <a
                              ref={btnRef2}
                              className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                            >
                              <i className="pi pi-chart-line mr-2"></i>
                              <span className="font-medium">Reports</span>
                              <i className="pi pi-chevron-down ml-auto mr-1"></i>
                            </a>
                          </StyleClass>
                          <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                            <li>
                              <StyleClass
                                nodeRef={btnRef3}
                                selector="@next"
                                enterClassName="hidden"
                                enterActiveClassName="slidedown"
                                leaveToClassName="hidden"
                                leaveActiveClassName="slideup"
                              >
                                <a
                                  ref={btnRef3}
                                  className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full"
                                >
                                  <i className="pi pi-chart-line mr-2"></i>
                                  <span className="font-medium">Revenue</span>
                                  <i className="pi pi-chevron-down ml-auto mr-1"></i>
                                </a>
                              </StyleClass>
                              <ul className="list-none py-0 pl-3 pr-0 m-0 hidden overflow-y-hidden transition-all transition-duration-400 transition-ease-in-out">
                                <li>
                                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-table mr-2"></i>
                                    <span className="font-medium">View</span>
                                  </a>
                                </li>
                                <li>
                                  <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                    <i className="pi pi-search mr-2"></i>
                                    <span className="font-medium">Search</span>
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                                <i className="pi pi-chart-line mr-2"></i>
                                <span className="font-medium">Expenses</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-users mr-2"></i>
                            <span className="font-medium">Team</span>
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-comments mr-2"></i>
                            <span className="font-medium">Messages</span>
                            <span
                              className="inline-flex align-items-center justify-content-center ml-auto bg-blue-500 text-0 border-circle"
                              style={{ minWidth: "1.5rem", height: "1.5rem" }}
                            >
                              3
                            </span>
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-calendar mr-2"></i>
                            <span className="font-medium">Calendar</span>
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="list-none p-3 m-0">
                    <li>
                      <StyleClass
                        nodeRef={btnRef4}
                        selector="@next"
                        enterClassName="hidden"
                        enterActiveClassName="slidedown"
                        leaveToClassName="hidden"
                        leaveActiveClassName="slideup"
                      >
                        <div
                          ref={btnRef4}
                          className="p-ripple p-3 flex align-items-center justify-content-between text-600 cursor-pointer"
                        >
                          <span className="font-medium">APPLICATION</span>
                          <i className="pi pi-chevron-down"></i>
                        </div>
                      </StyleClass>
                      <ul className="list-none p-0 m-0 overflow-hidden">
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-folder mr-2"></i>
                            <span className="font-medium">Projects</span>
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-chart-bar mr-2"></i>
                            <span className="font-medium">Performance</span>
                          </a>
                        </li>
                        <li>
                          <a className="p-ripple flex align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full">
                            <i className="pi pi-cog mr-2"></i>
                            <span className="font-medium">Settings</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="mt-auto">
                  <hr className="mb-3 mx-3 border-top-3 border-none surface-border" />
                  <a className="m-3 flex align-items-center cursor-pointer p-3 gap-2 border-round text-700 hover:surface-100 transition-duration-150 transition-colors p-ripple">
                    <Avatar image={mario} shape="circle" />
                    <span className="font-bold">Mario Salazar</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      ></Sidebar>
      <Button
        icon="pi pi-align-justify"
        tooltip="Open Menu"
        tooltipOptions={{ position: "mouse" }}
        onClick={() => setVisible(true)}
      />
    </div>
  );
}
