// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  apiClimaKey: 'ca1342264d761f5b055eaa6e87fed887',
  apiClimaUrl: 'https://api.openweathermap.org/data/2.5/',
  baseUrl: 'https://mindicador.cl/api',
  firebaseConfig: {
    apiKey: "AIzaSyCwViIca9zjl9uXbsGdIUiIdoBAkPKMeA0",
    authDomain: "backhybrid-11097.firebaseapp.com",
    projectId: "backhybrid-11097",
    storageBucket: "backhybrid-11097.appspot.com",
    messagingSenderId: "421630961199",
    appId: "1:421630961199:web:6610e47b845c60421b48da"
  },
  urlAuto:'https://backend-mobile.onrender.com/api/auto/',
  urlConductor:'https://backend-mobile.onrender.com/api/conductor/',
  urlPasajero:'https://backend-mobile.onrender.com/api/pasajero/',
  urlViaje: 'https://backend-mobile.onrender.com/api/viaje/',
  urlSolicitud: 'https://backend-mobile.onrender.com/api/solicitud/'
  //urlAuto:'http://127.0.0.1:8000/api/auto/',
  // urlPasajero:'http://127.0.0.1:8000/api/pasajero/',
  //urlViaje: 'http://127.0.0.1:8000/api/viaje/',
  //urlSolicitud: 'http://127.0.0.1:8000/api/solicitud/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
