//The "wrapper" function
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*
    * Grunt Sass
    * Compile Sass to CSS using node-sass
    * https://www.npmjs.com/package/grunt-sass
    * */
    sass: {
      options: {
        sourceMap: true
      },
      files: {
        'public/css/styles.css' : 'dev/sass/styles.scss'
      }
    },

    /*
    * Grunt Contrib Compass
    * Compile Sass to CSS using node-compass
    * https://www.npmjs.com/package/grunt-contrib-compass
    * */
    compass: {
      dev: {
        options: 'config.rb'

      }
    },

    /*
    * Grunt PostCSS
    * Post compile css processor, autoprefixer
    * https://www.npmjs.com/package/grunt-postcss
    * */
    postcss: {
      options: {
        map:true,
        processors: [
          require('autoprefixer')({
            // browsers: ['last 2 versions']
            Browserslist: ['defaults']
          })
        ]
      },
      dist: {
        src: '../public/css/**/*.css'
      }
    },

    /*
    * Grunt CSSCSS
    * CSS redundancy analyzer
    * https://www.npmjs.com/package/grunt-csscss
    * */
    csscss: {
      options: {
        verbose: true,
        compass: true,
        ignoreSassMixins: true
      },
      dist: {
        src: ['dev/sass/styles.scss']
      }
    },

    /*
    * Grunt Contrib Uglify
    * Minify JavaScript files
    * https://www.npmjs.com/package/grunt-contrib-uglify
    * */
    uglify: {
      options: {
        sourceMap: true
      },
      my_target: {
        files: {
          // 'assets/javascript/mmenu.all.min.js': ['assets/javascript/mmenu/*js'],
          // 'public/js/scripts.min.js' : ['dev/javascript/*.js', 'node_modules/jquery/dist/jquery.js']
        }
      }
    },

    purifycss: {
      options: {},
      target: {
        src: ['public/*.html', 'publick.js/*.js'],
        css: ['public/css/*.css'],
        dest: 'public/css/purified/purified.css'
      },
    },

    /*
    * Grunt Contrib Watch
    * Monitor files and execute tasks
    * https://www.npmjs.com/package/grunt-contrib-watch
    * */
    // watch: {
    //   sass: {
    //     files: [
    //         'dev/sass/**/*.scss'
    //     ],
    //     tasks: [
    //         'sass'
    //     ]
    //   }, //sass: { END
    //   scripts: {
    //     files: [
    //       'dev/js/*.js'
    //     ],
    //     tasks: [
    //       'uglify'
    //     ]
    //   } //scripts: { END
    // } //watch: { END
    watch: {
      options: {livereload: true},
      scripts: {
        files: ['public/js/*.js']
        // files: ['dev/javascript/*.js', 'assets/javascript/mmenu/*.js'],
        // files: ['dev/'javascript/*.js'],
        // tasks: ['uglify']
      }, //scripts
      html: {
        files: ['private/**/*.php', 'public/*.html', 'public/*.php', 'public/**/*.php', 'public/**/**/*.php']
      },
      css: {
        files: ['public/css/**/*.css']
      },
    }
  });

  //Loading Grunt plugins and tasks
  require('load-grunt-tasks')(grunt);

  //Custom tasks
  grunt.registerTask('default', ['watch']);
};
