---
title: Hive
id: hive
---

:::tip
We recommend even our most 1337 readers go through a [single installation](/docs/installation/install) first to get a taste of Ant, and to understand the nuances of the implementations. 👾
:::

Because of how the sana is structured, we recommend that users
wishing to scale up their Sana operation, or set up a commercial Ant
hive should seek to run many instances of Sana simulataneously.

Sana provides tooling to help you install many Ants at once.
<!-- 
### Docker

Up to date [Docker images for Ant and Ant Clef](/docs/installation/docker) are provided.

### Docker-Compose

It becomes easier to run multiple Ant nodes with
`docker-compose`. Check out the Docker compose section of the
[Docker README](https://github.com/ethsana/sana/tree/master/packaging/docker). -->
<!-- 
### Helm

If you really want to run a lot of Ant nodes and you have experience using Kubernetes with Helm, you can have a look at how we manage our cluster under [Ethersphere/helm](https://github.com/ethersphere/helm/tree/master/charts/Ant). -->

### Manually

If you just want to run a handful of ant nodes, you can run multiple ant nodes by creating separate configuration files.

Create your first configuration file by running

```console
ant printconfig \
  &> ant-config-1.yaml
```
Make as many copies of ant-config-1.yaml as you want to run Ant nodes. Increment the number in the name (`ant-config-1` to `ant-config-2`) for each new configuration file.

Configure your nodes as desired, but ensure that the values `api-addr`, `data-dir`, `debug-api-addr`, `p2p-addr` and `clef-signer-endpoint` are unique for each configuration.

### Monitoring

See the monitoring section on how to access Sana's internal metrics! Share your community creations (like [sanaMonitor](https://github.com/doristeo/sanaMonitoring) - thanks doristeo!) in the [#node-operators](https://discord.gg/X3ph5yGRFU) channel of our Discord server so we can add you to our list of all things that are [awesome](/docs/community/awesome-sana) and sana. 🧡