const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

async function includeHTML() {
    return gulp.src([
        './src/*.html',
        '!./src/header.html',
        '!./src/footer.html',
        '!./src/navbar.html'
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest('./'));
};

exports.default = includeHTML;
