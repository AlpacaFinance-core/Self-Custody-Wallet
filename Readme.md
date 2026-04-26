# ProtocolName CLI Wallet

> A command-line wallet for interacting with the ProtocolName lending protocol on Ethereum and EVM-compatible chains.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

The ProtocolName CLI is a lightweight, terminal-based wallet that lets you manage assets, supply and borrow funds, and stake rewards directly from your shell — without ever leaving the keyboard. Built for developers, power users, and anyone who prefers scripts over browser extensions.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Usage](#usage)
  - [Wallet Commands](#wallet-commands)
  - [Lending Commands](#lending-commands)
  - [Staking & Rewards](#staking--rewards)
- [Supported Networks](#supported-networks)
- [Security](#security)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🔐 **Secure key management** — encrypted local keystore with optional hardware wallet support (Ledger)
- 💸 **Wallet basics** — send, receive, and check balances for ETH and ERC-20 tokens
- 🏦 **Lending operations** — supply collateral, borrow, repay, and withdraw across all supported markets
- 📈 **Staking & rewards** — stake protocol tokens, claim rewards, and track APY in real time
- ⛓️ **Multi-network** — Ethereum mainnet, Arbitrum, Optimism, Base, and Polygon out of the box
- 🔧 **Scriptable** — JSON output mode for piping into other tools and automating workflows

## Requirements

- Node.js `>= 18.0.0`
- npm `>= 9.0.0` (or pnpm / yarn)
- An EVM-compatible RPC endpoint (Alchemy, Infura, or your own node)

## Installation

### From npm (recommended)

```bash
npm install -g @protocolname/cli
```

### From source

```bash
git clone https://github.com/your-org/protocolname-cli.git
cd protocolname-cli
npm install
npm run build
npm link
```

Verify the install:

```bash
protocolname --version
```

## Quick Start

```bash
# 1. Create a new wallet
protocolname wallet create

# 2. Configure your RPC endpoint
protocolname config set rpc.mainnet https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY

# 3. Check your balance
protocolname wallet balance

# 4. Supply collateral to the protocol
protocolname lend supply --asset USDC --amount 100
```

## Configuration

Configuration is stored at `~/.protocolname/config.json`. You can edit it directly or use the `config` command:

```bash
protocolname config set <key> <value>
protocolname config get <key>
protocolname config list
```

### Environment variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PROTOCOLNAME_RPC_URL` | Override the default RPC endpoint | — |
| `PROTOCOLNAME_NETWORK` | Default network (`mainnet`, `arbitrum`, etc.) | `mainnet` |
| `PROTOCOLNAME_KEYSTORE` | Path to the encrypted keystore file | `~/.protocolname/keystore` |

## Usage

Run `protocolname --help` to see all commands. Add `--json` to any command for machine-readable output.

### Wallet Commands

```bash
# Create or import a wallet
protocolname wallet create
protocolname wallet import --mnekonic "your twelve word seed phrase ..."

# Check balances
protocolname wallet balance
protocolname wallet balance --asset USDC --network arbitrum

# Send tokens
protocolname wallet send --to 0xRecipient... --asset ETH --amount 0.1

# List transaction history
protocolname wallet history --limit 20
```

### Lending Commands

```bash
# Supply assets as collateral
protocolname lend supply --asset USDC --amount 1000

# Borrow against your collateral
protocolname lend borrow --asset DAI --amount 500

# Repay an outstanding loan
protocolname lend repay --asset DAI --amount 500

# Withdraw supplied assets
protocolname lend withdraw --asset USDC --amount 1000

# View your position (health factor, LTV, available borrow)
protocolname lend position
```

### Staking & Rewards

```bash
# Stake protocol tokens
protocolname stake deposit --amount 1000

# Check staking position and pending rewards
protocolname stake info

# Claim accumulated rewards
protocolname stake claim

# Unstake (subject to cooldown period)
protocolname stake withdraw --amount 1000
```

## Supported Networks

| Network | Chain ID | Status |
|---------|----------|--------|
| Ethereum Mainnet | 1 | ✅ Stable |
| Arbitrum One | 42161 | ✅ Stable |
| Optimism | 10 | ✅ Stable |
| Base | 8453 | ✅ Stable |
| Polygon | 137 | ✅ Stable |

## Security

> ⚠️ **This software handles private keys and signs transactions. Use at your own risk.**

- Keys are encrypted at rest using AES-256-GCM with a password-derived key (scrypt).
- The CLI never transmits your private key or seed phrase over the network.
- For production use, we strongly recommend the `--ledger` flag to sign with a hardware wallet.
- Always verify you are running an official release. Check release signatures against the maintainer keys listed in `SECURITY.md`.

If you discover a vulnerability, please email **security@protocolname.xyz** rather than opening a public issue.

## Development

```bash
# Install dependencies
npm install

# Run in dev mode with hot reload
npm run dev

# Run tests
npm test

# Lint and type-check
npm run lint
npm run typecheck

# Build for production
npm run build
```

### Project structure

```
src/
├── commands/      # CLI command handlers
├── core/          # Wallet, signer, and keystore logic
├── protocol/      # Lending and staking contract bindings
├── network/       # RPC client and chain configs
└── utils/         # Shared helpers
```

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes with conventional commit messages
4. Push to your fork and open a PR

## License

Released under the [MIT License](./LICENSE).

---

**Links:** [Website](https://protocolname.xyz) · [Docs](https://docs.protocolname.xyz) · [Discord](https://discord.gg/protocolname) · [Twitter](https://twitter.com/protocolname)