const browserSync = require('browser-sync');
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const buildSass = () => {
  return src('sass/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'));
}

const watchSass = () => {
  return buildSass()
    .pipe(browserSync.stream());
}

const serve = () => {
  browserSync.init({
    server: {
        baseDir: './',
    },
    startPath: 'index.html',
    ghostMode: false,
    notify: false
  });
  buildSass(); 
  watch(['sass/**/*.scss'], watchSass);
  watch(['./*.html'], browserSync.reload);
}

exports.serve = serve;
exports.build = buildSass;