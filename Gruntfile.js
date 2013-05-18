module.exports = function(grunt) {

  grunt.initConfig({
    explainjs: {
      dist: {
        options: {
          showFilename: true // default is false
        },
        files: [{
          src: ['src/**/*.js'],
          dest: 'docs/Hydra.html'
        }]
      },
    },
  })

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-explainjs');

  // Default task(s).
  grunt.registerTask('default', ['explainjs']);

};