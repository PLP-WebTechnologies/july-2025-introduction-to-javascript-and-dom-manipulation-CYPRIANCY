// ========================================
// PART 1: JAVASCRIPT BASICS
// Variables, Data Types, Operators, Conditionals
// ========================================

// Global variables to demonstrate different data types
let userName = ""
let userAge = 0
let isAdult = false
let calculationResult = 0

// Array for demonstration purposes
const colors = ["red", "blue", "green", "purple", "orange", "pink"]

/**
 * Part 1: Process user information using conditionals and variables
 * Demonstrates: variables, conditionals, string manipulation, DOM interaction
 */
function processUserInfo() {
  // Get input values and store in variables
  userName = document.getElementById("userName").value
  userAge = Number.parseInt(document.getElementById("userAge").value)

  // Input validation using conditionals
  if (!userName || isNaN(userAge)) {
    document.getElementById("userResult").innerHTML =
      '<span style="color: red;">❌ Please enter both name and age!</span>'
    return
  }

  // Conditional logic to determine age category
  let ageCategory = ""
  let message = ""

  if (userAge < 13) {
    ageCategory = "child"
    isAdult = false
    message = "Keep learning and growing! 🌱"
  } else if (userAge >= 13 && userAge < 18) {
    ageCategory = "teenager"
    isAdult = false
    message = "Exciting times ahead! 🚀"
  } else if (userAge >= 18 && userAge < 65) {
    ageCategory = "adult"
    isAdult = true
    message = "You're in your prime! 💪"
  } else {
    ageCategory = "senior"
    isAdult = true
    message = "Wisdom comes with age! 🧠"
  }

  // String concatenation and template literals
  const result = `
        <h4>User Information Processed:</h4>
        <p><strong>Name:</strong> ${userName}</p>
        <p><strong>Age:</strong> ${userAge} years old</p>
        <p><strong>Category:</strong> ${ageCategory}</p>
        <p><strong>Adult Status:</strong> ${isAdult ? "Yes" : "No"}</p>
        <p><strong>Message:</strong> ${message}</p>
    `

  document.getElementById("userResult").innerHTML = result

  // Console output for debugging
  console.log(`Processed user: ${userName}, Age: ${userAge}, Adult: ${isAdult}`)
}

// ========================================
// PART 2: JAVASCRIPT FUNCTIONS
// Custom Functions for Reusability
// ========================================

/**
 * Function 1: Mathematical calculations
 * Demonstrates: function parameters, return values, switch statements
 */
function calculateNumbers(num1, num2, operation) {
  switch (operation) {
    case "add":
      return num1 + num2
    case "subtract":
      return num1 - num2
    case "multiply":
      return num1 * num2
    case "divide":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero"
    default:
      return "Invalid operation"
  }
}

/**
 * Function 2: String formatting utility
 * Demonstrates: string manipulation, conditional formatting
 */
function formatNumber(number, operation) {
  if (typeof number !== "number") {
    return number // Return as-is if not a number (like error messages)
  }

  // Format based on operation type
  if (operation === "multiply" && number > 1000) {
    return `${number.toLocaleString()} (Large Result! 🎉)`
  } else if (operation === "add" && number > 100) {
    return `${number} (Great Addition! ➕)`
  } else {
    return `${number} ✨`
  }
}

/**
 * Wrapper function to perform calculations and display results
 * Demonstrates: function composition, DOM manipulation
 */
function performCalculation(operation) {
  const num1 = Number.parseFloat(document.getElementById("num1").value)
  const num2 = Number.parseFloat(document.getElementById("num2").value)

  // Validation
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById("calcResult").innerHTML = '<span style="color: red;">❌ Please enter valid numbers!</span>'
    return
  }

  // Use our custom function
  calculationResult = calculateNumbers(num1, num2, operation)

  const result = `
        <h4>Calculation Result:</h4>
        <p><strong>Operation:</strong> ${operation}</p>
        <p><strong>Numbers:</strong> ${num1} and ${num2}</p>
        <p><strong>Result:</strong> ${calculationResult}</p>
    `

  document.getElementById("calcResult").innerHTML = result
}

