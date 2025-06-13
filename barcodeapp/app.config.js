const withCleartextTraffic = require('./withCleartextTraffic');


module.exports = {
<<<<<<< HEAD
  "expo": {
    "name": "DemoBarcode",
    "slug": "BarcodeScannerApp",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "automatic",
    "splash": {
      "image": "./assets/logo.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
=======
  expo: {
    name: 'DevBarcodeDevAws',
    slug: 'DevBArcodeApp',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/logo.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
>>>>>>> f6282ed (aws change)
    },
    "updates": {
      "fallbackToCacheTimeout": 0
    },
<<<<<<< HEAD
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "infoPlist": {
        "NSCameraUsageDescription": "Allow BarcodeScan to access your camera for barcode scanning."
=======
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      infoPlist: {
        NSCameraUsageDescription: 'Allow BarcodeScan to access your camera for barcode scanning.',
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: 'com.opticosolution.barcode',
      permissions: [
        'CAMERA',
        'INTERNET',
        'android.permission.CAMERA',
      ],
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      [
        'react-native-vision-camera',
        {
          cameraPermissionText: 'Allow BarcodeScan to access your camera for barcode scanning.',
        },
      ],
      'expo-notifications',
      'expo-barcode-scanner',
      withCleartextTraffic, // 👈 Your custom plugin
    ],
       "extra": {
      "eas": {
        "projectId": "5798eeeb-6d6d-4ab1-a939-6ed2e270c546"
>>>>>>> f6282ed (aws change)
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "package": "com.example.DemoBarcode",
      "permissions": [
        "CAMERA",
        "INTERNET",
        "android.permission.CAMERA"
      ]
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      [
        "react-native-vision-camera",
        {
          "cameraPermissionText": "Allow BarcodeScan to access your camera for barcode scanning."
        }
      ],
      "expo-notifications",
      "expo-barcode-scanner"
    ],
    "owner": "balmukundoptico",
    "extra": {
      "eas": {
        "projectId": "70d9e600-c54a-435a-b211-5b02ad66722a"
      }
    },
    "newArchEnabled": true
  },
};
