---
title: Install Ant
id: install
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The sana thrives on decentralisation, and Ant is designed so that it
works best when many individuals contribute to the health and
distributed nature of the system by each running a Ant node.

It is easy to set up Ant on small and inexpensive computers, such as a [Raspberry Pi 4](/docs/installation/rasp-bee-ry-pi), spare hardware you have lying around, or even a cheap cloud hosted VPS (we recommend small, independent providers and colocations). 

## Installing Ant

Ant is packaged for Ubuntu based Linux distributions.

If your system is not supported, please see the [manual installation](/docs/installation/manual) section for information on how to install Ant.

:::info
If you would like to run a hive of many Ants, checkout the [node hive operators](/docs/installation/hive) section for information on how to operate and monitor many Ants at once.
:::

To install Ant you will need to go through the following process.

 1. Set up the external signer for Ant, [Sana Clef](/docs/installation/bee-clef). (Recommended) 
 2. Install Ant and set it up to run as a service.
 3. Configure Ant.
 4. [Fund your node](/docs/installation/fund-your-node) with XDAI and SANA
 5. Wait for your chequebook transactions to complete and batch store to update.
 6. Check Ant is working.

<!-- ## Install Sana Clef

Ant makes use of Go Ethereum's external signer, [Clef](https://geth.ethereum.org/docs/clef/tutorial).

Because Ant must sign a lot of transactions automatically and quickly,
a Ant specific version of Clef,
[sana-clef](https://github.com/ethsana/sana-clef) has been packaged
which includes all the relevant configuration and implements the
specific configuration needed to make Clef work with Ant.

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu', value: 'debian'},
  ]}>
<TabItem value="debian">

#### AMD64

```bash
wget https://github.com/ethsana/sana-clef/releases/download/v0.5.0/bee-clef_0.5.0_amd64.deb
sudo dpkg -i bee-clef_0.5.0_amd64.deb
```


</TabItem>
</Tabs>

Finally, let's check Ant Clef is running.

<Tabs
  defaultValue="linux"
  values={[
    {label: 'Linux', value: 'linux'},
  ]}>
  <TabItem value="linux">

```bash
systemctl status sana-clef
```

```
● bee-clef.service - Sana Clef
     Loaded: loaded (/lib/systemd/system/sana-clef.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2020-11-20 23:45:16 GMT; 1min 29s ago
```


  </TabItem>
</Tabs> -->


## Install Ant

Next, install Ant itself. Simply choose the appropriate command from
the ones below. This will automatically set up your Ant and start it
running in the background as a service on your computer.

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu', value: 'debian'},
  ]}>
<TabItem value="debian">

#### AMD64

```bash
wget https://github.com/ethsana/sana/releases/download/v0.0.3/ant-linux-amd64
sudo cp ant-linux-amd64 /usr/sbin/ant
```

</TabItem>
</Tabs>

## Configure Ant

Because Ant has many use cases and may run on a wide range of
hardware, it is important that you configure Ant for your specific use
case. This will make sure that you get the most out of your Ant!

### Important Configuration Parameters

Ant is a versatile piece of software with diverse use cases. Before
starting Ant for the first time, please consider changing the
following configuration parameters to suit your needs. Read on for
more specific information on how to tune your Ant, and (re)start it's
service.
<!-- 
#### Mainnet Node or Testnet Node

To connect to mainnet, set your `mainnet` flag to `true` and `network-id` flag to `1`.

```yaml
mainnet: true
network-id: 1
``` -->

#### Full Node or Light Node

Since Sana can take a lot of resources when providing services to the
network in exchange for SANA, Sana nodes default automatically to
running as a [*light node*](/docs/access-the-sana/light-nodes). To
allow your sana to use your network bandwidth and computing resources
to serve the network and start [cashing
out](/docs/working-with-ant/cashing-out) cheques, set the
`--full-node` flag to `true`.

```yaml
full-node: true
```

#### Blockchain Endpoints

