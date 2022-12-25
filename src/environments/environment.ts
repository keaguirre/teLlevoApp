// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  
  apiClimaKey: '',
  apiClimaUrl: 'https://api.openweathermap.org/data/2.5/',
  baseUrl: 'https://mindicador.cl/api',
  firebaseConfig: {
  },
  //Django Backend Web
  urlAuto:'',
  urlConductor:'',
  urlPasajero:'',
  urlViaje: '',
  urlSolicitud: ''

  //Django Backend local
  //urlAuto:'http://127.0.0.1:8000/api/auto/',
  //urlConductor:'http://127.0.0.1:8000/api/conductor/',
  //urlPasajero:'http://127.0.0.1:8000/api/pasajero/',
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
