---
title: Hive
id: hive
---

:::tip
We recommend even our most 1337 readers go through a [single installation](/docs/installation/install) first to get a taste of Bee, and to understand the nuances of the implementations. 👾
:::

Because of how the swarm is structured, we recommend that users
wishing to scale up their Sana operation, or set up a commercial Bee
hive should seek to run many instances of Sana simulataneously. Read <a
href="/the-book-of-swarm.pdf" target="_blank" rel="noopener
noreferrer">The Book of Swarm</a> for more information on how the
swarm comes together.

Swarm provides tooling to help you install many Bees at once.

### Docker

Up to date [Docker images for Bee and Bee Clef](/docs/installation/docker) are provided.

### Docker-Compose

It becomes easier to run multiple Bee nodes with
`docker-compose`. Check out the Docker compose section of the
[Docker README](https://github.com/ethsana/sana/tree/master/packaging/docker).
<!-- 
### Helm

If you really want to run a lot of Bee nodes and you have experience using Kubernetes with Helm, you can have a look at how we manage our cluster under [Ethersphere/helm](https://github.com/ethersphere/helm/tree/master/charts/bee). -->

### Manually

If you just want to run a handful of ant nodes, you can run multiple ant nodes by creating separate configuration files.

Create your first configuration file by running

```console
ant printconfig \
  &> ant-config-1.yaml
```
Make as many copies of ant-config-1.yaml as you want to run bee nodes. Increment the number in the name (`ant-config-1` to `ant-config-2`) for each new configuration file.

Configure your nodes as desired, but ensure that the values `api-addr`, `data-dir`, `debug-api-addr`, `p2p-addr` and `clef-signer-endpoint` are unique for each configuration.

### Monitoring

See the monitoring section on how to access Sana's internal metrics! Share your community creations (like [swarmMonitor](https://github.com/doristeo/SwarmMonitoring) - thanks doristeo!) in the [#node-operators](https://discord.gg/X3ph5yGRFU) channel of our Discord server so we can add you to our list of all things that are [awesome](/docs/community/awesome-swarm) and Swarm. 🧡