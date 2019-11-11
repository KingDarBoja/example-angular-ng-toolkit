# Universal Website

This is the experimental universal project developed by KingDarBoja in order to ensure proper functionality of `@ng-toolkit` packages.
Please refer to each section of the readme to gain insight about the building steps of this website.

## Install Dependencies

This project uses Bootstrap v4 along with ngx-bootstrap v5 for style customisation and provide some useful components (tooltips, modals, accordion). For customisation and setup, please read the [Getting started guide](https://github.com/valor-software/ngx-bootstrap/blob/master/docs/getting-started/bootstrap.md) from ngx-boostrap.

As quick tip, all app styles are inside `styles` folder, being loaded as partial files on _`styles.scss`_ in order to generate a single bundled file as recommended by most tutorials.

In order to support _Server Side Rendering_ (SSR) features along with _Progressive Web App_ (PWA), the following packages according to the official Angular and Universal documentation were installed, either manually (M) or internally (I):

- @angular/pwa (M)
- @nguniversal/common (I)
- @nguniversal/express-engine (I)
- @nguniversal/module-map-ngfactory-loader (I)

These packages are required as stated on [ng-toolkit](https://github.com/maciejtreder/ng-toolkit) in order to properly install the next packages:

- @ng-toolkit/pwa
- @ng-toolkit/serverless
- @ng-toolkit/universal

## Serverless + SSR + PWA with ng-toolkit

The advantage of using `ng-toolkit` package is the interchangeably between schematics so we can apply them in any order. Based on that, ran `ng add @ng-toolkit/serverless --provider aws` command on the workspace root so the app is deployable on serverless environment. As the current version of the `ng-toolkit` package at the time writting this readme was `7.1.2`, there were some bugfixes applied to the _`serverless.yml`_ like as upgrading node version and provide a fixed bucket name (which has to be generated manually on AWS first).

Following the fixes, just deploy the app by running the command:

`npm run build:prod:deploy`

Bear in mind that we must configure a custom domain for API gateway in order to properly load files and so on.

After deploying and configuring our custom domain for API Gateway using _AWS Route53_ along with _AWS Certificate Manager_, we will navigate to our app url and probably get this console error:

`Failed to load module script: The server responded with a non-JavaScript MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.`

Please refer to this [Angular issue](https://github.com/angular/angular/issues/30835) to understand why the previous error was being generated and the proposed fix.

The provided fix is setting at `tsconfig.json` the target option with `es5` as follow:
`"target": "es5"`.

After these steps, just ran `ng add @ng-toolkit/universal@7.1.2`(Yeah, there is a bug with the installed version if you don't specify it) to enable **SSR** feature and then `ng add @ng-toolkit/pwa` (after `ng add @angular/pwa`) for the **PWA** one.

## Webpack Config

As you should know, the schematic `@ng-toolkit/universal` internally ran `ng add @nguniversal/express-engine` and hence generated a webpack server configuration file _`webpack.server.config.js`_. This file got changed to **Typescript** language to support _ES Module Import_ but the drawback was **NodeJS** not being able to recognize such imports.

To fix this, follow the [Configuration Languages](https://webpack.js.org/configuration/configuration-languages/) documentation at webpack site.

## Improve Audit Scoring

To improve audit scoring, extra steps were made for each following item:

- Perfomance

    - **Enable file compression on API Gateway**  
    Check out this medium article about [gzip content from aws api gateway](https://medium.com/@OneMuppet_/gzip-deflate-content-from-aws-api-gateway-using-serverless-36e208da4270).  
    As resume, the serverless framework does not support `MinimumCompressionSize` settings, so we have to install `serverless-api-compression` by running the command `npm install --save-dev serverless-api-compression`. And after that, include the proper lines of code as stated on the [npm package](https://www.npmjs.com/package/serverless-api-compression).

- PWA

    - **Provide apple-touch-icon**  
        The `@ng-toolkit/pwa` does add different icon sizes and handles the manifest for these assets as desired. However, as Apple’s iOS iis a bit behind on PWA support (as stated [here](https://stackoverflow.com/questions/52302780/ios-12-pwa-support)), we must add at _`index.html`_ the following link at the `head` tag:  
        `<link rel="apple-touch-icon" href="/assets/icons/icon-512x512.png" />`

    - **Provide meta tags**  
        This one is pretty quick, just add the basic meta tags. If you wish to add more, please check this [awesome GitHub repository](https://github.com/joshbuchea/HEAD) to check them out. This also includes social tags and much more for your website.

- Accessibility

    - **Background and foreground colors do not have a sufficient contrast ratio**  
    Checkout this [color contrast analyzer](https://dequeuniversity.com/rules/axe/3.3/color-contrast) to test background color against text color and find out if it satisfy the rule.
    - **Links do not have a discernible name**
    Provide `aria-label` attributes for link text (and alternate text for images, when used as links).

## Extra Documentation

If you wish to learn how to improve Angular application, I do recommend reading this [Angular Perfomance Checklist](https://github.com/mgechev/angular-performance-checklist/blob/master/README.es-ES.md) document.

## Angular Generated Info

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
