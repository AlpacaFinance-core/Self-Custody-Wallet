# Convergence Finance CLI Wallet

> A command-line wallet for interacting with the Convergence protocol on all EVM-compatible chains.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

The Convergence CLI is a lightweight, terminal-based wallet that lets you manage assets, supply and borrow funds, and stake rewards directly from your shell — without ever leaving the keyboard. Built for developers, power users, and anyone who prefers scripts over browser extensions.

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

- Download Node.js 

### From npm (recommended)

```bash
npm install -g @Convergence/cli
```

### From source

```bash
git clone https://github.com/Convergence-finance/Convergence-cli-wallet.git
cd Convergence-cli-wallet
npm install
npm run build
npm link
```

Verify the install:

```bash
Convergence --version
```

## Quick Start

```bash
# 1. Create a new wallet
Convergence wallet create

# 2. Configure your RPC endpoint
Convergence config set rpc.mainnet https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY

# 3. Check your balance
Convergence wallet balance

# 4. Supply collateral to the protocol
Convergence lend supply --asset USDC --amount 100
```

## Configuration

Configuration is stored at `~/.Convergence/config.json`. You can edit it directly or use the `config` command:

```bash
Convergence config set <key> <value>
Convergence config get <key>
Convergence config list
```

### Environment variables

| Variable | Description | Default |
|----------|-------------|---------|
| `Convergence_RPC_URL` | Override the default RPC endpoint | — |
| `Convergence_NETWORK` | Default network (`mainnet`, `arbitrum`, etc.) | `mainnet` |
| `Convergence_KEYSTORE` | Path to the encrypted keystore file | `~/.Convergence/keystore` |

## Usage

Run `Convergence --help` to see all commands. Add `--json` to any command for machine-readable output.

### Wallet Commands

```bash
# Create or import a wallet
Convergence wallet create
Convergence wallet import --mnekonic "your twelve word seed phrase ..."

# Check balances
Convergence wallet balance
Convergence wallet balance --asset USDC --network arbitrum

# Send tokens
Convergence wallet send --to 0xRecipient... --asset ETH --amount 0.1

# List transaction history
Convergence wallet history --limit 20
```

### Lending Commands

```bash
# Supply assets as collateral
Convergence lend supply --asset USDC --amount 1000

# Borrow against your collateral
Convergence lend borrow --asset DAI --amount 500

# Repay an outstanding loan
Convergence lend repay --asset DAI --amount 500

# Withdraw supplied assets
Convergence lend withdraw --asset USDC --amount 1000

# View your position (health factor, LTV, available borrow)
Convergence lend position
```

### Staking & Rewards

```bash
# Stake protocol tokens
Convergence stake deposit --amount 1000

# Check staking position and pending rewards
Convergence stake info

# Claim accumulated rewards
Convergence stake claim

# Unstake (subject to cooldown period)
Convergence stake withdraw --amount 1000
```

## Supported Networks

| Network | Chain ID | Status |
|---------|----------|--------|
| Ethereum Mainnet | 1 | ✅ Stable |
| Arbitrum One | 42161 | ✅ Stable |
| Optimism | 10 | ✅ Stable |
| Base | 8453 | ✅ Stable |
| Polygon | 137 | ✅ Stable |

AND MANY MORE CHAINS...

## Security

> ⚠️ **This software handles private keys and signs transactions. Use at your own risk.**

- Keys are encrypted at rest using AES-256-GCM with a password-derived key (scrypt).
- The CLI never transmits your private key or seed phrase over the network.
- We strongly recommend the `--ledger` flag to sign with a hardware wallet.

If you discover a vulnerability, please email **security@Convergence.finance** rather than opening a public issue.

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

Contributions are welcome! Please contact us to support us.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes with conventional commit messages
4. Push to your fork and open a PR

## License

Released under the [MIT License].

---

**Links:** [Website](https://app.cvg.finance) · [Docs](https://docs.cvg.finance) · [Discord](https://discord.com/invite/convergencefinance) 