const { watch } = require('gulp');
const gulp = require('gulp');
const fileinclude = require('gulp-file-include');

// async function includeHTML() {
//     return gulp.src([
//         './src/*.html',
//         '!./src/header.html',
//         '!./src/footer.html',
//         '!./src/navbar.html'
//     ])
//         .pipe(fileinclude({
//             prefix: '@@',
//             basepath: '@file'
//         }))
//         .pipe(gulp.dest('./'));
// };

// watch([
//     './src/*.html',
//     './src/css/*.css',
//     './src/js/*.js'
// ], includeHTML());

// async function includeHTML() {

//     watch([
//         './src/*.html',
//         './src/css/*.css',
//         './src/js/*.js'
//     ], function cb() {
//         return gulp.src([
//             './src/*.html',
//             '!./src/header.html',
//             '!./src/footer.html',
//             '!./src/navbar.html'
//         ])
//             .pipe(fileinclude({
//                 prefix: '@@',
//                 basepath: '@file'
//             }))
//             .pipe(gulp.dest('./'));
//     });
// };

// exports.default = includeHTML;

exports.default = function () {
    watch([
        './src/*.html',
        './src/css/*.css',
        './src/js/*.js'
    ], function cb() {
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
    });
};
