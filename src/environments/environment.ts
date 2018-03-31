// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB-GKeDYcBybduzXj03VOROj2FuR9F8k5s",
    authDomain: "fireauth-ng5.firebaseapp.com",
    databaseURL: "https://fireauth-ng5.firebaseio.com",
    projectId: "fireauth-ng5",
    storageBucket: "fireauth-ng5.appspot.com",
    messagingSenderId: "842147248871"
  }
};
