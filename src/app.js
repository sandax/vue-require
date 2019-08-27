// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    map: {
        "*": {
            "text": "require-text",
            "css":"require-css",        
            "json":"requirejs-json"
        }
    },
    paths: {
        jquery:'jquery.min',
        app: '../app',
        assets:'../assets',
        vuejs:"require-vuejs",
        Vue: 'vue',        
        vue: '../vue',
        popper:'proper.min',
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
