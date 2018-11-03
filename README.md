# irl-reporting-site
(In-Progress) A front-end interface to report and view Indian River Lagoon data on a webpage(Hackathon - Hack the Indian River Lagoon).

While data sample entry sites exist already for the "clean up the Indian River Lagoon initiative", that data is technical and can often require volunteers to purchase materials and equipment, or undergo technical training.

This site focuses on the "softer" layer of community entered data. Where does a would-be volunteer without equipment or training go to contribute their observations? This site uses the human senses to collect soft data from the average human observer.

From this data, technical volunteers might narrow down their search for where to collect samples rather than an entirely random sampling.

In addition to assisting the technical volunteers, and potentially pulling information from the "hard" data sources, this site can display the health of the Indian River Lagoon similar to that of the weather channel for weather.

---

## Classes

* [Class Documentation](docs/README.md)

---

## Developer Adaptations

Depending on where you launch this application. It will be necessary in most cases to adapt certain files to be hosted live.

The first change is in the package.json script command for `npm run build`

Change the `/applications/save-the-irl/` within `ng build --prod --base-href=/applications/save-the-irl/` to match the path where your build files will reside on the server in relation to the root domain.

As this application uses Angular's awesome routing technology, and in my case the hosting server is Apache, it is necessary to include an `.htaccess` file at the hosted level. This redirects all url's back to the index.html that Angular builds. In order to bookmark extensions and have them work, they need to be properly redirected.

Inside the `/src/assets/configs/` folder you will see my `.htaccess` file. Just like in the npm script command, change `/applications/save-the-irl/` to match the path where your build files will reside on the server in relation to the root domain.

Don't worry about moving this file. The build command will do that for you at the end of the build process. Simply upload all `dist/` folder contents to the server location you want, and it should do the rest.

For any other server hosting types, you'll have to figure it out for yourself.

---

## Typescript Linting

With a few exceptions, all typescript linting is performed by the built in Angular linter. Personal preferences can be added in the `tslint.json` file, which resides at project root level.

To run only the typescript linter, simply run the command: `ng lint`

To run all the linters, simply run the command: `npm run lint`

---

## Pug Linting

All pug linting is performed by the third-party linter: `pug-lint`. Personal preferences are currently and can be added in the `.pug-lintrc.json` file, which resides at project root level.

To run only the typescript linter, simply run the command: `ng lint:pug`

To run all the linters, simply run the command: `npm run lint`

---

## Sass Linting

All sass linting is performed by the third-party linter: `stylelint`. Personal preferences are currently and can be added in the `.stylelintrc.json` file, which resides at project root level.

To run only the typescript linter, simply run the command: `ng lint:pug`

To run all the linters, simply run the command: `npm run lint:style`
