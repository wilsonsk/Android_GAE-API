# ReactNativeGAE_RestApi

---
#### Development Environment: Windows
#### Target OS: Android
---

---
## Dependencies:
To run this project, you will need Node, the React Native command line interface, Python2, a JDK, and Android Studio
---

---
## 1. Open an Command Prompt as Administrator:
#### Right click Command Prompt, then select 
###### `Run as Administrator`. 
#### The following commands will be entered in this Command Prompt.
---

---
## 2. Node, Python2, JDK:
#### In the current Command Prompt, run 
###### `choco install -y nodejs.install python2 jdk8`
---

---
## 3. React Native Command Line Interface (CLI)
#### In the current Command Prompt, 
###### `npm install -g react-native-cli`
###### If you get an error, `Cannot find module 'npmlog'`, try installing npm directly: 
###### `curl -0 -L https://npmjs.org/install.sh | sudo sh`
---

---
## 4. Install Android Studio
###### [install Android Studio](https://developer.android.com/studio/index.html)
## Choose `Custom` setup as installation type. 
## The following components must be selected:
##### `Android SDK`
##### `Android SDK Platform`
##### `Performance (Intel HAXM)`
##### `Android Virtual Device`

## For other help with setting up Android Studio SDK's, and globale, environment variables, see:
[Offical Docs - see section: Android development environment](https://facebook.github.io/react-native/docs/getting-started.html)
---

---
# How to Run Locally on an Android Studio Emulator
## 1. Open Android Studio
## 2. Click `tools -> Android -> AVD Manager`
## 3. Click `Create Virtual Device`
### - Select `x86 Images` tab, then select `Marshmellow API Level 23, x86_64 ABI image with Android 6.0 (Google APIs) target`
## 4. Click the triangle ('play') button to start the Android emulator
## 5. Wait for the Android home screen to load
## 6. Open the Command Prompt as Administrator
### a. enter the `ReactNativeGAE_RestApi` directory
### b. enter the command, `react-native run-android`
### c. wait for bundling process
## 7. App will load a login screen.
---
