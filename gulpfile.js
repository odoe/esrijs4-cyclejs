
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('es6', function () {
  return gulp.src([
    'src/*.es6'
  ])
  .pipe(babel({
    sourceMaps: 'inline',
    presets: ['es2015'],
    plugins: ['transform-es2015-modules-amd']
  }))
  .pipe(gulp.dest('src'));
});

gulp.task('watch', function(){
  gulp.watch([
    'src/*.es6'
  ], ['es6']);
});

gulp.task('default', ['es6']);