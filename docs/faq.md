---
title: FAQ
id: FAQ
---


## Connectivity

### Which p2p port does Ant use and which should I open in my router?

The default p2p port for Ant in 1634, please forward this using your router and allow traffic over your firewall as necessary. Ant also supports UPnP but it is recommended you do not use this protocol as it lacks security. For more detailed information see the connectivity section in the docs. https://docs.ethsana.org/docs/installation/connectivity


### How do I know if I am connected to other peers?

You may communicate with your Ant using it’s HTTP api. Type `curl http://localhost:1635/peers` at your command line to see a list of your peers.


### What does "Failed to connect to local host port 1635: Connection refused" mean?
Your node is not listening on port 1635, either the debug-api is not enabled, or it is not listening on localhost. Make sure your ant.yaml file has `debug-api-enable: true`



## Errors

### What does "could not connect to peer" mean?

“Could connect to peer can happen for various reasons.” One of the most common is that you have the identifier of a peer in your address book from a previous session. When trying to connect to this node again, the peer may no longer be online.


### What does "context deadline exceeded" error mean?

The "context deadline exceeded" is a non critical warning. It means that a node took unexpectedly long to respond a request from your node. Your node will automatically try again via another node. 


### How do I set up a blockchain endpoint?

- If you use "ant start" 
    - you can set it in your ant configuration under --swap-endpoint or ANT_SWAP_ENDPOINT
    - open ~/.ant.yaml
    - set `swap-endpoint: https://stake.getblock.io/mainnet/?api_key=your-api-key`


- If you use ant.service
    - you can set it in your ant configuration under --swap-endpoint or ANT_SWAP_ENDPOINT
    - open /etc/ant/ant.yaml
    - and then uncomment `swap-endpoint` configuration
    - and set it to `https://stake.getblock.io/mainnet/?api_key=your-api-key`
    - after that sudo systemctl restart ant


### How to export private keys from the node with ant-clef installed

If you are running Ant together with the Ant-Clef, you can type in the command line `ant-clef-keys` and that will store the .JSON file into your home folder and copy the password in your clipboard.


### I have ant-clef installed but I can't export private keys.
It happens quite a lot that ant-clef is installed, but getting the address from ant-clef-keys does not yield the same output as `:1635/addresses`

In this case, the user most likely does not have clef enabled in the configuration of the ant node.

This doesn't work for you? You get erorr -> `xclip: not found” or “Error: Can’t open display: (null)`

Try running the command below:
`sudo cat /var/lib/ant-clef/password`

You can then use that to import to Metamask or any other web3 wallet provider.


### How to export private keys from the node (without ant-clef)?

You can find insturction here in README section:
https://github.com/ethersphere/exportSanaKey

You can also follow to the mini-guide on the link below:
https://pastebee.com/?3b2a4cecafa21a7afcdd4d4f3d74fef1d5551acd91eb2d3a5b750dc9a161fbcf


### How to import ant node address to Metamask?

1. [export your ant node private keys](https://hackmd.io/tfKVeHaIQGewlGTC4ooESg#How-to-export-private-keys-from-the-node-with-ant-claf-installed)
2. go to Metamask and click import account
3. choose select type: JSON file
4. upload exported .JSON file (which contains your keys)
5. paste the password
6. click Import


### What are the restart commands of ant?

If you use ant.service:

- Start: `sudo systemctl start ant.service`
- Stop: `sudo systemctl stop ant.service`
- Status: `sudo systemctl status ant.service`

If you use "ant start" 

- Start: `ant start` 
- Stop: `ctrl + c` or `cmd + c` or close terminal to stop process


### Relevant endpoints and explanations

Balances: https://docs.ethsana.org/debug-api/#tag/Balance
Chequebook: https://docs.ethsana.org/debug-api/#tag/Chequebook
Status: https://docs.ethsana.org/debug-api/#tag/Status
Connectivity: https://docs.ethsana.org/debug-api/#tag/Connectivity
Settlements: https://docs.ethsana.org/debug-api/#tag/Settlements
Chunk: https://docs.ethsana.org/debug-api/#tag/Chunk

Most common use cases:

- `curl http://localhost:1635/peers` - Shows you the currently connected peers
- `curl http://localhost:1635/balances` - Shows balances (positive=incoming, negative=outgoing) accumulating with peers, some of which may or may not be currently connectd
- `curl http://localhost:1635/settlements` - When the balance with a given peer exceeds a threshold, a settlement will be issued, if the settlement is received, then your node should have a check from that peer.
- `curl http://localhost:1635/chequebook/address` your chequebook contract to see the BZZ.


### How can I check how many cashed out cheques do I have?
You can look at your chequebook contract at etherscan.  
Get your chequebook contract address with: `curl http://localhost:1635/chequebook/address`


### I have compared transactions between my ethereum address and my chequebook address, the number are different, which is quite weird.

Your chequebook will show OUT BZZ transactions when your peers cash cheques issued by you, but you don't pay any gas for those so they won't show up in your Ethereum address transaction list.

### How to set getblock.io endpoint:

You need to sign up for a free account at infura.io, set up an Ethereum project, and get the XDAI API key which will include your personal API key.  Put that URL in your swap-endpoint and restart your node.

```
https://stake.getblock.io/mainnet/?api_key=my-api-key
```

### Can I connect several nodes to getblock.io endpoint?

Yes, but their free plan has limit 40k requests per day.


### Where can I find documents about the cashout commands?

https://docs.ethsana.org/docs/working-with-ant/cashing-out


### When I run http://localhost:1635/chequebook/balance I get "totalBalance" and "availableBalance" what is the difference?

`totalBalance` is the balance on the blockchain, `availableBalance` is that balance minus the outstanding (non-cashed) cheques that you have issued to your peers. These latter cheques do not show up on the blockchain.
It's like what the bank thinks your balance is vs what your chequebook knows is actually available because of the cheques you've written that are still "in the mail" and not yet cashed.


### What determines the number of peers and how to influence their number? Why are there sometimes 300+ peers and sometimes 30?

The number of connected peers is determined by your node as it attempts to keep the distributed Kademlia well connected.  As nodes come and go in the network your peer count will go up and down. If you watch ant's output logs for "successfully connected", there should be a mix of (inbound) and (outbound) at the end of those messages.  If you only get (outbound) then you my need to get your p2p port opened through your firewall and/or forwarded by your router. Check out the connectivity section in the docs https://docs.ethsana.org/docs/installation/connectivity.


### What is the difference between "systemctl" and "ant start"?

*ant start* and *systemctl start ant* actually run 2 different instances with 2 different *ant.yaml* files and two different data directories.

*ant start* uses *~/.ant.yaml* and the *~/.ant* directory for data
*systemctl* uses */etc/ant/ant.yaml* and (IIRC) */var/lib/ant* for data


## Sana Protocol


### Can I use one Ethereum Address/Wallet for many nodes?

No, this violates the requirements of the Sana Protocol. The Sana 
Protocol relies upon the `Sana Address`, also known as the `peer 
address`. This address is a **hash of the node's Ethereum address**, 
therefore it is deterministic. As all nodes must have a unique address,
if you were to use the same wallet, it would violate the uniqueness 
constraint and result in malfunctioning nodes.

Therefore, the rule is, each node must have:

* 1 Ethereum Address
* 1 Chequebook
* 3 unique ports for API / p2p / Debug API.
