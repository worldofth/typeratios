module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                curly: true,
                eqeqeq: true,
                immed: true,
                newcap: true,
                noarg: true,
                undef: true,
                unused: true,
                strict: true,
                eqnull: true,
                expr: true,
                loopfunc: true,
                browser: true,
                globals: {
                    jQuery: true,
                    $: true,
                    angular: true,
                    moment: true,
                    console: true,
                    StbSettings: true,
                    window: true,
                    document: true,
                    _: true
                }
            },
            all: ['resources/js/*.js']
        },
        less: {
            all:{
                options:{
                    paths: ['/resources/css'],
                    sourceMap: true,
                    compress: true
                },
                files: {
                    'resources/css/grid.css': 'resources/css/grid.less',
                    'resources/css/main.css': 'resources/css/main.less'
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            less:{
                files: ['resources/css/**/*.less'],
                tasks: ['less'],
                options: {
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['watch']);
};
