# nexo-Neutralino App

Most apps for nexo are based in the efficient [Neutralino Framework](https://neutralino.js.org), so they can be ported easily.

This will guide you to create a simple app with nexolib, a CSS library that integrates your app with the rest of the OS.

Keep in mind, that you will need basic UNIX knowledge, JS + the other language you want to use (as a [Neutralino Extension](https://neutralino.js.org/docs/how-to/extensions-overview/) and some patience.)





## Getting Started
### Environment Setup and empty app creation.

#### FONSOS ONLY:

1. On fonsOS, go to **Settings > System > Developer** and enable Commander.SAB.
2. Open *Terminal* and paste the following: `setup-developer.Neutralino` and `setup-developer.fonsOSIDE`.

#### EVERYONE:

3. If you are not in a fonsOS environment, you will need to `git clone https://github.com/NEXO-DESKTOP/nexolib.css.git`.
4. In fonsOS, open *fonsOS Developer Coder* and click on **File > New > Neutralino Basic App**. If you are not in fonsOS, do a `neu create YOUR_APP_NAME --template NEXO-DESKTOP/template`.
5. Now is time to link the nexo libraries. If you used *fonsOS Developer Coder*, it should be all fine, if not you can link temporary the libraries manually with `ln -s`. The links should be like this: `path/to/nexolib.css/googleIcons.ttf` **>** `resources/icons.ttf`, `path/to/nexolib.css/nexolib.css` **>** `resources/nexo.css`, `path/to/nexolib.css/systemIcons` **>** `resources/systemIcons`, `path/to/nexolib.css/systemlib.js` **>** `resources/system.js`. If you are in a fonsOS environment, and you need to create back the soft links, you can run `developer.mknexolib` in the app root directory (not in the "resources" folder).

### Running and configuring

6. To run the app, run `neu run`. In some cases, you will need to create back the nexo lib links, and update the Neutralino binaries with `neu update`.
7. For configuring the app, edit the *neutralino.config.json* file.


### Coding

8. App pages are .html files located in the resources folder. JS files are under resources/js. Edit that files and/or create new ones to develop your app.

9. Happy codding!!



