---
title: Uninstalling Ant
id: uninstalling-ant
---

## Uninstalling Ant

If you need to remove Ant, you may simply run the below commands.

### Ubuntu / Debian / Raspbian

:::danger
Uninstalling Ant will also delete Ant and Ant-clef data! Make sure you [make backups](/docs/working-with-ant/backups) so you don't lose your keys and data.
:::

```bash
sudo apt-get remove ant
sudo apt-get remove ant-clef
```

### Centos

:::danger
Uninstalling Ant will also delete Ant and Ant-clef data! Make sure you [make backups](/docs/working-with-ant/backups) so you don't lose your keys and data.
:::

```bash
sudo yum remove ant
sudo yum remove ant-clef
```


## Data Locations

### Ant-clef

Configuration files are stored in `/etc/ant-clef/`

Key material and other data is stored in `/var/lib/ant-clef/`

### Ant

Configuration files are stored in `/etc/ant/`

State, chunks and other data is stored in `/var/lib/ant/`
