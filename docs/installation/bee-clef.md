---
title: Sana Clef
id: ant-clef
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Sana makes use of Go Ethereum's external signer, [Clef](https://geth.ethereum.org/docs/clef/tutorial).

Because Sana must sign a lot of transactions automatically and quickly, a [Sana specific version of Clef, Sana Clef](https://github.com/ethsana/sana-clef) has been packaged which includes all the relevant configuration needed to make Clef work with Sana.

:::caution
Sana Clef will create a new Ethereum key pair for you during installation. Make sure you keep a [backup](/docs/access-the-ant/backups) of your key pair somewhere safe and secure!
:::

## Packages

Sana Clef can be installed automatically using your system's package manager.




<Tabs
  defaultValue="debian"
  values={[
    {label: 'Ubuntu', value: 'debian'},
  ]}>
<TabItem value="debian">

#### AMD64

```bash
wget https://github.com/ethsana/sana-clef/releases/download/v0.5.0/sana-clef_0.5.0_amd64.deb
sudo dpkg -i sana-clef_0.5.0_amd64.deb
```

</TabItem>
</Tabs>


### Configuring Sana Clef
Configuration files are stored in `/etc/default/sana-clef/` on Linux and `/usr/local/etc/sana-clef/default` on MacOS.

To install clef for Sana mainnet, change `ANT_CLEF_CHAIN_ID` to be `100` in order to interact with the XDAI network. For testnet, use chain id `5`.

For a normal installation using a package manager, this should be the only configuration changes necessary to start using Ant Clef.

### Interact With Ant Clef

Once Ant Clef has been installed, it will begin running as a service.

To check Ant Clef is running ok, we may use `systemctl` (on Linux) or `launchctl` (on MacOS) to query the status of the `ant-clef` service.


<Tabs
  defaultValue="linux"
  values={[
    {label: 'Linux', value: 'linux'},
    {label: 'MacOS', value: 'macos'},
  ]}>
  <TabItem value="linux">

```bash
systemctl status ant-clef
```

```
● ant-clef.service - Ant Clef
     Loaded: loaded (/lib/systemd/system/ant-clef.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2020-11-20 23:45:16 GMT; 1min 29s ago
```

And if you want to get Ant Clef's logs, you can use:

```bash
journalctl -f -u ant-clef.service
```

</TabItem>
  <TabItem value="macos">

```bash
launchctl list | grep sana-clef
```

  </TabItem>
</Tabs>

When Ant Clef first starts, you should see something very similar to the following:
```log
Feb 21 19:52:43 comp-name systemd[1]: Started Ant Clef.
Feb 21 19:52:43 comp-name ant-clef-service[494678]: WARNING!
Feb 21 19:52:43 comp-name ant-clef-service[494678]: Clef is an account management tool. It may, like any software, contain bugs.
Feb 21 19:52:43 comp-name ant-clef-service[494678]: Please take care to
Feb 21 19:52:43 comp-name ant-clef-service[494678]: - backup your keystore files,
Feb 21 19:52:43 comp-name ant-clef-service[494678]: - verify that the keystore(s) can be opened with your password.
Feb 21 19:52:43 comp-name ant-clef-service[494678]: Clef is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
Feb 21 19:52:43 comp-name ant-clef-service[494678]: without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR
Feb 21 19:52:43 comp-name ant-clef-service[494678]: PURPOSE. See the GNU General Public License for more details.
Feb 21 19:52:43 comp-name ant-clef-service[494678]: INFO [02-21|19:52:43.862] Using stdin/stdout as UI-channel
Feb 21 19:52:44 comp-name ant-clef-service[494678]: INFO [02-21|19:52:44.036] Loaded 4byte database                    embeds=146841 locals=3 local=/etc/ant-clef/4byte.json
Feb 21 19:52:44 comp-name ant-clef-service[494678]: {"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}
Feb 21 19:54:25 comp-name ant-clef-service[494678]: INFO [02-21|19:54:25.048] Rule engine configured                   file=/etc/ant-clef/rules.js
Feb 21 19:54:25 comp-name ant-clef-service[494678]: INFO [02-21|19:54:25.048] Starting signer                          chainid=5 keystore=/var/lib/ant-clef/keystore light-kdf=false advanced=false
Feb 21 19:54:25 comp-name ant-clef-service[494678]: INFO [02-21|19:54:25.049] IPC endpoint opened                      url=/var/lib/ant-clef/clef.ipc
Feb 21 19:54:25 comp-name ant-clef-service[494678]: {"jsonrpc":"2.0","method":"ui_onSignerStartup","params":[{"info":{"extapi_http":"n/a","extapi_ipc":"/var/lib/ant-clef/clef.ipc","extapi_version":"6.1.0","intapi_version":"7.0.1"}}]}
```

:::info
This line can be safely ignored, there is no action required: `{"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}`
:::



As soon as `ant` starts interacting with `ant-clef` you should start to see log messages populate, for a regularly active and connected node they will appear every few seconds:
```
Feb 24 22:29:15 comp-name ant-clef-service[1118]: INFO [02-24|22:29:15.118] Op approved
Feb 24 22:30:17 comp-name ant-clef-service[1118]: INFO [02-24|22:30:17.371] Op approved
Feb 24 22:30:19 comp-name ant-clef-service[1118]: INFO [02-24|22:30:19.344] Op approved
...
```


## Data Locations

Key material and other data is stored in `/var/lib/ant-clef/`

:::info
Ant can communicate with Ant Clef in a variety of ways. The default way, if installed via the packages, will use an Inter-process communication (IPC) file. This is a special file that `ant-clef` creates on startup that Ant will use to send requests back-and-forth. When the `ant-clef` service is running you'll notice that a `/var/lib/ant-clef/clef.ipc` file is created.
:::

## Manual Installation

Try the [Github releases page](https://github.com/ethersphere/ant-clef/releases) for binaries for your platform. Otherwise to install Clef manually first retrieve the relevant Clef binary from Ethereum's [Geth & Tools](https://geth.ethereum.org/downloads/) download page, or build directly from the [source](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum).

Because Ant needs Clef to sign many transactions automatically, we must run Clef as a service with relaxed permissions and rules set. To ensure Clef only signs transactions from Ant, we must protect the `clef.ipc` file by **creating a Ant user and setting permissions so that it is only possible for this user to make use of the ipc socket.**

Additionally, Clef requires transaction signatures for the Ant's chequebook interaction.

A shell script automating the post-initialisation permission changing and including the Clef config, `clef-service`, as well as the `4byte.json` transaction signature file and `rules.js` file can all be found in the [ant-clef repository](https://github.com/ethersphere/ant-clef/tree/master/packaging).

Finally, once Clef is running, simply [configure your Ant node](/docs/access-the-ant/configuration) to enable Clef using `--clef-signer-enable` and point Ant to the correct ipc socket using `--clef-signer-endpoint`.
