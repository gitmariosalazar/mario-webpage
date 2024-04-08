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
    {
      id_modules: 16,
      label: "Human Talent",
      icon: "pi pi-address-book",
      template: itemRenderer,
      shortcut: "⌘+2",
      items: [
        {
          id_submodules: 1,
          label: "Employee Management",
          icon: "pi pi-users",
          template: itemRenderer,
          shortcut: "⌘+1",
        },
        {
          id_submodules: 2,
          label: "Training and Development Management",
          icon: "pi pi-graduation-cap",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 3,
          label: "Recruitment and Selection Management",
          icon: "pi pi-user-plus",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 4,
          label: "Compensation and Benefits Management",
          icon: "pi pi-money-bill",
          template: itemRenderer,
          shortcut: "⌘+7",
        },
        {
          id_submodules: 5,
          label: "Absence and Time Management",
          icon: "pi pi-calendar",
          template: itemRenderer,
          shortcut: "⌘+0",
        },
      ],
    },

    {
      id_modules: 17,
      label: "Finance and Accounting",
      icon: "pi pi-calculator",
      template: itemRenderer,
      shortcut: "⌘+5",
      items: [
        {
          id_submodules: 6,
          label: "General Ledger Management",
          icon: "pi pi-chart-bar",
          template: itemRenderer,
          shortcut: "⌘+3",
        },
        {
          id_submodules: 7,
          label: "Accounts Payable Management",
          icon: "pi pi-file-invoice-dollar",
          template: itemRenderer,
          shortcut: "⌘+6",
        },
        {
          id_submodules: 8,
          label: "Accounts Receivable Management",
          icon: "pi pi-file-invoice-dollar",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
        {
          id_submodules: 9,
          label: "Budgeting and Forecasting",
          icon: "pi pi-chart-line",
          template: itemRenderer,
          shortcut: "⌘+7",
        },
        {
          id_submodules: 10,
          label: "Financial Reporting and Analysis",
          icon: "pi pi-chart-pie",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
      ],
    },
    {
      id_modules: 18,
      label: "Information and Communication technologies",
      icon: "pi pi-desktop",
      template: itemRenderer,
      shortcut: "⌘+2",
      items: [
        {
          id_submodules: 11,
          label: "Technology Infrastructure Management",
          icon: "pi pi-desktop",
          template: itemRenderer,
          shortcut: "⌘+7",
        },
        {
          id_submodules: 12,
          label: "Application and Software Development",
          icon: "pi pi-cog",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 13,
          label: "Information Security Management",
          icon: "pi pi-lock",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
        {
          id_submodules: 14,
          label: "Technical Support and Help Desk",
          icon: "pi pi-question-circle",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
        {
          id_submodules: 15,
          label: "ICT Project Management",
          icon: "pi pi-folder",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
      ],
    },
    {
      id_modules: 19,
      label: "Project Management",
      icon: "pi pi-folder",
      template: itemRenderer,
      shortcut: "⌘+1",
      items: [
        {
          id_submodules: 16,
          label: "Project Planning and Scheduling",
          icon: "pi pi-calendar-plus",
          template: itemRenderer,
          shortcut: "⌘+3",
        },
        {
          id_submodules: 17,
          label: "Resource Management",
          icon: "pi pi-user-plus",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 18,
          label: "Task Assignment and Tracking",
          icon: "pi pi-clipboard",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
        {
          id_submodules: 19,
          label: "Risk Management",
          icon: "pi pi-shield",
          template: itemRenderer,
          shortcut: "⌘+1",
        },
        {
          id_submodules: 20,
          label: "Communication and Collaboration",
          icon: "pi pi-comments-plus",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
      ],
    },
    {
      id_modules: 20,
      label: "Procurement",
      icon: "pi pi-truck",
      template: itemRenderer,
      shortcut: "⌘+2",
      items: [
        {
          id_submodules: 21,
          label: "Supplier Management",
          icon: "pi pi-id-card",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 22,
          label: "Purchase Order Processing",
          icon: "pi pi-shopping-cart",
          template: itemRenderer,
          shortcut: "⌘+6",
        },
        {
          id_submodules: 23,
          label: "Contract Management",
          icon: "pi pi-file",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
      ],
    },
    {
      id_modules: 21,
      label: "Manufacturing",
      icon: "pi pi-slack",
      template: itemRenderer,
      shortcut: "⌘+6",
      items: [
        {
          id_submodules: 24,
          label: "Production Planning",
          icon: "pi pi-chart-bar",
          template: itemRenderer,
          shortcut: "⌘+3",
        },
        {
          id_submodules: 25,
          label: "Inventory Management",
          icon: "pi pi-box",
          template: itemRenderer,
          shortcut: "⌘+6",
        },
        {
          id_submodules: 26,
          label: "Quality Control",
          icon: "pi pi-check",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
        {
          id_submodules: 27,
          label: "Supply Chain Management",
          icon: "pi pi-sitemap",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 28,
          label: "Equipment Maintenance",
          icon: "pi pi-tools",
          template: itemRenderer,
          shortcut: "⌘+3",
        },
      ],
    },
    {
      id_modules: 22,
      label: "Order Management",
      icon: "pi pi-cart-plus",
      template: itemRenderer,
      shortcut: "⌘+4",
      items: [
        {
          id_submodules: 29,
          label: "Order Processing",
          icon: "pi pi-credit-card",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 30,
          label: "Inventory Management",
          icon: "pi pi-cube",
          template: itemRenderer,
          shortcut: "⌘+0",
        },
        {
          id_submodules: 31,
          label: "Shipping and Delivery",
          icon: "pi pi-truck",
          template: itemRenderer,
          shortcut: "⌘+6",
        },
        {
          id_submodules: 32,
          label: "Returns and Exchanges",
          icon: "pi pi-refresh",
          template: itemRenderer,
          shortcut: "⌘+3",
        },
        {
          id_submodules: 33,
          label: "Customer Service",
          icon: "pi pi-headphones",
          template: itemRenderer,
          shortcut: "⌘+3",
        },
      ],
    },
    {
      id_modules: 23,
      label: "Warehouse Management",
      icon: "pi pi-warehouse",
      template: itemRenderer,
      shortcut: "⌘+0",
      items: [
        {
          id_submodules: 34,
          label: "Inventory Control",
          icon: "pi pi-archive",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
        {
          id_submodules: 35,
          label: "Stock Replenishment",
          icon: "pi pi-cart-plus",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 36,
          label: "Order Picking and Packing",
          icon: "pi pi-shopping-basket",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 37,
          label: "Storage Optimization",
          icon: "pi pi-chart-line",
          template: itemRenderer,
          shortcut: "⌘+1",
        },
        {
          id_submodules: 38,
          label: "Warehouse Security",
          icon: "pi pi-shield",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
      ],
    },
    {
      id_modules: 24,
      label: "Supply Chain Management",
      icon: "pi pi-truck",
      template: itemRenderer,
      shortcut: "⌘+5",
      items: [
        {
          id_submodules: 45,
          label: "Demand Planning",
          icon: "pi pi-chart-bar",
          template: itemRenderer,
          shortcut: "⌘+1",
        },
        {
          id_submodules: 46,
          label: "Inventory Management",
          icon: "pi pi-box",
          template: itemRenderer,
          shortcut: "⌘+1",
        },
        {
          id_submodules: 47,
          label: "Logistics and Distribution",
          icon: "pi pi-truck",
          template: itemRenderer,
          shortcut: "⌘+7",
        },
        {
          id_submodules: 48,
          label: "Supplier Relationship Management",
          icon: "pi pi-id-card",
          template: itemRenderer,
          shortcut: "⌘+0",
        },
        {
          id_submodules: 49,
          label: "Warehouse Management",
          icon: "pi pi-archive",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 50,
          label: "Risk Management",
          icon: "pi pi-exclamation-triangle",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
      ],
    },
    {
      id_modules: 25,
      label: "Customer Relationship Management (CRM)",
      icon: "pi pi-users",
      template: itemRenderer,
      shortcut: "⌘+3",
      items: [
        {
          id_submodules: 51,
          label: "Lead Management",
          icon: "pi pi-users",
          template: itemRenderer,
          shortcut: "⌘+0",
        },
        {
          id_submodules: 52,
          label: "Contact Management",
          icon: "pi pi-id-card",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 53,
          label: "Account Management",
          icon: "pi pi-briefcase",
          template: itemRenderer,
          shortcut: "⌘+7",
        },
        {
          id_submodules: 54,
          label: "Opportunity Management",
          icon: "pi pi-dollar",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 55,
          label: "Sales Pipeline Management",
          icon: "pi pi-chart-bar",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 56,
          label: "Marketing Automation",
          icon: "pi pi-chart-line",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 57,
          label: "Customer Support",
          icon: "pi pi-headphones",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 58,
          label: "Analytics and Reporting",
          icon: "pi pi-chart-pie",
          template: itemRenderer,
          shortcut: "⌘+6",
        },
        {
          id_submodules: 59,
          label: "Integration and Customization",
          icon: "pi pi-cog",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
      ],
    },
    {
      id_modules: 26,
      label: "Human Resources Management",
      icon: "pi pi-users",
      template: itemRenderer,
      shortcut: "⌘+2",
      items: [
        {
          id_submodules: 60,
          label: "Employee Management",
          icon: "pi pi-users",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 61,
          label: "Training and Development",
          icon: "pi pi-graduation-cap",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 62,
          label: "Recruitment and Selection",
          icon: "pi pi-user-plus",
          template: itemRenderer,
          shortcut: "⌘+3",
        },
        {
          id_submodules: 63,
          label: "Compensation and Benefits",
          icon: "pi pi-money-bill",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 64,
          label: "Performance Management",
          icon: "pi pi-check",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
      ],
    },
    {
      id_modules: 27,
      label: "Ecommerce",
      icon: "pi pi-shopping-cart",
      template: itemRenderer,
      shortcut: "⌘+5",
      items: [
        {
          id_submodules: 65,
          label: "Product Management",
          icon: "pi pi-shopping-cart",
          template: itemRenderer,
          shortcut: "⌘+7",
        },
        {
          id_submodules: 66,
          label: "Order Management",
          icon: "pi pi-shopping-basket",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 67,
          label: "Customer Management",
          icon: "pi pi-users",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 68,
          label: "Inventory Management",
          icon: "pi pi-box",
          template: itemRenderer,
          shortcut: "⌘+7",
        },
        {
          id_submodules: 69,
          label: "Payment Processing",
          icon: "pi pi-credit-card",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
        {
          id_submodules: 70,
          label: "Analytics and Reporting",
          icon: "pi pi-chart-line",
          template: itemRenderer,
          shortcut: "⌘+6",
        },
      ],
    },
    {
      id_modules: 28,
      label: "Big Data Management",
      icon: "pi pi-database",
      template: itemRenderer,
      shortcut: "⌘+9",
      items: [
        {
          id_submodules: 71,
          label: "Data Acquisition",
          icon: "pi pi-cloud-download",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 72,
          label: "Data Storage",
          icon: "pi pi-database",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 73,
          label: "Data Processing",
          icon: "pi pi-cog",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 74,
          label: "Data Analysis",
          icon: "pi pi-chart-bar",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 75,
          label: "Data Visualization",
          icon: "pi pi-chart-line",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
        {
          id_submodules: 76,
          label: "Data Governance",
          icon: "pi pi-shield",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
        {
          id_submodules: 77,
          label: "Data Security",
          icon: "pi pi-lock",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
        {
          id_submodules: 78,
          label: "Data Integration",
          icon: "pi pi-arrows-compress",
          template: itemRenderer,
          shortcut: "⌘+3",
        },
      ],
    },
    {
      id_modules: 29,
      label: "Salses & Marketing",
      icon: "pi pi-chart-line",
      template: itemRenderer,
      shortcut: "⌘+5",
      items: [
        {
          id_submodules: 79,
          label: "Lead Generation",
          icon: "pi pi-users",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
        {
          id_submodules: 80,
          label: "Opportunity Management",
          icon: "pi pi-dollar",
          template: itemRenderer,
          shortcut: "⌘+0",
        },
        {
          id_submodules: 81,
          label: "Sales Pipeline Management",
          icon: "pi pi-chart-bar",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 82,
          label: "Marketing Campaigns",
          icon: "pi pi-bullhorn",
          template: itemRenderer,
          shortcut: "⌘+1",
        },
        {
          id_submodules: 83,
          label: "Customer Relationship Management (CRM)",
          icon: "pi pi-id-card",
          template: itemRenderer,
          shortcut: "⌘+5",
        },
        {
          id_submodules: 84,
          label: "Social Media Management",
          icon: "pi pi-share-alt",
          template: itemRenderer,
          shortcut: "⌘+2",
        },
        {
          id_submodules: 85,
          label: "Analytics and Reporting",
          icon: "pi pi-chart-line",
          template: itemRenderer,
          shortcut: "⌘+0",
        },
      ],
    },
    {
      id_modules: 30,
      label: "Service & Maintenance",
      icon: "pi pi-objects-column",
      template: itemRenderer,
      shortcut: "⌘+8",
      items: [
        {
          id_submodules: 86,
          label: "Work Order Management",
          icon: "pi pi-ticket",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
        {
          id_submodules: 87,
          label: "Asset Management",
          icon: "pi pi-briefcase",
          template: itemRenderer,
          shortcut: "⌘+0",
        },
        {
          id_submodules: 88,
          label: "Preventive Maintenance",
          icon: "pi pi-calendar",
          template: itemRenderer,
          shortcut: "⌘+9",
        },
        {
          id_submodules: 89,
          label: "Repair Management",
          icon: "pi pi-wrench",
          template: itemRenderer,
          shortcut: "⌘+6",
        },
        {
          id_submodules: 90,
          label: "Field Service Management",
          icon: "pi pi-map-marker",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 91,
          label: "Inventory Management",
          icon: "pi pi-archive",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
      ],
    },
    {
      id_modules: 31,
      label: "Business Intelligence",
      icon: "pi pi-shop",
      template: itemRenderer,
      shortcut: "⌘+5",
      items: [
        {
          id_submodules: 92,
          label: "Data Integration",
          icon: "pi pi-arrows-compress",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
        {
          id_submodules: 93,
          label: "Data Warehousing",
          icon: "pi pi-database",
          template: itemRenderer,
          shortcut: "⌘+7",
        },
        {
          id_submodules: 94,
          label: "Data Analysis",
          icon: "pi pi-chart-bar",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
        {
          id_submodules: 95,
          label: "Data Visualization",
          icon: "pi pi-chart-line",
          template: itemRenderer,
          shortcut: "⌘+8",
        },
        {
          id_submodules: 96,
          label: "Reporting and Dashboards",
          icon: "pi pi-dashboard",
          template: itemRenderer,
          shortcut: "⌘+4",
        },
      ],
    },
  ];

  /*
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
*/
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
              <div className="flex flex-column h-full">
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
                  <div className="card flex justify-content-center sidebar">
                    <PanelMenu model={items} className="w-full md:w-20rem" />
                  </div>
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
