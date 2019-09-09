module.exports = function(grunt) {
    var targetDir = grunt.config.get('targetDir');
    var nodeModulesPath = grunt.config.get('nodeModulesPath');

    grunt.config.merge({
        less: {
            demo: {
                options: {
                    compress: false,
                    modifyVars: {
                        "fa-font-path": "/demo/dist/fonts",
                        "flag-icon-css-path": "/demo/dist/flags"
                    }
                },
                files: [
                    {
                        src: [
                            targetDir+"/modules/YawikDemoSkin/less/YawikDemoSkin.less",
                            "./node_modules/select2/dist/css/select2.min.css",
                            "./node_modules/pnotify/dist/pnotify.css",
                            "./node_modules/pnotify/dist/pnotify.buttons.css",
                            "./node_modules/bootsrap3-dialog/dist/css/bootstrap-dialog.css"
                        ],
                        dest: targetDir+"/modules/YawikDemoSkin/dist/YawikDemoSkin.css"
                    }
                ]
            },
        },
        cssmin: {
            demo: {
                files: [
                    {
                        dest: targetDir+'/modules/YawikDemoSkin/dist/YawikDemoSkin.min.css',
                        src: targetDir+'/modules/YawikDemoSkin/dist/YawikDemoSkin.css'
                    }
                ]
            }
        }
    });

    grunt.registerTask('yawik:demo',['copy','less','concat','uglify','cssmin']);
};