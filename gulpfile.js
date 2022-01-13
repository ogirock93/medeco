var gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

gulp.task('sass', function(){
  return gulp.src('css/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('css/'))
})

gulp.task('watch', function(){
  gulp.watch('css/**/*.scss', gulp.parallel('sass'))
})
