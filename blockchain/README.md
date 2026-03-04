# Blockchain Module

## Why does this exist?

The investors asked if we use blockchain. We said yes. Then we had to make it true.

## What does it do?

It hashes the current timestamp every 30 seconds and stores it in a linked list.
That's technically a blockchain.

## Can we remove it?

No. See incident report IR-2023-847.

## Architecture

```
Current Time --> SHA-256 --> Store in Array --> Repeat
```

That's it. That's the blockchain.
