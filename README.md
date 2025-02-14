# Material Angular Dashboard + Node.js

Welcome to the first dark dashboard with Google Material Design and Angular powered with [Node.js](https://nodejs.org/) backend and [Passport.js](http://www.passportjs.org/) authentication facility!

<a target="_blank" href="http://material-angular-dashboard.creativeit.io/"><img src="https://trello-attachments.s3.amazonaws.com/55f8466d8f95075bca20dd66/5bf421455ab0f05102cadac9/eee32e50e9fc278b715442a3fc6f65aa/Readme.png"/></a>

## Overview

This bundle contains Node.js backend with authentication, simple REST API and server side pagination.

With authentication feature you can control data access in your users network.

With REST API you can fully separate business logic from the client to use multiple different clients with single backend.

Server side pagination feature can save traffic due to the fact that the extra data is not loaded.

Its much more fun with the [demo](http://dashboard-auth-demo.creativeit.io).

Material admin template is absolutely free for commercial usage theme, based on Google Material Design guidelines.

> **Important**: We are still working on the project and there will be much more awesome, check out our [issues](https://github.com/CreativeIT/material-angular-dashboard/issues) to see what features are coming soon.

# SETUP and USAGE

The steps below will take you through cloning your own fork, installing dependencies and building:

1. Fork and/or clone our repository. To use Git from command line, see the [Setting up Git](https://help.github.com/articles/set-up-git/) and [Fork repo](https://help.github.com/articles/fork-a-repo/) articles.

```bash
git clone https://github.com/CreativeIT/material-angular-dashboard.git
```

2. Open your copied repo folder in terminal and checkout `feature/backend` branch to use bundle with backend.

```bash
git checkout feature/backend
```

3. Install necessary modules, make sure that you have installed [npm](https://www.npmjs.com/get-npm):

```bash
npm install
# then for backend
cd backend
npm install
```

4. Install [angular-cli](https://cli.angular.io/) globally to use its commands in the terminal:

```bash
npm install --global @angular/cli
```

5. Now you are able to run or build the project:

Run `npm start` or `ng serve` for a dev server. The app will automatically reload if you change any of the source files. Or run `npm run build` or `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

Go to `backend` directory and run `npm start` to start node.js backend.

Navigate to `http://localhost:4200/`. Use the following credentials to sign in the Dashboard: user: _admin@admin.admin_ , password: _admin_

# FEATURES

* Angular

* [Material Design](http://www.google.com/design/spec/material-design/introduction.html)

* TypeScript

* [Passport.js](http://www.passportjs.org/)

* [Express](https://expressjs.com/)

* Responsive dark material design. DARK, Carl!

* User experience focused

* [Sass](http://sass-lang.com/)

* [D3](https://d3js.org/) and [NVD3](http://nvd3.org/)

* MIT License

# Additional

Since the project uses [BEM](http://getbem.com) structure with sass, it can be customized in an easy way by editing `src/theme/scss/_variables.scss` file.

Project uses [d3](https://d3js.org/) and [nvd3](http://nvd3.org/) to build charts and chart components.

# Quick start
Do you want to start quickly and don't need all the pages and modules? You can checkout to empty 
[starter-kit branch](https://github.com/CreativeIT/material-angular-dashboard/tree/starter-kit) and get to work!

# Hire us

We are ready to become a strong development partner and bring competitive advantage to your business. Visit our site [creativeit.io](http://creativeit.io/) or drop us a line <hello@creativeit.io>. We will be happy to help you!

# Credits

Material Angular Dashboard was inspired by [html5 material dashboard](https://github.com/CreativeIT/material-dashboard-lite)

Designed with passion and coffee by CreativeIT.

# Support the project

* Star the repo :star:

* Create an issue report or feature request

* Follow us on [Twitter](https://twitter.com/intent/follow?screen_name=CreativeITeam)
