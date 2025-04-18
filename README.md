# Feraset Case – Logo Style Generator App

**Feraset Case** is a React Native app (built with Expo) that enables users to generate unique logo designs by entering creative prompts and choosing from various predefined styles. The app uses Firebase Cloud Functions to simulate image generation and provides real-time feedback with a dynamic UI.

---

## 📦 Project Structure

```
feraset-case/
├── assets/                          # Static assets used throughout the app
│   ├── background/                  # Background images
│   ├── expo/                        # Expo-specific assets (icon, splash, etc.)
│   ├── fonts/                       # Custom font files
│   ├── icons/                       # General icons used in UI
│   └── style_icons/                 # Icons representing different logo styles
│
├── firebase/                        # Firebase backend configuration
│   ├── functions/                   # Firebase Cloud Functions code
│   │   ├── services/                # Service layer (e.g., Firestore operations)
│   │   │   └── firestore.js         # Handles add/update operations for Firestore
│   │   ├── utils/                   # Utility functions for Firebase
│   │   │   ├── cors.js              # CORS middleware for HTTP functions
│   │   │   ├── firebase-init.js     # Firebase admin SDK initialization
│   │   │   └── seedStyles.js        # Seeding initial styles into Firestore
│   │   └── index.js                 # Entry point for Firebase Cloud Functions
│   ├── firebase-debug.log          # Firebase emulator debug logs
│   └── firebase.json               # Firebase project configuration
│
├── src/                             # Main source code for the React Native app
│   ├── api/                         # API service functions
│   │   ├── endpoints.js             # Contains endpoint constants
│   │   ├── generateMockImage.js     # API call for image generation
│   │   ├── getStyleList.js          # API call to fetch available logo styles
│   │   └── index.js                 # Axios instance and global config
│
│   ├── components/
│   │   └── common/                  # Reusable UI components
│   │       ├── CreateButton/        # Button with gradient style
│   │       ├── CustomHeader/        # Custom screen header
│   │       ├── CustomLoader/        # Custom circular loader
│   │       ├── GradientBackground/  # Background with gradient
│   │       ├── GradientWrapper/     # Gradient overlay wrapper
│   │       ├── PromptCard/          # Card to display prompt and design
│   │       ├── PromptInput/         # Text input for user prompt
│   │       ├── StatusChip/          # Chip to show generation status (loading, error, etc.)
│   │       └── StylePicker/         # Horizontal list of style options
│
│   ├── constants/                   # App-wide constant values
│   │   ├── dummyData.js             # Sample prompts for testing
│   │   ├── icons.js                 # Icon imports
│   │   ├── images.js                # Image imports
│   │   ├── status.enum.js           # Enum for status types (IDLE, LOADING, etc.)
│   │   └── strings.js               # UI text strings for localization
│
│   ├── context/
│   │   └── AppContext.js            # Global app state context (if needed)
│
│   ├── hooks/                       # Custom React hooks
│   │   ├── useGenerateMockImage.js  # Hook to generate images via API
│   │   └── useStyleList.js          # Hook to fetch available styles
│
│   ├── navigation/
│   │   └── AppNavigator.js          # App navigation setup using React Navigation
│
│   ├── screens/                     # Main app screens
│   │   ├── InputScreen/             # Screen for entering prompt and selecting styles
│   │   │   ├── index.js             # InputScreen logic
│   │   │   └── styles.js            # InputScreen styles
│   │   ├── OutputScreen/            # Screen for viewing the generated logo
│   │   │   ├── index.js             # OutputScreen logic
│   │   │   └── styles.js            # OutputScreen styles
│
│   ├── theme/
│   │   └── colors.js                # Color palette used throughout the app
│
│   └── utility/
│       ├── statusHelper.js          # Returns status (IDLE, LOADING, SUCCESS, ERROR)
│       └── styleIconMapper.js       # Maps style ID to matching icon
│
├── App.js                           # App entry point
├── app.json                         # Expo configuration file
├── index.js                         # Root file for React Native app
├── .gitignore                       # Git ignored files list
├── package.json                     # Project dependencies
└── package-lock.json                # Exact versions of installed dependencies
```

---

## 🚀 Features

- 🎨 **Prompt-Based Logo Generation**  
  Users enter a prompt to describe their logo idea. A mock image is then returned via Firebase Cloud Functions.

- 🧠 **“Surprise Me” Prompt Suggestions**  
  Auto-generates fun prompts from a list of creative ideas.

- 💡 **Style Picker**  
  Users can select a visual style (e.g., monogram, abstract, mascot) to customize the result.

- ⏳ **Status Indicator**  
  A dynamic status chip component visually shows loading, error, or success states with animation.

- ⚙️ **Firebase Integration**  
  Firebase Functions simulate delayed logo generation and return mock data.

- ⚛️ **React Query Integration**  
   Manages async requests and caching for prompt submission and style fetching, including loading and error states.
- 🧠 **Context API Integration**  
   After image generation, the app stores the generated `imageUrl`, the original `prompt`, and the selected `style` in global context. This allows the `OutputScreen` to easily access and display the result without prop drilling.

---

## 🔧 Tech Stack

- **React Native (Expo)**
- **Firebase Cloud Functions**
- **Cloud Firestore** – Used to store user prompts, image generation status, and available logo styles
- **React Query**
- **Animated SVG Loader**
- **Custom Font + Theming**
- **React Navigation** – Handles screen transitions and navigation stacks
- **Axios** – Handles API requests with interceptors and global configuration
- **Expo Clipboard** – Enables copying prompts to clipboard
- **React Native SVG** – Used for the custom circular loader component
- **Context API** – Stores shared data like prompt, style, and image across screens

---

## 📲 Getting Started

### Prerequisites

- Node.js & npm
- Expo CLI  
  `npm install -g expo-cli`
- Firebase CLI  
  `npm install -g firebase-tools`

### Installation

```bash
git clone https://github.com/your-username/feraset-case.git
cd feraset-case
npm install
```

### Run the App

```bash
expo start
```

### Start Firebase Functions Locally

```bash
cd firebase/functions
npm install
firebase emulators:start
```

---

## 🔥 Firebase Functions

This project includes Firebase Cloud Functions located under the `/firebase/functions` directory. These functions simulate backend operations like generating images and retrieving logo styles.

### `generateMockImage`

This is the main function used to simulate logo generation. Here's what it does:

1. Receives a POST request with a `prompt` value.
2. Saves an initial "processing" document into Firestore using the `addMockGeneration(prompt)` service.
3. Waits for a simulated delay (30-60 seconds).
4. Updates the Firestore document with a status of `"done"` and a mock `imageUrl` using `updateMockGeneration(id, data)`.

This mimics an async image-generation process and allows the frontend to display status indicators in real time.

### `getStyleList`

Returns a list of available logo styles from the `styles` collection in Firestore. This data is seeded automatically when Firebase initializes using the `seedStyles.js` script.

### Firestore Usage

Firestore is used to:

- Save each prompt submitted by the user
- Track the generation status (`processing`, `done`, `error`)
- Store and retrieve predefined logo styles (e.g., monogram, mascot)

The Firestore structure includes:

- `mockGenerations` collection: stores prompt submissions
- `styles` collection: stores visual styles shown in the style picker

### Seeding Initial Data

Upon Firebase initialization, `utils/seedStyles.js` runs and checks if the `styles` collection exists. If not, it seeds the database with default styles like `"monogram"`, `"abstract"`, `"mascot"`, and `"none"`.

This makes sure that the app has style options available even on a fresh Firebase deployment.
