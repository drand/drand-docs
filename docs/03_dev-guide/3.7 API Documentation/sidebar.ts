import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "03_dev-guide/3.7 API Documentation/drand-http-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "03_dev-guide/3.7 API Documentation/list-available-chains",
          label: "List available chains",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.7 API Documentation/get-chain-information",
          label: "Get chain information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.7 API Documentation/get-the-latest-randomness",
          label: "Get the latest randomness",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.7 API Documentation/get-chain-specific-randomness-for-a-round",
          label: "Get chain-specific randomness for a round",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
