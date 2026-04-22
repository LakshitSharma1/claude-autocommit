# claude-autocommit 🤖

> Never write a git commit message again. Let Claude AI do it for you.

![npm version](https://img.shields.io/npm/v/@lakshitsharma1/claude-autocommit)
![npm downloads](https://img.shields.io/npm/dm/@lakshitsharma1/claude-autocommit)
![GitHub stars](https://img.shields.io/github/stars/LakshitSharma1/claude-autocommit)
![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ The Problem

You just wrote 200 lines of code. Now you have to write a commit message.

We've all been there. **claude-autocommit fixes this.**

## 🚀 How It Works

1. You stage your changes with `git add`
2. Run `claude-autocommit`
3. Claude reads your diff and generates a meaningful commit message
4. Done ✅

## 📦 Installation

```bash
npm install -g @lakshitsharma1/claude-autocommit
```

## ⚙️ Setup

Get your free API key from [console.anthropic.com](https://console.anthropic.com)

```bash
# Windows (PowerShell)
$env:ANTHROPIC_API_KEY="your-api-key"

# Mac/Linux
export ANTHROPIC_API_KEY="your-api-key"
```

## 📖 Usage

```bash
# Stage your changes
git add .

# Let Claude generate your commit message
claude-autocommit
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!
Feel free to check [issues page](https://github.com/LakshitSharma1/claude-autocommit/issues).

## ⭐ Support

If this project helped you, please give it a **star** on GitHub!

## 📄 License

MIT © [LakshitSharma1](https://github.com/LakshitSharma1)