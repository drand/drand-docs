---
id: ops-metrics-guide
title: Metrics Guide
description: Learn about drand's metrics
slug: /operator/metrics/
---
# Metrics Guide

drand uses [Prometheus](https://prometheus.io/) instrumentation for helping operators monitor and understand the runtime behavior of system.

## **Local Metrics**

The local drand node exposes metrics on an HTTP server listening as specified by the `--metrics` command line flag. You can view the reported metrics in a browser at `http://localhost:<metrics port>/metrics`. This page includes

- The default Golang process metrics collected by Prometheus
- Statistics on the drand beacon and group behavior
- Statistics on the HTTP public listener request load if enabled.

## **Shared Group Metrics**

In addition to the metrics collected within the local node, the drand GRPC group protocol supports re-export and sharing of group metrics between group members. When a local metrics port is specified, metrics shared by other group members can be accessed at `http://localhost:<metrics port>/peer/<peer address>/metrics`. This will only include the drand beacon statistics shared by the remote peer, and does not include the process or internal health of the node. It is meant to allow better visibility when debugging network issues, and helping operators understand where problems originate.

## **Client Metrics**

The drand client is capable of collecting metrics on the health of the sources of randomness that it is connected to.

For each HTTP endpoint, every 10 seconds, the client sends "heartbeat" requests for the "current" randomness, wherein the requested "current" randomness round is calculated based on the current time and the genesis time of the drand network. The outcomes of these requests are used to generate the following metrics:

- *Heartbeat latency*: This is the duration, in milliseconds, between the time when the randomness response was received and the time when it was meant to be produced by the drand nodes (based on the genesis time of the network and the round number). The corresponding Prometheus metric is the gauge `client_http_heartbeat_latency`. In normal conditions, when the network latency is sub-second, one expects the heartbeat latency to be roughly evenly distributed between 0 and 30 seconds. This is caused by the fact that there are multiple heartbeats during a single round, which lasts 30 seconds, as well as the fact that each request blocks until the randomness becomes available. This metric is implemented in [[https://github.com/drand/drand/blob/master/client/http/metric.go#L59](https://github.com/drand/drand/blob/master/client/http/metric.go#L59)].
- *Heartbeat success and failure*: These are two counters, "success" and "failure", whose Prometheus names are `client_http_heartbeat_success` and `client_http_heartbeat_latency`. The success counter is increments after an HTTP request returns a successful response HTTP, otherwise the the failure counter is incremented. This metric is implemented in [[https://github.com/drand/drand/blob/master/client/http/metric.go#L50](https://github.com/drand/drand/blob/master/client/http/metric.go#L50)].

In addition, the client maintains a metric on its watch channel for randomness. This channel pushes latest randomness to the client as soon as it is available. The channel is implemented either by connecting to a gossip relay or by polling HTTP endpoints, if a relay is not specified. The relevant metric is:

- *Watch latency*: This is a Prometheus gauge measuring the duration between when a randomness round was received by the client and the time when it was produced by the drand nodes (as calculated based on round number and genesis time). The metric is implemented in [[https://github.com/drand/drand/blob/master/client/metric.go#L37](https://github.com/drand/drand/blob/master/client/metric.go#L37)].

All of the above measurements have two significant labels:

- The label `http_address` identifies the HTTP endpoint that is being queried by the client,
- The label `client_id` identifies the client itself.

---

## Tracing

In case you are interested in more detailled performance metrics, we support tracing and more information can be found in our Github repository in the [`development` instructions](https://github.com/drand/drand/blob/master/DEVELOPMENT.md#development-environment).