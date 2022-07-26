const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildSass = () => {
  return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

const watchSass = () => {
  watch(['sass/**/*.scss'], buildSass);
}

exports.default = series(buildSass, watchSass);