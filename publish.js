
var subdomains = [
    'thu', 'pku', 'fdu', 'sjtu', 'zju', 'nju',
    'xmu', 'sysu', 'whu', 'jlu', 'scu', 'ruc',
    'bnu', 'nku', 'tju', 'sdu', 'hust', 'xjtu', 'hit'
];

function getRandomSubdomain() {
    var index = Math.floor(Math.random() * subdomains.length);
    return subdomains[index];
}

function getRandomString() {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz';
    for (var i = 0; i < 3; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

var emails = ['hlcgwcom@gmail.com'];

var otherUrls = [
    'https://dizhi96.github.io'
];

var foreverUrls = [
    'https://hlcgw.com',
    'https://hlcgw.net',
    'https://hlcgw.co'
];

var newestUrls = [
    'https://hlfl3.com/',
    'https://hlfl4.com/',
    'https://hlfl5.com/',
    'https://hlfl6.com/',
    'https://adviser.dfrscbq.xyz/',
    'https://beside.dfrscbq.xyz/',
    'https://xdd.dfrscbq.xyz'
];

var notices = [
    '*我们推荐PC和Andriod手机用户使用Chrome(谷歌)浏览器访问，iPhone用户我们建议您使用手机自带Safria浏览器访问。',
    '*大陆地区用户建议您可以使用VPN或者代理的方式来访问我们的永久地址。',
    '*大陆地区用户我们强烈建议您截图收藏当前页面。'
];

// 获取随机整数
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        default:
            return 0;
    }
}

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr || '';
    var text = option.text;

    var fieldElem = document.createElement('div');
    fieldElem.setAttribute('class', ['field', classStr].join(' '));

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = '';
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr += '<li>' + items[i] + '</li>';
        } else {
            htmlStr += '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }

    if (text) {
        htmlStr += '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');

    // logo 区域
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '<img src="logo.png" width="180"/>';
    mainElem.appendChild(logoElem);

    // 收藏提示
    var favoriteElem = createFieldElem({
        title: '<font color=red><b>Ctrl+D</b></font> 收藏此页，永不迷路',
        items: []
    });
    mainElem.appendChild(favoriteElem);

    // 最新地址
    var newestFieldElem = createFieldElem({
        title: '最新地址',
        items: newestUrls,
        text: '请使用 https:// 协议访问黑料吃瓜网'
    });
    mainElem.appendChild(newestFieldElem);

    // 其他发布页
    var otherFieldElem = createFieldElem({
        title: '由于风控原因，网址经常被墙<br />一定保存下面所有地址发布页',
        items: otherUrls
    });
    mainElem.appendChild(otherFieldElem);

    // 邮箱获取
    var emailFieldElem = createFieldElem({
        title: '发送邮件获得最新地址',
        items: emails,
        plainText: true
    });
    mainElem.appendChild(emailFieldElem);

    // 永久地址
    var foreverFieldElem = createFieldElem({
        title: '永久地址',
        items: foreverUrls
    });
    mainElem.appendChild(foreverFieldElem);

    // 注意事项
    var noticeFieldElem = createFieldElem({
        title: '注意事项',
        items: notices,
        plainText: true,
        classStr: 'desc'
    });
    mainElem.appendChild(noticeFieldElem);
};
