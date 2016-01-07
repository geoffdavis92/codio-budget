module.exports = function(grunt) {
    grunt.initConfig({
        'watch': {
            'lintConfigs': {
                'files': ['Gruntfile.js','config.js','index.js'],
                'tasks': ['eslint:configs']
            },
            'sass': {
                'files': ['src/sass/**/*.sass'],
                'tasks': ['sass:dev']
            },
            'babel': {
                'files': ['src/js/**/*.js'],
                'tasks': ['eslint:dev','babel:controllers','babel:models','babel:scripts']
            }
        },
        'sass': {
            'dev': {
                'options': {},
                'files': [{
                    'expand': true,
                    'cwd': './src/sass',
                    'src': ['**/*.sass'],
                    'dest': './css',
                    'ext': '.css'
                }]
            }
        },
        'babel': {
            'controllers': {
                'options': {},
                'files': [{
                    'expand': true,
                    'cwd': './src/js',
                    'src': ['*.c.js'],
                    'dest': './controllers/',
                    'ext': '.js'
                }]
            },
            'models': {
                'options': {},
                'files': [{
                    'expand': true,
                    'cwd': './src/js',
                    'src': ['*.m.js'],
                    'dest': './models/',
                    'ext': '.js'
                }]
            },
            'scripts': {
                'options': {},
                'files': [{
                    'expand': true,
                    'cwd': './src/js',
                    'src': ['*.js','!*.c.js','!*.m.js'],
                    'dest': './js/',
                    'ext': 'js'
                }]
            }
        },
        'eslint': {
            'configs': {
                'target': ['./workspace/Gruntfile.js','./workspace/config.js','./workspace/index.js']
            },
            'dev': {
                'target': ['src/js/**/*.js']
            }
        }
    })
    grunt.loadNpmTasks('grunt-contrib-watch')
    grunt.loadNpmTasks('grunt-contrib-sass')
    grunt.loadNpmTasks('grunt-babel')
    grunt.loadNpmTasks('grunt-eslint')
    grunt.registerTask('default',['watch'])
}