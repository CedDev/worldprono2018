/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';

export default function(app) {
  // Insert routes below
  app.use('/api/leagues', require('./api/league'));
  app.use('/api/newss', require('./api/news'));
  app.use('/api/traductions', require('./api/traduction'));
  app.use('/api/pronos', require('./api/prono'));
  app.use('/api/matchs', require('./api/match'));
  app.use('/api/teams', require('./api/team'));
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth').default);

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
}