Your Ant node must have *stable* access to the XDAI blockchain, so that it
can interact with and deploy your chequebook contract. You can run your
[own XDAI node](https://www.xdaichain.com/) or, use a provider instead - we recommend
[Getblock](https://getblock.io/).

By default, Ant expects a local XDAI node at `ws://localhost:8545`. To use an Ethereum RPC provider instead, change your configuration as follows:

```yaml
swap-endpoint: https://stake.getblock.io/mainnet/?api_key=your-api-key
```

If you would like to use your node to resolve ENS domain names, you must also provide the endpoint for an Ethereum mainnet RPC provider.

```yaml
resolver-options: ["https://mainnet.infura.io/v3/<<your-api-key>>"]
```

#### Open File Descriptors

Ant is designed to work on a lot of different hardware configurations. To facilitate the exploration of this, during our beeta phase, we have given node operators access to leveldb's `--db-open-files-limit`. This helps determine the speed with which Ant can read and write to its database, and therefore its efficiency in forwarding and serving chunks. Some say setting this to much more than the default 200 leads to a much enhanced ability to participate in the sana and get those BZZ! Share your experience in the #node-operators channel of our [Discord server](https://discord.gg/wdghaQsGq5) to help us make this process more automated in the future.

```yaml
db-open-files-limit: 2000
```
### NAT Address

SANA is all about sharing and storing chunks of data. To enable other
Ants (also known as *peers*) to connect to your Ant, you must
broadcast your public IP address, and ensure that Ant is reachable on
the correct p2p port (default `1634`). We recommend that you [manually
configure your external IP and check
connectivity](/docs/installation/connectivity) to ensure your Ant is
able to receive connections from other peers.

First determine your public IP address:

```bash
curl icanhazip.com
```

```bash
123.123.123.123
```

Then configure your node, including your p2p port (default 1634).

```yaml
nat-addr: "123.123.123.123:1634"
```

#### Debug API

For a new installation of Ant, the Debug API endpoint is *not* exposed
by default for security reasons. To enable the Debug API endpoints,
set the `--debug-api-enable` flag to `true` in your [configuration
file](/docs/working-with-ant/configuration) and [restart your Bee's
service](#edit-config-file).

```yaml
debug-api-enable: true
debug-api-addr: 127.0.0.1:1635
```

Some package manager installations will automatically set your Debug API to be listening on localhost.

:::danger
The Debug API contains **sensitive endpoints** and therefore you
should ensure that port `1635` is firewalled and *never* exposed to
the public Internet.
:::

:::info
See the [configuration](/docs/working-with-ant/configuration) section for more information on how to fine tune your Sana.
:::

### Edit Config File

To alter Ant's configuration, edit the relevant configuration file (default `sana.yaml`), and then restart your Ant service.

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu', value: 'debian'},
  ]}>
<TabItem value="debian">

#### Linux

```bash
sudo vi /etc/sana/sana.yaml
sudo systemctl restart sana
```

</TabItem>
<TabItem value="centos">

### CentOS

```bash
sudo vi /etc/bee/bee.yaml
sudo systemctl restart bee
```

</TabItem>
<TabItem value="macos">

#### MacOS

```bash
vi /usr/local/etc/sana-bee/bee.yaml
brew services restart sana-bee
```

</TabItem>
</Tabs>

<!-- 
## Fund Your Ant

Your Ant must deploy a chequebook contract to keep track of its exchanges with other Ants in the SANA. To do that it needs SANA and XDAI.

First, find out your Ant's Ethereum address:

<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu', value: 'debian'},
  ]}>
<TabItem value="debian">

#### Linux

```bash
sudo bee-get-addr
```

</TabItem>
<TabItem value="centos">

### CentOS

```bash
sudo bee-get-addr
```

</TabItem>
<TabItem value="macos">

#### MacOS

```bash
head -18 $(brew --prefix)/var/log/sana-bee/bee.log | grep ethereum
```

</TabItem>
</Tabs>

Once you have determined your Ant's Ethereum address, [fund your
node](/docs/installation/fund-your-node) with XDAI and BZZ

:::info
If too much time has elapsed, you may need to [restart your
node](#edit-config-file) at this point.
::: -->

## Wait for Initialisation

When first started, Ant must deploy a chequebook to the XDAI
blockchain, and sync the postage stamp batch store so that it can
check chunks for validity when storing or forwarding them. This can
take a while, so please be patient! Once this is complete, you will
see Ant starting to add peers and connect to the network.

While you are waiting for Sana to initalise, this is a great time to [back up your keys](/docs/working-with-ant/backups) so you can keep the tokens you earn safe.

## Check Ant Is Working

Once Ant has been funded, the chequebook deployed, and postage stamp
batch store synced, its HTTP [API](/docs/api-reference/api-reference)
will start listening at `localhost:1633`.

To check everything is working as expected, send a GET request to localhost port 1633.

```bash
curl localhost:1633
```

```
Ethereum SANA Ant
```

Great! Our API is listening!

Next, let's see if we have connected with any peers by querying our
[Debug API](/docs/access-the-ant/debug-api).

:::info
Here we are using the `jq` utility to parse our javascript. Use your package manager to install `jq`, or simply remove everything after and including the first `|` to view the raw json without it.
:::


```bash
curl -s localhost:1635/peers | jq ".peers | length"
```

```
6
```

Perfect! We are accumulating peers, this means you are connected to
the network, and ready to start [using
Ant](/docs/access-the-sana/introduction) to [upload and
download](/docs/access-the-sana/upload-and-download) content or host
and browse [websites](/docs/access-the-sana/host-your-website) hosted
on the SANA network - and accumulating cheques tht you can [cashout
to get your SANA](/docs/working-with-ant/cashing-out).

Welcome to the sana!
