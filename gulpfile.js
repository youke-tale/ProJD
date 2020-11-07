const gulp = require("gulp"); //引入gulp
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const sourcemaps = require("gulp-sourcemaps"); //关联转译前后的CSS文件  可以在网页审查元素定位到scss页面对应的位置
const babel = require("gulp-babel");


//将所有的HTML文件拷贝到dist文件夹中
gulp.task("html", done => {
    gulp.src("html/*.html")
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload()); //服务器刷新
    done();
})
gulp.task("js", done => {
    gulp.src("js/*.js")
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
})
gulp.task("img", done => {
    gulp.src("img/*")
        .pipe(gulp.dest("dist/img"))
        .pipe(connect.reload());
    done();
})
gulp.task("font", done => {
    gulp.src("font/*")
        .pipe(gulp.dest("dist/font"))
        .pipe(connect.reload());
    done();
})

//创建名为sass的方法，使用sass()
gulp.task("sass", done => {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass()) //调用sass方法 将scss格式的文件转成css文件
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
})

//开启一个服务器  修改文件后 页面自动刷新
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
})

//监听
gulp.task("watch", done => {
    gulp.watch("html/*.html", gulp.series("html"));
    gulp.watch("sass/*.css", gulp.series("sass"));
    gulp.watch("js/*.js", gulp.series("js"));
    gulp.watch("font/*", gulp.series("font"));
    gulp.watch("img/*", gulp.series("img"));
    done();
})

gulp.task("build", gulp.parallel("html", "js", "img", "font", "sass")); //同步更改的文件和dist里的文件

gulp.task("default", gulp.series("build", "server", "watch"));