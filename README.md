# ai-commit 🤖

> Automatically generate meaningful git commit messages using Claude AI.

![npm version](https://img.shields.io/npm/v/ai-commit)
![npm downloads](https://img.shields.io/npm/dm/ai-commit)
![GitHub stars](https://img.shields.io/github/stars/LakshitSharma1/ai-commit)

## ✨ What it does

Instead of writing commit messages manually, `ai-commit` reads your staged changes and generates a clear, conventional commit message using Claude AI.

```bash
# Before
git add .
git commit -m "stuff"

# After
git add .
ai-commit
# ✅ Generated: feat: add user authentication with JWT tokens
```

## 🚀 Installation

```bash
npm install -g ai-commit
```

## ⚙️ Setup

Get your API key from [console.anthropic.com](https://console.anthropic.com)

```bash
export ANTHROPIC_API_KEY="your-api-key"
```

## 📖 Usage

```bash
# Stage your changes
git add .

# Generate and commit
ai-commit
```

## 🤝 Contributing

Contributions welcome! Please open an issue or PR.

## 📄 License

MIT