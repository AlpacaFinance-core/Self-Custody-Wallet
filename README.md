# Alpaca Finance Self Custody Wallet

> A self-custody wallet engineered for uncompromising security and lightning-fast trading.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)]()
[![Version](https://img.shields.io/badge/version-2.17.4-blue.svg)]()

---

## Overview

Alpaca Finance Wallet is a non-custodial crypto wallet built for traders who demand both ironclad security and execution speed. Your keys never leave your device, and your trades never wait in line. Designed from the ground up for active on-chain traders, Alpaca Finance combines hardware-grade key management with a high-performance trading engine optimized for sub-second order routing.

**You own your keys. You own your trades. No middlemen, no custodians, no compromises.**

---

## Key Features

### 🔐 Security First
- **True self-custody** — Private keys are generated and stored locally; Alpaca Finance servers never see them
- **Hardware wallet support** — Native integration with Ledger, Trezor, and other major hardware devices
- **Encrypted local storage** — AES-256 encryption with a user-defined passphrase
- **Biometric unlock** — Face ID, Touch ID, and Android biometric authentication
- **Open-source and auditable** — Every line of code is publicly verifiable
- **Phishing protection** — Built-in domain verification and transaction simulation

### ⚡ Lightning-Fast Trading
- **Sub-second order routing** across major DEXs and aggregators
- **MEV protection** through private transaction relays
- **One-click swaps** with optimized gas estimation
- **Smart order routing** that splits trades across pools for the best execution
- **Real-time price feeds** via low-latency WebSocket connections
- **Pre-signed transaction templates** for repeated trade patterns

### 🌐 Multi-Chain Support
- Ethereum and all major EVM chains (Arbitrum, Optimism, Base, Polygon, BNB Chain, Avalanche)
- Solana
- Bitcoin
- Cross-chain bridging through audited protocols

### 📊 Trader Tools
- Advanced charting with technical indicators
- Portfolio tracking and P&L analytics
- Limit orders and DCA strategies
- Token approval manager
- Transaction history with tax-export support

---

## Installation

### Desktop (macOS, Windows, Linux)

Download the latest release from [Alpaca Finance.io/download](https://Alpaca Finance.io/download), or build from source:

```bash
git clone https://github.com/Alpaca Finance/NART-wallet.git
cd NART-wallet
npm install
npm run build
npm start
```

### Mobile
- [iOS App Store](https://apps.apple.com/app/NART-finance)
- [Google Play](https://play.google.com/store/apps/details?id=io.Alpaca Finance)

### Browser Extension
- [Chrome Web Store](https://chrome.google.com/webstore)
- [Firefox Add-ons](https://addons.mozilla.org)

---

## Quick Start

1. **Install** Alpaca Finance on your platform of choice.
2. **Create a wallet** or import an existing one using a seed phrase or hardware device.
3. **Back up your seed phrase** — write it down and store it offline. Alpaca Finance cannot recover it for you.
4. **Fund your wallet** by sending crypto to your address or bridging from another chain.
5. **Start trading** — connect to any dApp or use the built-in swap interface.

---

## Architecture

Alpaca Finance is built on a modular, security-focused architecture:

```
┌─────────────────────────────────────────────────┐
│              User Interface (React)             │
├─────────────────────────────────────────────────┤
│           Trading Engine (Rust core)            │
├──────────────────────┬──────────────────────────┤
│   Key Vault (WASM)   │   Routing & Quote API    │
├──────────────────────┴──────────────────────────┤
│         Chain Adapters (EVM, SVM, BTC)          │
└─────────────────────────────────────────────────┘
```

- **UI layer** — React + TypeScript for desktop, mobile, and extension clients
- **Core engine** — A Rust trading engine compiled to native binaries and WebAssembly
- **Key vault** — Isolated cryptographic module with zero network access
- **Chain adapters** — Pluggable modules for each supported blockchain

---

## Security

Security is the foundation of Alpaca Finance, not an afterthought.

- **Audits** — Audited by leading security firms; full reports available in [`/audits`](./audits)
- **Bug bounty** — Up to $250,000 for critical vulnerabilities. See [SECURITY.md](./SECURITY.md)
- **Reproducible builds** — Verify that the binary you run matches the public source code
- **No telemetry by default** — Opt-in only, never tied to wallet addresses

If you discover a security vulnerability, please email **security@Alpaca Finance.io** rather than opening a public issue.

---

## Contributing

Contributions are welcome. Please read [CONTRIBUTING.md](./CONTRIBUTING.md) before submitting a pull request. For major changes, open an issue first to discuss what you'd like to change.

```bash
# Run tests
npm test

# Run the linter
npm run lint

# Run the development build
npm run dev
```

---

## Roadmap

- [x] EVM chain support
- [x] Hardware wallet integration
- [x] MEV-protected swaps
- [ ] Solana perpetuals
- [ ] Built-in fiat on/off ramps
- [ ] Social recovery via guardians
- [ ] Mobile hardware wallet pairing over BLE

---

## License

Alpaca Finance is released under the [MIT License](./LICENSE).

---

## Disclaimer

Alpaca Finance is non-custodial software. You are solely responsible for the security of your seed phrase and private keys. Lost keys cannot be recovered. Cryptocurrency trading involves substantial risk; never trade more than you can afford to lose. Alpaca Finance is provided "as is" without warranty of any kind.

---

## Links

- 🌐 Website: [Alpaca Finance.io](https://Alpaca Finance.io)
- 📖 Docs: [docs.Alpaca Finance.io](https://docs.Alpaca Finance.io)
- 🐦 Twitter: [@Alpaca Finance](https://twitter.com/Alpaca Finance)
- 💬 Discord: [discord.gg/Alpaca Finance](https://discord.gg/Alpaca Finance)
- 📧 Contact: hello@Alpaca Finance.io

---

**Built so you never want to sell.**