# Text to Speech Converter
![image](https://github.com/user-attachments/assets/604aad5d-2867-4c40-95cd-174578f18d88)

## Description
The **Text to Speech Converter** is a simple web application that allows users to input text and convert it into speech using the Web Speech API. Users can choose from different available voices and listen to the text being read aloud.

## Features
- **User-Friendly Interface**: Clean and responsive design.
- **Text Input**: Users can type or paste text into a textarea.
- **Voice Selection**: Choose from multiple available voices.
- **Play Button**: Converts text into speech instantly.
- **Modern UI**: Styled with CSS for a visually appealing experience.

## Technologies Used
- **HTML**: Structure of the web page.
- **CSS**: Styling and layout.
- **JavaScript**: Handles text-to-speech functionality using the Web Speech API.

## Installation & Usage
### Prerequisites
- A modern web browser that supports the Web Speech API (e.g., Chrome, Edge, Firefox).

### Steps to Run
1. **Clone the Repository**
2. **Navigate to the Project Directory**
   ```bash
   cd text-to-speech
   ```
3. **Open `index.html` in a Browser**
   - Simply double-click `index.html`, or
   - Run the following command if you have Python installed:
     ```bash
     python -m http.server 8000
     ```
   - Then open `http://localhost:8000` in your browser.

## File Structure
```
text-to-speech/
│── index.html     # Main HTML file
│── style.css      # Styling file
│── script.js      # JavaScript for functionality
│── images/        # Icons and images used
```

## How It Works
1. Type or paste text into the provided textarea.
2. Select a voice from the dropdown menu.
3. Click the **Listen** button to hear the text read aloud.
4. The Web Speech API synthesizes the speech and plays it.

## Future Improvements
- Add support for adjusting speech rate and pitch.
- Implement a save feature to download the generated speech as an audio file.
- Enhance UI with animations and accessibility improvements.

