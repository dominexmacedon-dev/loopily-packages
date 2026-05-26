# Loopily Programming Language

Loopily is a lightweight, custom-built programming language with its own compiler, virtual machine, and package system. It is designed for simplicity, learning, and extensibility.

Developed by **Dominex Macedon**

---

##  Features

- Custom Lexer, Parser, and Compiler
- Stack-based Virtual Machine
- `.lol` scripting language
- Package system using `.lpk`
- Built-in runtime functions (`out`, `interact`)
- Loops, functions, arrays, objects
- Import system (`import math`, `import color`, etc.)
- Windows `.exe` distribution (no Node.js required)

---

##  Installation

### Download Executable

Download the latest release:

```

loopily.exe

```

Or directly:

```

[https://github.com/dominexmacedon-dev/loopily-packages/releases/download/Loopily%401.0.0/loopily.exe](https://github.com/dominexmacedon-dev/loopily-packages/releases/download/Loopily%401.0.0/loopily.exe)

````

---

##  Running Loopily

Run a `.lol` file:

```bash
loopily hello.lol
````

---

##  Example Code

### Hello World

```lol
out("Hello, Loopily!")
```

### Variables

```lol
let name = "Dominex"
out(name)
```

### Input

```lol
let user = interact("Enter your name: ")
out("Hello")
out(user)
```

---

##  Loops

```lol
let i = 0

while i < 5 {
  out(i)
  i = i + 1
}
```

---

##  Functions (carry)

```lol
carry add(a, b) {
  return a + b
}

out(add(2, 3))
```

---

##  Packages

### Install package

```bash
loopily install math
```

### Import package

```lol
import math

out(math.add(10, 20))
```

---

##  Built-in Packages

* math
* color
* general
* string
* array

---

##  CLI Commands

```bash
loopily <file>.lol        Run program
loopily install <pkg>     Install package
loopily list              List installed packages
loopily remove <pkg>      Remove package
loopily --version         Show version
loopily help              Show help
```

---

##  Architecture

Loopily works using:

```
Lexer → Parser → Compiler → Bytecode → VM
```

---

##  Example Project

```lol
import color

out(color.green("Welcome to Loopily"))
```

---

##  Executable

Loopily is distributed as a standalone Windows executable:

* No Node.js required
* Portable runtime
* Built-in package system
* Fast execution engine

---

##  Developer

**Dominex Macedon**

---

##  License

MIT License
