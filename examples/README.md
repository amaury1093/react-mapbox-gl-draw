# Example for react-mapbox-gl-draw

## Get Started

```bash
# In the root folder
yarn build
cd examples
yarn install
yarn start
```

This runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Windows Users

`create-react-app` doesn't allow to use modules outside of the `src/` folder. There's a symlink in the `examples/src/` folder which points to `lib/`, but as far as I know this doesn't work on Windows.

To make it work, run the following code:

```bash
# In the examples/ folder
cp ../lib/index.js src/react-mapbox-gl-draw.js
```

## More info

This project is bootstrapped with `create-react-app`. Have a look at [their docs](https://github.com/facebookincubator/create-react-app) for more info.
