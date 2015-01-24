blankGulpProject
================

Заготовка для развертывания проекта на основе **gulp**.

###Содержание
1. Используемые модули:
    - **[gulp-concat](https://github.com/wearefractal/gulp-concat)**
    - **[gulp-csso](https://github.com/ben-eb/gulp-csso)**
    - **[gulp-imagemin](https://github.com/sindresorhus/gulp-imagemin)**
    - **[gulp-uglify](https://github.com/terinjokes/gulp-uglify)**
    - **[gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)**
    - **[grunt-spritesmith](https://github.com/twolfson/gulp.spritesmith)**
    - **[gulp-replace](https://github.com/lazd/gulp-replace)**
    - **[gulp-load-plugins](https://github.com/jackfranklin/gulp-load-plugins)**
    - **[gulp-cache](https://github.com/wearefractal/gulp-cached)**
    - **[gulp-jshint](https://github.com/spenceralger/gulp-jshint)**
    - **[del](https://github.com/sindresorhus/del)**
    - **[q](https://github.com/kriskowal/q)**
2. Подгружаемые через **bower** библиотеки
    - **jQuery**
    - **fancybox**
    - **font-awesome**
    - **bootstrap-css**
    - **normalize-css**
3. css
    - **normalize.css** - сброс стилей
    - **style.less** - содержит стандартные примеси

###Как использовать
Рассчитано на использование **Gulp>=3.8.10** и Node.js versions >= 0.8.0
Установить **Gulp**:

    npm install --global gulp
Запустить установку компонентов:

    npm install

###Таски
   - **js** - Конкатинация, сжатие и проверка на ошибки при помощи **jshint** js - файлов
   - **css** - Автопрефиксы, минификация css - файлов
   - **sp** - Создание спрайтов
   - **imagemin** - Оптимизация изображений
   - **html** - Копирует файлы с расширением html с заменой адресов на финальные версии файлов
   - **bower** - Подгрузка дополнительный компонентов при помощи **bower**. Настройка производится при помощи файла **bower.json** в параметре "overrides"
   - **default** - Запускает все таски по порядку для финальной сборки проекта
