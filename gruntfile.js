//The "wrapper" function
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*
      * Grunt Contrib Watch
      * Monitor files and execute tasks
      * https://www.npmjs.com/package/grunt-contrib-watch
    */

    watch: {
      options: {livereload: true},
      scripts: {
        files: ['public/js/*.js']
        // files: ['assets/javascript/*.js', 'assets/javascript/mmenu/*.js'],
        // files: [assets/'javascript/*.js'],
        // tasks: ['uglify']
      }, //scripts
      html: {
        files: ['public/**/*.html', 'public/**/*.php', '!public/forms/**', 'private/includes/**/*.php']
      },
      css: {
        files: ['public/css/**/*.css']
      }
    }
  })

  //Loading Grunt plugins and tasks
  require('load-grunt-tasks')(grunt);

  //Custom tasks
  grunt.registerTask('default', ['watch']);
}