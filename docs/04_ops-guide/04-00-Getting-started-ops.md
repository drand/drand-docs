---
id: 4-0-getting-started-ops
title: "4.0 Getting Started - Ops"
description: A guide for drand node operators.
---
# 4.0 Getting Started - Operators

# Overview

A drand **Network** is composed of individual and independent drand **Nodes** that generate randomness by networking with other distributed nodes. The randomness is published to the world with the help of drand **Relays**.

## Key Objectives for League of Entropy Operators:

| Objective | Description |
| --- | --- |
| Security | Ensure a secure, DDoS-resistant stack that withstands targeted attacks without compromising private key material. |
| Performance | Provide a fast service that scales to serve hundreds of thousands of clients efficiently. |
| Diversity | Create a diverse setup with multiple endpoints and access methods to ensure reliable randomness consumption, even in degraded network conditions. |

[A high-level view of a simple drand stack](https://lh7-us.googleusercontent.com/oJ3VshPm9XDtJqI5qlUuC8cNQ1DOw6RtS-rP9q7JHwJMG8Z6IxgsvDLovQTUhLNIsbtJ-PG7vyoufZOj6DCZ6loOCMHKSbYh0QvRYbY2tVeOfilaewNm12lRoM18TK_OAADq5lsmydz_RRI1epWleyNtaKz4fKw)

A high-level view of a simple drand stack

[https://lh7-us.googleusercontent.com/0dTQEtQyYTdw8W8kzzKms5o2fx7XlXZIcZXXm7B2N0U7ZfXaHIquajtW4KlOm2Yg28zKcu3aItyAXEegPZ-IML4tR2Wr6vqFdmHqF1NWQL1ML7Bbdi-XQa6FFOnNQchbmkUn8nCX4gJ5SgjHjnjJYbqfiJ_lH8I](https://lh7-us.googleusercontent.com/0dTQEtQyYTdw8W8kzzKms5o2fx7XlXZIcZXXm7B2N0U7ZfXaHIquajtW4KlOm2Yg28zKcu3aItyAXEegPZ-IML4tR2Wr6vqFdmHqF1NWQL1ML7Bbdi-XQa6FFOnNQchbmkUn8nCX4gJ5SgjHjnjJYbqfiJ_lH8I)

# Guidelines for drand Nodes

- Must be isolated from the public internet.
- Whitelist incoming TLS-encrypted connections from other drand Nodes using a dedicated firewall instance, which can also perform TLS termination as needed.
- Outgoing connections should originate from static IP(s) that other operators can whitelist.
- drand nodes do not offer API service publicly; rely on drand Relays and CDNs.
- Whitelist or authenticate access from Relays and CDN endpoints.

# Guidelines for drand Relays

- Encourage the use of Relays to distribute randomness.
- Relays can provide an HTTP endpoint or use a libp2p-based PubSub system for distribution.
- Relays should be independent of the drand Node and not co-located on the same machine.
- PubSub-enabled relays should maintain a unique libp2p Peer ID.
- HTTP-enabled relays are stateless and can be horizontally scaled.

# Use of Content Distribution Networks (CDNs)

- Provide HTTP(S) API access to randomness using a CDN linked to Nodes. *Note: Do not use CDNs operated by other LoE members. (i.e. Cloudflare)*
- Configure CDN to cache drand HTTP endpoints, as drand produces immutable values periodically.
- Use dedicated HTTP-enabled Relays for CDN requests to minimize direct access to drand Nodes.

# Operation of a drand Stack

- Ensure a known set of node operators are responsible and reachable.
- Monitor infrastructure with extracted logs and pushed monitoring information.
- Ensure logs are collected externally and ensure both system level metrics as well as applications level metrics are monitored.
- Additionally, follow security recommendations below:

# Security Recommendations

| Area | Recommendations |
| --- | --- |
| SSH Access | - Use a bastion node for SSH access, whitelisting operator IPs or VPN endpoints.
- Disable sudo and root access on bastion nodes.
- Enforce key-based SSH login and disable password authentication. 
- Enable 2FA for all machine logins. 
- Use a pin-protected physical device (e.g. Yubikey) for SSH key storage. |
| Firewall Configuration | - Thoroughly test allowlist enforcement, allowing only incoming connections on the drand-grpc port. 
- Use dedicated reverse-proxy/firewall machines without exposing SSH access. 
- Ensure reverse proxies for HTTP-relays are on separate machines. |
| External Services | - Enable MFA for all infrastructure/cloud provider logins. 
- Rotate API keys frequently. 
- Limit user permissions and avoid shared logins. 
- Use an email list for main account notifications. |
| Drand Machines | - Ensure operating system is up-to-date with latest security patches.
- Run the drand node in isolation with dedicated system users. 
- Encrypt disks containing drand configuration files. 
- Limit external access strictly to operators. 
- Inform network partners immediately in case of compromise. |

# Resource Recommendations

| Resource | For a drand node | For a Publicly-accessible HTTP Relay |
| --- | --- | --- |
| Compute  | Comparable to x86-64 at the AWS ‘micro’ tier | Comparable to x86-64 at the AWS ‘micro’ tier |
| Storage | At least 64GB of persistent storage | N/A |
| Storage I/O | No special provisioning required | N/A |
| Network Bandwidth | Minimum 1Mbps of dedicated bandwidth | 100Mbps of network traffic |
| Memory | 32GB | 32GB to keep all rounds cached in memory |
| Hosting Capacity | At least 100Gbps of available peered or transit bandwidth | N/A |

# Monitoring Recommendations

| Area | Recommendations |
| --- | --- |
| Logs | • Collect and ship logs to an external service.
• Monitor log collection and notify operators if logs are not received.
• Enable pam_tty_audit for logging user actions.
• Collect and monitor load balancer/firewall/CDN logs. |
| Metrics | • Monitor common machine metrics (CPU, Disk usage, Memory, Bandwidth).
• Enable Prometheus metrics endpoints for drand applications.
• Scrape metrics locally and push to a remote service. |
| API Monitoring | • Monitor /health and /public/latest endpoints for node and relay health.
• Use /info endpoint for load-balancer health checks. |
| Alerts | Set up alerts for increased error log entries, failed metric pushes, panic lines, successful and failed SSH logins, CPU usage spikes, reboots, and application restarts. |
| Dashboards | Create dashboards for metrics like CPU, load, uptime, connections, memory usage, disk usage, API requests, beacon discrepancy, and process details. |

# Operation Recommendations

| Area | Recommendations |
| --- | --- |
| Deployments and Maintenance | • Communicate maintenance to partners and users.
• Avoid maintenance overlaps.
• Monitor log messages and dashboards during deployments. |
| Backups | • Securely back up key and group folders before network events.
• Regularly back up node configurations to prevent data loss. |
| CDN and HTTP Relays | • Never co-locate HTTP relays with the drand node.
• Use CDNs to cache responses and prevent direct DDoS attacks on the drand daemon.
• Limit HTTP relay traffic to CDN only. |
| Gossip Relays | • Ensure gossip relays are not co-located with drand nodes or HTTP relays.
• Configure dnsaddr entries for gossip relays.
• Protect gossip relay identities and monitor their performance. |
| Status Monitoring | • Monitor nodes using appropriate tools and report their status to the collective status page.
• Ensure latency monitoring is enabled and accessible by the League of Entropy. This refers to making GRPC exposed Prometheus metrics available for latency monitoring. Ensure your metrics are publicly accessible to enable comprehensive monitoring by the League of Entropy. |

---
