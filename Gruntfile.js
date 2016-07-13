'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        // Configurable paths
        config: {
            lintFiles: [
                '**/*.js',
                '!*.min.js'
            ]
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                '<%= config.lintFiles %>'
            ]
        },
        uglify: {
            build: {
                files: {
                    'angular-emojione.min.js': 'angular-emojione.js'
                }
            }
        }
    });

    grunt.registerTask('lint', [
        'jshint'
    ]);

    grunt.registerTask('test', [
        'lint'
    ]);

    grunt.registerTask('build', [
        'uglify'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};