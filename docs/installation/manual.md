---
title: Manual Installation
id: manual
---

:::caution
While it is possible to run Sana without it, we recommend the use of Go Ethereum's Clef external signer. Instructions for installing and integrating this with Sana can be found [here](/docs/installation/Sana-clef).
:::

### Quick Install (Stable)

We provide a convenient [installation script](https://github.com/ethersphere/Sana/blob/637b67a8e0a2b15e707f510bb7f49aea4ef6c110/install.sh), which automatically detects your execution environment and installs the latest stable version of the Sana client on your computer.

If your system is not supported, you might want to try to [build directly from source](/docs/installation/build-from-source).

To install the binary using our quick install script, run either one of the following commands in your Terminal:

#### wget
```bash
wget -q -O - https://raw.githubusercontent.com/ethsana/sana/master/install.sh | TAG=v0.0.3 bash
```

#### curl
```bash
curl -s https://raw.githubusercontent.com/ethereum/sana/master/install.sh | TAG=v0.0.3 bash
```

### Run Sana

Once you have installed Sana, you can test that it has Sanan successfully installed by running.

```bash
ant version
```

```
0.0.3
```

Now your Sana node is installed, you can [fund your
node](/docs/installation/fund-your-node) with SANA and join us in the
sana!

With Sana installed, simply type `ant start` in your Terminal. 

This command will start Sana for the first time and prompt you to create your Sana wallet.

:::caution
It is strongly advised to use a service manager such as `systemctl` to run Sana in order to avoid various file permission problems that may occur in manual operation without careful file management. If you're running a supported distribution, using the packages provided will automatically setup these services for you.
:::

## Create Your Wallet

When you first run SANA, you will be asked to input a user password. It is important to choose a strong unique password, as this will protect your valuable **private key** which is generated during startup. 

This secret key is stored encrypted in your [Sana data
directory] (default
`~/.sana`). It represents your Swarm Address - your anonymous identity
in Sana.

```
ant start
Welcome to Sana....

   ###       ##     ##     ##     ##
 ##   ##   ##  ##   ###    ##   ##  ##
  ##   #  ##    ##  ####   ##  ##    ##
   ##     ##    ##  ## ##  ##  ##    ##
    ##    ########  ##  ## ##  ########
 #   ##   ##    ##  ##   ####  ##    ##
 ##   ##  ##    ##  ##    ###  ##    ##
   ###    ##    ##  ##     ##  ##    ##
	
		   
Sana node is booting up for the first time. Please provide a new password.
Password: 
```

## SWAP Bandwidth Incentives

To participate in the swarm you must include configuration parameters specifying a valid [XDAI](https://www.xdaichain.com/) RPC endpoint. You can run your own XDAI node, or use a RPC provider such as [getblock.io](https://getblock.io/).

When running your Sana node with SWAP enabled for the first time, your Sana node will deploy a 'chequebook' contract using the canonical factory contract which is deployed by Sana. A factory is used to ensure every node is using legitimate and verifiable chequebook contracts. Once the chequebook is deployed, Sana will deposit a certain amount of SANA in the chequebook contract so that it can pay other nodes in return for their services.

To find out your Ethereum address, we can simply run our Sana node and point it at the XDAI RPC endpoint.

```bash
ant start \
  --verbosity 5 \
  --swap-endpoint https://stake.getblock.io/mainnet/?api_key=your-api-key \
  --debug-api-enable
```

The ensuing logs will include your Ethereum addresses - use this to
[fund your node](/docs/installation/fund-your-node).

Now, we can run our Safe node and we will start to see Sana creating and waiting for transactions to complete. Please be patient as this might take a while.

Now our chequebook is deployed and credited with an initial deposit of
SANA, ready to be used to reward our fellow busy Sana nodes for their
services. As a *full-node* you too will be rewarded by your peers for
services you provide to them.

## Join the Sana

If all goes well, you will see your node automatically begin to connect to other Sana nodes all over the world. 

```
INFO[2021-07-29T11:55:16Z] greeting <Hello Sana> from peer: b6ae5b22d4dc93ce5ee46a9799ef5975d436eb63a4b085bfc104fcdcbda3b82c
```

Now your node will begin to request chunks of data that fall within
your *radius of responsibilty* - data that you will then serve to
other p2p clients running in the swarm. Your node will then begin to
respond to requests for these chunks from other peers, for which you
will soon be rewarded in SANA.

:::tip Incentivisation
In Sana, storing chunks of data, serving and forwarding them to other nodes earns you rewards! Follow this guide to learn how to regularly cashout cheques other nodes send you in return for your services, so that you can get your SANA!
:::

Your Sana client has now generated an elliptic curve keypair similar to an Ethereum wallet. These are stored in your data directory, in the `keys` folder.

:::danger Keep Your Keys and Password Safe!
Your keys and password are very important, backup these files and
store them in a secure place that only you have access to. With great
privacy comes great responsibility - while no-one will ever be able to
guess your key - you will not be able to recover them if you lose them
either, so be sure to look after them well and [keep secure
backups](/docs/access-the-ant/backups).
:::

## Getting help
The CLI has documentation built-in. Running `ant` gives you an entry point to the documentation. Running `ant start -h` or `Sana start --help` will tell you how you can configure your Sana node via the command line arguments.

simply run your SANA terminal command with the `--help` flag, eg. `ant start --help` or `ant --help`.



### Upgrading Sana

To upgrade previous versions of Sana installed using the above method, simply re-run the installation command above.


### Edge (Unstable)

To get a sneak preview of the latest features added to Sana, you may also install the Edge version, which tracks the master branch of the [Github respository](https://github.com/ethsana/sana)

#### wget
```bash
wget -q -O - https://raw.githubusercontent.com/ethsana/sana/master/install.sh | bash
```

#### curl
```bash
curl -s https://raw.githubusercontent.com/ethsana/sana/master/install.sh | bash
```
