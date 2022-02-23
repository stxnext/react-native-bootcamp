### React Native bootcamp App


# What you need before start

Make sure to use `yarn` instead of `npm`. This project has only `yarn.lock` lockfile.

If you want to develop for iOS, Mac device will be needed. It is also advised for Android
developed thanks for better tooling.

Make sure to follow official
[React Native Getting Started documentation](https://facebook.github.io/react-native/docs/0.61/getting-started)
before setting up project-specific dependencies. Make sure to select `React Native CLI Quickstart`
tab, as this project is **not** based on Expo.

## Yarn

Download all npm dependencies using `yarn` in the root of the project.
To download iOS Pods, go to `ios` directory and run `pod install`.


# Development

Make sure to have React Native Metro bundler running all the time when developing. To run the bundler simply run
```
yarn start
```
and do not close terminal window.

## Android

Open `android` directory in Android Studio. Gradle sync should turn on automatically. If sync is not happening,
use Gradle Sync icon from the toolbar to initiate it.
To install the application on emulator or device simply use the play button ▶

## iOS

Open `ReactNativeStarterKit.xcworkspace` in Xcode. Make sure not to use the `.xcodeproj` file as the project is
using CocoaPods.
To install the application on simulator or device simply use the play button ▶

## Debugging
### Flipper

To test redux store in flipper:
- Install flipper-plugin-redux-debugger in Flipper desktop client:
```
Manage Plugins > Install Plugins > search "redux-debugger" > Install
```

To test react navigation in flipper:
- Install the react-navigation plugin in the Flipper app
```
Manage Plugins > Install Plugins > search "react-navigation" > Install
```

## Imports
Barrel imports (from index file) are also utilised in the project.
Also, thanks to metro bundler, we can easily create absolute imports within the project.
Use it at your advantage, for example:
```
import { FullScreenTemplate, StyledText } from 'app/components';
```
instead of:
```
import { FullScreenTemplate } from '../../components/FullScreenTemplate';
import { StyledText } from '../../components/StyledText';
```

Make sure not to create circular dependencies.


## Project structure

+ `src` -> is a main app folder
+ + `assets` -> contains all images
+ + `components` ->  contains all reusable components used across the app. Structure example: `component/Button/index.tsx`
+ + `config` -> contains all configurations for the project ex. translations, style guide, environment variables
+ + `screens` -> contain all navigation screens that can be displayed to the user
+ + `services` -> contain all services that fetch specific data
+ + `store` -> contain actions, selectors and reducers. Each module mirrors the same folder name for actions, selectors, reducers ex. `actions/user`, `reducer/user`, `selectors/user`
+ + `theme` -> contain colors etc.
+ + `types` -> contain all the types used across the app
All modules are exported in `index.ts` to make the code cleaner and have a single place of import. ex. Every module contained in `types` folder is exported inside one parent `index.ts`

