let display = document.getElementById("display");
let memory = 0;
let current = "0";
let resetNext = false;
let powerMode = false;

function updateDisplay() {
  display.textContent = current;
}

function append(char) {
  if (resetNext) {
    current = (char === ".") ? "0." : char;
    resetNext = false;
  } else {
    if (current === "0" && char !== ".") {
      current = char;
    } else if (char === "." && current.includes(".")) {
      return;
    } else {
      current += char;
    }
  }
  updateDisplay();
}

function clearDisplay() {
  current = "0";
  resetNext = false;
  powerMode = false;
  updateDisplay();
}

function backspace() {
  if (resetNext || current.length === 1) {
    current = "0";
    resetNext = false;
  } else {
    current = current.slice(0, -1);
    if (current === "" || current === "-") current = "0";
  }
  updateDisplay();
}

function calculate() {
  try {
    let expression = current.replace(/÷/g, "/").replace(/×/g, "*");
    if (powerMode) {
      let [base, exp] = expression.split("^");
      let result = Math.pow(eval(base), eval(exp));
      addToHistory(`${base}^${exp} = ${result}`);
      current = result.toString();
      powerMode = false;
      resetNext = true;
    } else {
      let result = eval(expression);
      addToHistory(`${expression} = ${result}`);
      current = result.toString();
      resetNext = true;
    }
  } catch {
    current = "Error";
    resetNext = true;
  }
  updateDisplay();
}

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Memory functions
function memoryAdd() {
  try {
    memory += eval(current || "0");
  } catch {
    alert("Invalid input");
  }
}
function memorySubtract() {
  try {
    memory -= eval(current || "0");
  } catch {
    alert("Invalid input");
  }
}
function memoryRecall() {
  current = memory.toString();
  resetNext = true;
  updateDisplay();
}

// History log
function addToHistory(entry) {
  const list = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = entry;
  list.prepend(li);
  // Limit history to 10 entries
  while (list.children.length > 10) {
    list.removeChild(list.lastChild);
  }
}

// Scientific functions
function applyFunction(func) {
  try {
    const value = eval(current || "0");
    let result;
    if (func === 'Math.log') {
      result = Math.log10(value);
    } else {
      result = eval(`${func}(${value})`);
    }
    addToHistory(`${func.replace('Math.', '')}(${value}) = ${result}`);
    current = result.toString();
    resetNext = true;
  } catch {
    current = "Error";
    resetNext = true;
  }
  updateDisplay();
}
function power() {
  current += "^";
  powerMode = true;
  updateDisplay();
}

document.addEventListener("keydown", function (e) {
  if ((e.key >= '0' && e.key <= '9')) {
    append(e.key);
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    append(e.key);
  } else if (e.key === ".") {
    append(".");
  } else if (e.key === "Enter" || e.key === "=") {
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});

updateDisplay(); 