注意:singlePage.js必须放在所有js之前body之底!保证它能够优先被执行

通过"?singlePage/box.html"的方式引入【全局资源】,比如box.html中是一个全局播放器,那么该播放器不会因为页面切换而受到任何影响

singlePage/box.html 路径是从根目录开始 /singlePage/box.html