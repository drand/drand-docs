import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "dev-guide/API Documentation v1/drand-http-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "dev-guide/API Documentation v1/chains",
          label: "/chains",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dev-guide/API Documentation v1/chain-hash-info",
          label: "/:chain-hash/info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dev-guide/API Documentation v1/chain-hash-public-latest",
          label: "/:chain-hash/public/latest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dev-guide/API Documentation v1/chain-hash-public-round",
          label: "/:chain-hash/public/:round",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dev-guide/API Documentation v1/health",
          label: "/health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dev-guide/API Documentation v1/public-latest",
          label: "/public/latest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dev-guide/API Documentation v1/public-round",
          label: "/public/:round",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "dev-guide/API Documentation v1/info",
          label: "/info",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
