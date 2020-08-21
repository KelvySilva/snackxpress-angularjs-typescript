import { module } from 'angular';
import ngRoute from 'angular-route';

import configureRoutes from './routes';

let app = module('snackxpress',[ngRoute]);
app.config(configureRoutes);

export default app;