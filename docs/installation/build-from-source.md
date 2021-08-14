---
title: Build from Source
id: build-from-source
---

Sana is written using the [Go](https://golang.org) language. 

You may build the Sana client software directly from the [source](https://github.com/ethsana/sana).

:::caution
While it is possible to run Sana without it, we recommend the use of Go Ethereum's Clef external signer. Instructions for installing and integrating this with Sana can be found [here](/docs/installation/ant-clef).
:::

Prerequisites for installing direct from source are:

- **go** - download the latest release from [golang.org](https://golang.org/dl).
- **git** - download from [git-scm.com](https://git-scm.com/).
- **make** - usually included in most operating systems.

### Build from Source

1. Clone the repository:

    ```bash
    git clone https://github.com/ethsana/sana
    cd sana
    ```

2. Use `git` to find the latest release:

    ```bash
    git describe --tags
    ```

3. Checkout the required version:

    ```bash
    git checkout v0.0.3
    ```

4. Build the binary:

    ```bash
    make binary
    ```

5. Check you are able to run the `ant` command. Success can be verified by running:

    ```bash
    dist/ant version
    ```

    ```
    0.0.3
    ```

6. (optional) Additionally, you may also like to move the Sana binary to somewhere in your `$PATH`

    ```bash
    sudo cp dist/ant /usr/sbin/ant
    ```
