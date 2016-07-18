/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // insert some dummy data
  Project.count().exec(function (err, count) {
    if (err) return cb(err);
    if (count > 0) return cb();

    Project.create([
      {name: 'First Project'},
      {name: 'Second Project'},
      {name: 'Third Project'},
      {name: 'Fourth Project'},
      {name: 'Fifth Project'},
    ], cb);
  })
};
