/* jshint asi:true */
//先等图片都加载完成
//再执行布局函数

/**
 * 执行主函数
 * @param  {[type]} function( [description]
 * @return {[type]}           [description]
 */
(function() {

/**
 * 内容JSON
 */
var demoContent = [
  {
    link : 'https://suftz.com/',
    title : 'agile',
    description :
        'agile\'s website'
  },
  {
    link : 'https://q2u.org/',
    title : 'Q2U',
    description :
        'Q&A community'
  }//,
  // {
  //   link : 'https://sozcy.com/',
  //   title : 'agile',
  //   description :
  //       'agile\'s static website'
  // }
  //,
  // {
  //   link : 'https://www.sulvblog.cn',
  //   title : 'Sulv’s Blog',
  //   description :
  //       '一个记录技术、阅读、生活的博客'
  // },
  // {
  //   link : 'https://reorx.com/',
  //   title : 'Reorx’s Forge',
  //   description :
  //       'Full-stack web developer'
  // },
  // {
  //   link : 'https://taoshu.in/',
  //   title : '涛叔',
  //   description :
  //       'Linux/Unix、网络、编程、Web、Vim'
  // }
];

friendsInit(demoContent) //内容初始化
waitImgsLoad()           //等待图片加载，并执行布局初始化
}());

/**
 * 内容初始化
 * @return {[type]} [description]
 */
function friendsInit(friends) {
  var htmlStr = ''
  for (var i = 0; i < friends.length; i++) {
    htmlStr += '<div class="grid-item">' +
               '   <a class="a-img" href="">' +
               '       <img src="">' +
               '   </a>' +
               '   <h3 class="demo-title">' +
               '       <a target="_blank" href="' + friends[i].link + '">' +
               friends[i].title + '</a>' +
               '   </h3>' +
               '   <p>' + friends[i].description  +
               '   </p>' +
               '</div>'
  }
  var grid = document.querySelector('.grid')
  grid.insertAdjacentHTML('afterbegin', htmlStr)
}

/**
 * 等待图片加载
 * @return {[type]} [description]
 */
function waitImgsLoad() {
  var imgs = document.querySelectorAll('.grid img')
  var totalImgs = imgs.length
  var count = 0
  // console.log(imgs)
  for (var i = 0; i < totalImgs; i++) {
    if (imgs[i].complete) {
      // console.log('complete');
      count++
    } else {
      imgs[i].onload = function() {
        // alert('onload')
        count++
            // console.log('onload' + count)
            if (count == totalImgs) {
          // console.log('onload---bbbbbbbb')
          initGrid()
        }
      }
    }
  }
  if (count == totalImgs) {
    // console.log('---bbbbbbbb')
    initGrid()
  }
}

/**
 * 初始化栅格布局
 * @return {[type]} [description]
 */
function initGrid() {
  var msnry = new Masonry('.grid', {
    // options
    itemSelector : '.grid-item',
    columnWidth : 250,
    isFitWidth : true,
    gutter : 20
  })
}

