'use strict';

let gulp 					= require('gulp'),
		plumber  			= require('gulp-plumber'),
		logger 				= require('gulp-logger'),
		concat 				= require('gulp-concat'),
		debug 				= require('gulp-strip-debug'),
		uglify 				= require('gulp-uglify'),
		jshint 				= require('gulp-jshint'),
		jshintStylish = require('jshint-stylish');


var onError = function (error) {
  console.log(error.message);
  this.emit('end');
}


/**
 *	Detects errors and potential problems in JavaScript code (synchronous task)
 *	[https://www.npmjs.com/package/gulp-jshint]
 */

gulp.task('jshint', () =>

	gulp.src('src/js/*.js')
		.pipe(plumber({ errorHandler: onError }))
		.pipe(logger({
			before: 'starting hint task...',
			after: 'hint task complete!',
			showChange: true
		}))
		.pipe(jshint())
		.pipe(jshint.reporter(jshintStylish))
);


/**
 *	Concatenates, removes debugs (cosole.log(), alert(), ...) and minifies JavaScript (asynchronous task)
 *	gulp-concat 		 => [https://www.npmjs.com/package/gulp-concat]
 *	gulp-strip-debug => [https://www.npmjs.com/package/gulp-strip-debug]
 * 	gulp-uglify 		 => [https://www.npmjs.com/package/gulp-uglify]
 */

gulp.task('scripts', ['jshint'], () => {

  gulp.src([
    'src/js/scrollspy.js'
  ])
  	.pipe(plumber({ errorHandler: onError }))
		.pipe(logger({
			before: 'starting scripts task...',
			after: 'scripts task complete!',
			extname: '.js',
			showChange: true
		}))
	  .pipe(concat('scrollspy.min.js'))
	  .pipe(debug())
	  .pipe(uglify())
	  .pipe(gulp.dest('dist/js/'));
});


/**
 *	Checks changes to .js, .scss, and .html files
 *	and run related tasks (asynchronous task)
 */

gulp.task('watch', () => {

	gulp.watch('src/js/**/*.js', ['scripts']);
});


/**
 *	Runs default task
 */

gulp.task('default', ['scripts']);