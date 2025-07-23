# 🧮 Advanced Scientific Calculator Web App

This is a powerful and user-friendly **Scientific Calculator Web Application** built using **HTML**, **CSS**, and **JavaScript**. It features core arithmetic operations, advanced scientific functions, memory storage, history logging, keyboard shortcuts, and a toggle for **dark/light mode**.

---

## ✨ Features

- 🔢 **Standard Operations**: Addition, subtraction, multiplication, division, decimals, backspace.
- 🧠 **Scientific Functions**:  
  `sin`, `cos`, `tan`, `√`, `log`, and power `xʸ`.
- 💾 **Memory Operations**:  
  - `M+` (Add to memory)  
  - `M-` (Subtract from memory)  
  - `MR` (Recall memory)
- 🌗 **Dark/Light Mode Toggle**:  
  Switch between themes with a single click.
- 🧾 **History Log**:  
  Shows the last 10 calculations performed.
- ⌨️ **Keyboard Support**:  
  Includes support for `0-9`, `+ - * /`, `Enter` (=), `Backspace`, and `Esc` (AC).

---

## 🗂️ Project Structure

```

project-root/
│
├── index.html       # HTML structure for calculator layout and history
├── style.css        # All styling, dark/light theme, responsive layout
├── script.js        # Logic for calculations, memory, history, and theme toggle

```

---

## 💡 How It Works

- User inputs expressions by clicking buttons or using the keyboard.
- Scientific functions use JavaScript's `Math` library.
- A live **display** updates with each entry.
- The **evaluate (=)** button computes results using `eval()` or `Math.pow()` if in power mode.
- All successful calculations are stored in the **history section**.
- Up to **10 history entries** are saved.
- **Theme toggle** changes the appearance without reloading.

---

## 🧪 How to Run

1. Clone this repository or [Download ZIP](#).
2. Ensure all files (`index.html`, `style.css`, `script.js`) are in the same directory.
3. Open `index.html` in any modern browser — **no setup required**.

---

## 🧩 Customization

- 🎨 Change fonts, colors, or layout by editing `style.css`.
- ➕ Add more scientific functions in `script.js` using the `applyFunction()` logic.
- 🧠 Improve memory logic or make it persistent using `localStorage`.

---

## 🔐 Safety Note

> The app uses `eval()` to evaluate expressions — which is safe here because all input is user-restricted. For production environments, use math parsers like `math.js`.

---

## 📸 Screenshot

![Calculator UI](https://via.placeholder.com/500x300?text=Scientific+Calculator+UI)

---

## 📄 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it.

---

**Crafted with ❤️ using HTML, CSS, and JavaScript**
```

