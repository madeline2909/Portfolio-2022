module.exports = function(grunt) {
    grunt.initConfig({
        codekit: {
            your_target: {
            files : {
            'deploy/index.html' : 'dev/index.kit',
            }
            },
            },
    }); 
    grunt.loadNpmTasks('grunt-codekit');
};
