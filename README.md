# Installation
`npm i mwp-user-profile`  
or  
`yarn add mwp-user-profile`

# Usage

```javascript
import { renderUserProfile as initUserProfile } from 'mwp-user-profile';
```

```javascript
initUserProfile({
  container: document.querySelector('#user-profile'),
  idToken: 'jwt-auth0-idToken',
  mwpDomain: 'https://mywebportal.domain.com',
  onLogout: this.customFunction
});
```

- The *container* is the element where the component will be attached;

- *idToken* is a Json Web Token issued by auth0 that will be parsed by the component to display user info;

- *mwpDomain* is the domain name for the "Profile" page link;

- *onLogout* is your custom code that will be called by clicking on the logout button.

# preact material app

Super performant `Material` app for preact world using [preact-material-components](https://github.com/prateekbh/preact-material-components)

## CLI Commands

``` bash
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