/**
 * Function to format and display the last calculation result
 * Demonstrates: function reusability, conditional logic
 */
function formatResult() {
  if (calculationResult === 0) {
    document.getElementById("calcResult").innerHTML += '<p style="color: orange;">⚠️ No calculation performed yet!</p>'
    return
  }

  const formatted = formatNumber(calculationResult, "multiply")
  document.getElementById("calcResult").innerHTML += `<p><strong>Formatted Result:</strong> ${formatted}</p>`
}

// ========================================
// PART 3: JAVASCRIPT LOOPS
// For, While, and Array Iteration
// ========================================

/**
 * Loop Example 1: For loop with countdown
 * Demonstrates: for loop, DOM manipulation, timing
 */
function generateCountdown() {
  const resultDiv = document.getElementById("loopResult")
  resultDiv.innerHTML = "<h4>Countdown Timer:</h4>"

  // For loop countdown
  for (let i = 10; i >= 1; i--) {
    setTimeout(
      () => {
        resultDiv.innerHTML += `<span style="font-size: 1.2em; margin: 5px;">${i} </span>`

        // Add special message at the end
        if (i === 1) {
          setTimeout(() => {
            resultDiv.innerHTML += '<br><strong style="color: green;">🚀 Blast Off!</strong>'
          }, 1000)
        }
      },
      (10 - i) * 1000,
    )
  }
}

/**
 * Loop Example 2: Array iteration with forEach
 * Demonstrates: forEach loop, array manipulation, dynamic content
 */
function createColorList() {
  const resultDiv = document.getElementById("loopResult")
  resultDiv.innerHTML = "<h4>Color List Generation:</h4>"

  let colorHTML = '<div style="display: flex; flex-wrap: wrap; gap: 10px;">'

  // forEach loop through colors array
  colors.forEach((color, index) => {
    colorHTML += `
            <div style="
                background-color: ${color}; 
                color: white; 
                padding: 10px 15px; 
                border-radius: 20px; 
                font-weight: bold;
                text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
            ">
                ${index + 1}. ${color.toUpperCase()}
            </div>
        `
  })

  colorHTML += "</div>"
  resultDiv.innerHTML += colorHTML

  // While loop example for additional processing
  let count = 0
  const totalColors = colors.length
  while (count < totalColors) {
    console.log(`Processing color ${count + 1}: ${colors[count]}`)
    count++
  }

  resultDiv.innerHTML += `<p style="margin-top: 15px;"><strong>Total colors processed:</strong> ${count}</p>`
}

/**
 * Loop Example 3: Animation with loops
 * Demonstrates: for loop, DOM creation, CSS animation
 */
function animateBoxes() {
  const animationArea = document.getElementById("animationArea")
  animationArea.innerHTML = "<h4>Animated Boxes:</h4>"

  // For loop to create multiple animated elements
  for (let i = 0; i < 8; i++) {
    const box = document.createElement("div")
    box.className = "animated-box"
    box.style.backgroundColor = colors[i % colors.length]
    box.style.animationDelay = `${i * 0.2}s`

    // Add click event to each box
    box.addEventListener("click", function () {
      this.style.transform = "scale(1.2) rotate(45deg)"
      setTimeout(() => {
        this.style.transform = "scale(1) rotate(0deg)"
      }, 500)
    })

    animationArea.appendChild(box)
  }

  animationArea.innerHTML += '<p style="margin-top: 10px;"><em>Click on any box to interact!</em></p>'
}

// ========================================
// PART 4: DOM MANIPULATION
// Element Selection, Event Handling, Dynamic Content
// ========================================

/**
 * DOM Manipulation 1: Theme toggling
 * Demonstrates: class manipulation, style changes, localStorage
 */
