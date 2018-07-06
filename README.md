# Installation

`npm i mwp-user-profile`
or
`yarn add mwp-user-profile`

# Usage

```javascript
import { renderUserProfile } from "mwp-user-profile";
```

```javascript
renderUserProfile({
  container: document.querySelector("#user-profile"),
  idToken: "jwt-auth0-idToken",
  baseUrl: "https://mywebportal.domain.com/msn",
  onLogout: this.customFunction
});
```

- The _container_ is the element where the component will be attached;

- _idToken_ is a Json Web Token issued by auth0 that will be parsed by the component to display user info;

- _baseUrl_ is the base url for the "Profile" and "Logout" pages link;

- _onLogout_ is your custom code that will be called by clicking on the logout button.

## CLI Commands

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

## Use dev module

### Using Yarn

> See [https://yarnpkg.com/lang/en/docs/cli/link/](https://yarnpkg.com/lang/en/docs/cli/link/)

### Using Npm

> See [https://docs.npmjs.com/cli/link](https://docs.npmjs.com/cli/link)
