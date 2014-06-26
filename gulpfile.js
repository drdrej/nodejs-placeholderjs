var gulp    = require('gulp');
var imageResize = require('gulp-image-resize');

// var changed = require("gulp-changed");

// .pipe(changed("dist"))
// "src/**/*.{jpg,png}"

/*
gulp.task("resize-image", function () {
    gulp.src( "img/test.png" )
        .pipe(imageResize(
            {
                width : 100,
                imageMagick : true
            }))
        .pipe(gulp.dest("dist"));
});


gulp.task('default', ['resize-image']);
*/

var es = require('event-stream');
var _ = require( "underscore" );

gulp.task("resize-image", function () {

    var config = require( "./placeholder.json" );
    var tasks = _.map(config.images, function(image) {
        return gulp.src( "img/" + image.name + "." + image.type + "" )
        .pipe(imageResize(
            {
                width : 100,
                imageMagick : true
            }))
        .pipe( gulp.dest("dist") );
    });

    return es.concat.apply(null, tasks);
});


gulp.task('default', ['resize-image']);


/*
var fs = require('fs');
var path = require('path');
var es = require('event-stream');
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task('scripts', function() {
    var folders = getFolders(scriptsPath);

    var tasks = folders.map(function(folder) {
        // concat into foldername.js
        // write to output
        // minify
        // rename to folder.min.js
        // write to output again
        return gulp.src(path.join(scriptsPath, folder, '/*.js'))
            .pipe(concat(folder + '.js'))
            .pipe(gulp.dest(scriptsPath))
            .pipe(uglify())
            .pipe(rename(folder + '.min.js'))
            .pipe(gulp.dest(scriptsPath));
    });

    return es.concat.apply(null, tasks);
});

    */