function toggleTheme() {
  const body = document.body
  body.classList.toggle("dark-theme")

  // Store preference in localStorage
  const isDark = body.classList.contains("dark-theme")
  localStorage.setItem("darkTheme", isDark)

  // Update changeable text to reflect theme change
  const changeableText = document.querySelector(".changeable-text")
  changeableText.textContent = `Theme switched to ${isDark ? "Dark" : "Light"} mode! 🎨`
  changeableText.classList.add("highlight")

  // Remove highlight after animation
  setTimeout(() => {
    changeableText.classList.remove("highlight")
  }, 2000)

  console.log(`Theme changed to: ${isDark ? "Dark" : "Light"}`)
}

/**
 * DOM Manipulation 2: Dynamic element creation
 * Demonstrates: createElement, appendChild, event listeners
 */
function addNewElement() {
  const dynamicContent = document.getElementById("dynamicContent")

  // Create new element
  const newElement = document.createElement("div")
  newElement.style.cssText = `
        background: linear-gradient(45deg, #667eea, #764ba2);
        color: white;
        padding: 15px;
        margin: 10px 0;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.3s ease;
    `

  const timestamp = new Date().toLocaleTimeString()
  newElement.innerHTML = `
        <strong>🆕 New Element Created!</strong><br>
        <small>Time: ${timestamp}</small><br>
        <em>Click me to remove!</em>
    `

  // Add click event to remove element
  newElement.addEventListener("click", function () {
    this.style.transform = "scale(0)"
    setTimeout(() => {
      this.remove()
    }, 300)
  })

  // Add hover effect
  newElement.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.05)"
  })

  newElement.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)"
  })

  dynamicContent.appendChild(newElement)
}

/**
 * DOM Manipulation 3: Style changes and element selection
 * Demonstrates: querySelectorAll, style manipulation, random selection
 */
function changeStyles() {
  // Select all sections
  const sections = document.querySelectorAll(".section")

  // Apply random background colors
  sections.forEach((section, index) => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    section.style.borderLeft = `8px solid ${randomColor}`
    section.style.transition = "all 0.5s ease"

    // Add a temporary glow effect
    section.style.boxShadow = `0 0 20px ${randomColor}40`

    // Remove glow after 3 seconds
    setTimeout(() => {
      section.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.1)"
    }, 3000)
  })

  // Update the changeable text
  const changeableText = document.querySelector(".changeable-text")
  const messages = [
    "Styles have been randomized! 🎨",
    "Look at those colorful borders! 🌈",
    "DOM manipulation in action! ⚡",
    "JavaScript makes everything dynamic! 🚀",
  ]

  const randomMessage = messages[Math.floor(Math.random() * messages.length)]
  changeableText.textContent = randomMessage
  changeableText.style.fontSize = "1.3rem"
  changeableText.style.fontWeight = "bold"

  // Reset text style after 3 seconds
  setTimeout(() => {
    changeableText.style.fontSize = "1.1rem"
    changeableText.style.fontWeight = "normal"
  }, 3000)
}

// ========================================
// INITIALIZATION AND EVENT LISTENERS
// ========================================

// Load saved theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("darkTheme")
  if (savedTheme === "true") {
    document.body.classList.add("dark-theme")
  }

  // Add keyboard event listeners for enhanced interactivity
  document.addEventListener("keydown", (event) => {
    // Press 'T' to toggle theme
    if (event.key.toLowerCase() === "t") {
      toggleTheme()
    }
    // Press 'A' to add new element
    if (event.key.toLowerCase() === "a") {
      addNewElement()
    }
  })

  console.log("🎉 JavaScript Fundamentals Dashboard Loaded!")
  console.log('💡 Try pressing "T" to toggle theme or "A" to add elements!')
})

// Additional utility functions for demonstration

/**
 * Utility function: Generate random number
 * Demonstrates: Math object, function parameters with defaults
 */
function getRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Utility function: Capitalize first letter
 * Demonstrates: string methods, conditional logic
 */
function capitalizeFirst(str) {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// Export functions for potential testing (in a real environment)
// This demonstrates modern JavaScript module concepts
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    calculateNumbers,
    formatNumber,
    getRandomNumber,
    capitalizeFirst,
  }
}
