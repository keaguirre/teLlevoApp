// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  apiClimaKey: 'ca1342264d761f5b055eaa6e87fed887',
  apiClimaUrl: 'https://api.openweathermap.org/data/2.5/',
  baseUrl: 'https://mindicador.cl/api',
  firebaseConfig: {
    apiKey: "AIzaSyDKRplySkK7hdY5JRCEpXQhFDDt7jBuqhc",
    authDomain: "backendimg.firebaseapp.com",
    projectId: "backendimg",
    storageBucket: "backendimg.appspot.com",
    messagingSenderId: "791778332028",
    appId: "1:791778332028:web:2d6ca5a1022c9f1bfc28f9",
    measurementId: "G-Q01JRGGG0E"
  },
  urlAuto:'http://127.0.0.1:8000/api/auto/',
  urlConductor:'http://127.0.0.1:8000/api/conductor/',
  urlPasajero:'http://127.0.0.1:8000/api/pasajero/',
  urlViaje: 'http://127.0.0.1:8000/api/viaje/',
  urlSolicitud: 'http://127.0.0.1:8000/api/solicitud/'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
