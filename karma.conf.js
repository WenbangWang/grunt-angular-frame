// Karma configuration
// Generated on Tue Feb 25 2014 11:27:36 GMT-0500 (EST)
// (edited a few times since)

module.exports = function (config) {
  'use strict';
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: './',


    // frameworks to use
    frameworks: ['jasmine', 'requirejs'],


    // list of files / patterns to load in the browser
    files: [
        {pattern: 'app/components/**/*.js', included: false},
        {pattern: 'app/modules/**/*.js', included: false},
        {pattern: '.tmp/styles/*.css', included: false},
        {pattern: 'test/app/modules/**/*-spec.js', included: false},
      'test/test-main.js'
    ],


    // list of files to exclude
    exclude: [],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress', 'coverage'],

    //Indicates Coverage Report should be generated for all the JS files mentioned in the dir path
    preprocessors: {

    },

    // Specifies the Format in which report should be generated
    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'report/coverage/'},
        {type: 'text-summary'},
        {type: 'text'}
      ]
    },

    // web server port
    // note: grunt overrides this value
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
