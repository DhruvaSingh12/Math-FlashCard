Project Structure
math_flash_rn/
├── App.js                 # Navigation and Root setup
├── src/
│   ├── components/
│   │   └── GlossyButton.js # Reusable stylized button
│   ├── hooks/
│   │   └── useGameLogic.js # Core game state and logic
│   ├── screens/
│   │   ├── LoadingScreen.js
│   │   ├── StartScreen.js
│   │   ├── DifficultyScreen.js
│   │   ├── GameScreen.js
│   │   └── SettingsScreen.js
│   └── assets/            # Ported images and sound placeholders
How to Run
Navigate to the project directory:
cd math_flash_rn
Start the Expo development server:
npx expo start
Use the Expo Go app on your phone or an emulator to scan the QR code and view the app.
Production Build
To create a production build of your app, you have two main options with Expo:

1. EAS Build (Recommended)
This is the easiest way to build for Android (APK/AAB) or iOS (IPA) without needing a local mobile development environment (Android Studio or Xcode).

Install EAS CLI:
npm install -g eas-cli
Log in to Expo:
eas login
Configure the Project:
eas build:configure
Build for Android/iOS:
eas build --platform android --profile production
2. Local Production Build (Web)
If you want to build the web version for production:

npx expo export --platform web
The output will be in the dist folder, which you can host on any static web host.

3. Native Local Build
Requires Android Studio (for Android) or Xcode (for iOS) configured on your machine.

npx expo run:android --variant release
# OR
npx expo run:ios --configuration Release