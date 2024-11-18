# 🌳 tree-shaker

[![Deno](https://img.shields.io/badge/deno-1.37-green.svg)](https://deno.land)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Create file system structures from ASCII tree diagrams with style! tree-shaker is a Deno-powered CLI tool that transforms text-based directory trees into real file system structures.

## 🚀 Features

-   Convert ASCII tree diagrams into real directories and files
-   Smart depth detection for nested structures
-   Command-line interface with customizable input/output paths
-   Zero dependencies (besides Deno standard library)
-   Simple and lightweight

## 📦 Installation

### Option 1: Install from URL

```bash
# Install directly from GitHub
deno install --allow-read --allow-write https://raw.githubusercontent.com/peterbenoit/tree-shaker/main/super-shake.ts
```

### Option 2: Clone and Run

# Clone the repository

```
git clone https://github.com/peterbenoit/tree-shaker.git
```

# Change directory

```
cd tree-shaker
```

# Run directly

```
deno run --allow-read --allow-write super-shake.ts --input=./examples/tree.txt --output=./my-project
```

### Option 3: Download Binary

Download the latest release from our releases page.

# Make executable (macOS/Linux)

```
chmod +x tree-shaker
```

# Add to your PATH

```
mv tree-shaker /usr/local/bin/
```

### 📝 Example Usage

Create a tree file (tree.txt):

```
my-project/
├── src/
│   ├── main.ts
│   └── utils/
│       └── helper.ts
├── tests/
│   └── main.test.ts
└── README.md
```

Run tree-shaker:

```
tree-shaker --input=tree.txt --output=./my-project
```

### 🤝 Contributing

1. Fork the repository
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

📄 License
MIT © [Peter Benoit]
