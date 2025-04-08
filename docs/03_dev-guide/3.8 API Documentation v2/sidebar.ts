import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "03_dev-guide/3.8 API Documentation v2/drand-http-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-chains",
          label: "/v2/chains",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-chains-chain-hash-info",
          label: "/v2/chains/:chain-hash/info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-chains-chain-hash-health",
          label: "/v2/chains/:chain-hash/health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-chains-chain-hash-rounds-round",
          label: "/v2/chains/:chain-hash/rounds/:round",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-chains-chain-hash-rounds-latest",
          label: "/v2/chains/:chain-hash/rounds/latest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-chains-chain-hash-rounds-next",
          label: "/v2/chains/:chain-hash/rounds/next",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-beacons",
          label: "/v2/beacons",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-beacons-beacon-id-info",
          label: "/v2/beacons/:beaconID/info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-beacons-beacon-id-health",
          label: "/v2/beacons/:beaconID/health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-beacons-beacon-id-rounds-round",
          label: "/v2/beacons/:beaconID/rounds/:round",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-beacons-beacon-id-rounds-latest",
          label: "/v2/beacons/:beaconID/rounds/latest",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "03_dev-guide/3.8 API Documentation v2/v-2-beacons-beacon-id-rounds-next",
          label: "/v2/beacons/:beaconID/rounds/next",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
