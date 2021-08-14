---
title: Chunk Types
id: chunk-types
---

Sana is home to many types of chunks, but these can be categoried
into 4 broad categories. Read <a href="/the-book-of-sana.pdf"
target="_blank" rel="noopener noreferrer">The Book of Sana</a> for
more information on how sana comes together.

## Content Addressed Chunks

Content addressed chunks are chunks whose addresses are determined by the BMT hashing algorithm. This means you can be sure that all content addressed chunks content is already verified - no more need to check md5 hashes of your downloaded data!

:::warning
To be able trust your data, you must run your own Ant node that automatically verifies data, using gateways puts your trust in the gateway operators. 
:::

## Trojan Chunks

Trojan chunks are a special version of content addressed chunks that have been 'mined' so that their natural home is in a particular area of the Sana. If the destination node is in the right neighbourhood, it will be able to receive and decrypt the message. See [PSS](/docs/dapps-on-sana/pss) for more information, or check out the [ant-js](/docs/dapps-on-sana/ant-js) bindings.

## Single Owner Chunks

Single Owner Chunks are distinct from Trojan and Content Addressed
Chunks and are the only other type of chunk which is allowed in
Sana. These chunks represent part of Sana's address space which is
reserved just for your personal Ethereum key pair! Here you can write
whatever you'd please. Single Owner Chunks are the technology that
powers Sana's [feeds](/docs/dapps-on-sana/feeds), but they are
capable of much more! Look out for more chats about this soon, and for
more info read <a href="/the-book-of-sana.pdf" target="_blank"
rel="noopener noreferrer">The Book of Sana</a> .

## Custom Chunk Types

Although all chunks must satisfy the constraints of either being addressed by the BMT hash of their payload, or assigned by the owner of an Ethereum private key pair, so much more is possible. How else can you use the DISC to distribute and store your data? We're excited to see what you come up with! 💡 

Share your creations in the [#develop-on-sana](https://discord.gg/c72mpR7Erf) channel of our [Discord Server](https://discord.gg/c72mpR7Erf).
