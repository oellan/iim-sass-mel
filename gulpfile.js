const {src, dest} = require('gulp');
const sass = require('gulp-dart-sass');

function compileSass() {

    return src('./css/main.scss')
        .pipe(sass({
            includePaths: '_sass',
        }).on('error', sass.logError))
        .pipe(dest('./css'));
}

module.exports = {
    default: compileSass,
};