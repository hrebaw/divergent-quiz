# Divergent Faction Selector

An interactive quiz app to determine which Divergent faction you belong to, based on 20 carefully designed questions.

## Factions

- **Dauntless** 🔥 - Brave, fearless, and action-oriented
- **Erudite** 📚 - Intelligent, curious, and knowledge-seeking
- **Amity** 🌾 - Peaceful, kind, and empathetic
- **Candor** ⚔️ - Honest, direct, and truthful
- **Abnegation** 🕊️ - Selfless, humble, and service-oriented

## How to Run

### Option 1: Python (Recommended)
```bash
cd c:\Users\holly\Documents\divergent
python -m http.server 8000
```
Then open your browser to: `http://localhost:8000`

### Option 2: Node.js
If you have Node.js installed with http-server:
```bash
npm install -g http-server
cd c:\Users\holly\Documents\divergent
http-server -p 8000
```
Then open your browser to: `http://localhost:8000`

### Option 3: Using VS Code Live Server
Install the Live Server extension and right-click `index.html` → "Open with Live Server"

## Features

- ✨ Elegant dark theme inspired by the Hunger Games district selector
- 📊 20 personality-based questions designed for each faction
- 🎯 Dynamic scoring system that calculates your faction affinity
- 🎨 Faction-specific color theming for results page
- 📱 Responsive design (works on mobile and desktop)
- 🔄 Ability to retake the assessment

## How It Works

1. Click "BEGIN ASSESSMENT" to start the 20-question quiz
2. Answer each question honestly - your answers are scored based on which faction they align with
3. View your results with detailed information about your faction's:
   - Core value
   - Role in society
   - Key strengths
   - Main challenges
4. Click "RETAKE ASSESSMENT" to try again

## Files

- `index.html` - Main HTML structure
- `style.css` - Styling and layout (dark theme)
- `script.js` - Quiz logic and faction system

## Customization

You can easily customize the quiz by editing `script.js`:
- Add more questions to the `questions` array
- Modify faction descriptions and traits in the `factions` object
- Change colors by modifying the CSS variables in `style.css`
