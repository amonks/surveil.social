module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    'clean': {
      build: {
        src: ["build", "dist"]
      }
    },

    'copy': {
      pub: {
        files: [
          {
            cwd: 'pub',
            src: '**/*',
            dest: 'build',
            expand: true
          },
        ]
      },
      js: {
        files: [
          {
            cwd: 'src/js',
            src: '**/*',
            dest: 'build/js',
            expand: true
          },
        ]
      },
    },

    'jade': {
      compile: {
        options: {
          pretty: true,
        },
        files: [
          { "build/index.html": "src/jade/index.jade" },
          { "build/rules.html": "src/jade/rules.jade" },
          { "build/thoughts.html": "src/jade/thoughts.jade" }
        ]
      }
    },

    'stylus': {
      compile: {
        options: {
          compress: false
        },
        files: {
          "build/style.css": "src/stylus/style.styl",
        }
      }
    },

    'requirejs': {
      compile: {
        options: {
          allowSourceOverwrites: true,
          appDir: "build",
          baseUrl: "build/js",
          dir: "dist",
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/**'],
        tasks: ['build'],
        options: {
          spawn: false,
        },
      },
    },
    'gh-pages': {
      options: {
        base: 'build'
      },
      src: ['**']
    }
  });



  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');


  grunt.registerTask('cleanup', [
    'clean:build',
  ]);

  grunt.registerTask('build', [
    'cleanup',
    'copy:pub',
    'copy:js',
    'jade',
    'stylus:compile',
  ]);

  grunt.registerTask('dist', [
    'build',
    'gh-pages'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);
};
