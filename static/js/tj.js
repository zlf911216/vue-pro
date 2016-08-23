/**
 * H5QQ统计用JS，所有页面引用
 */
(function(){
    var params = {};
    //Document对象数据
    if(document) {
        params.domain = document.domain || ''; 
        params.url = document.URL || ''; 
        params.title = document.title || ''; 
        params.referrer = document.referrer || ''; 
    }   
    //Window对象数据
    if(window && window.screen) {
        params.sh = window.screen.height || 0;
        params.sw = window.screen.width || 0;
        params.cd = window.screen.colorDepth || 0;
    }   
    //navigator对象数据
    if(navigator) {
        params.lang = navigator.language || ''; 
    }
  
    //拼接参数串
    var args = ''; 
    for(var i in params) {
        if(args != '') {
            args += '&';
        }   
        args += i + '=' + encodeURIComponent(params[i]);
    }
    if(!window.tj){
        window.tj = function(pp,realTimeFlg){
            var userArgs = '';

            // tjtype，tjuid和tjtag参数分别记录统计类型，统计位置 , 后续可以有自定义参数
            // 三参数为必填参数
            if(!pp || !pp['tjtype'] || pp['tjuid']===undefined || !pp['tjtag']){
                console && console.error("统计参数不全！");
                pp = pp || {};
                pp['tjtype'] = pp['tjtype'] || 'undefined';
                pp['tjuid'] = pp['tjuid'] || 'undefined';
                pp['tjtag'] = pp['tjtag'] || 'undefined';
            }

            for(var i in pp){
                userArgs += '&'+ i + '=' + encodeURIComponent(pp[i]);
            }
            if(realTimeFlg){
                userSrc = 'http://stj.youyuan.com/tj/tj.gif?' + userArgs.substr(1) + '&' + args;
            }else{
                userSrc = 'http://x.youyuan.com/tj/tj.gif?' + userArgs.substr(1) + '&' + args;
            }
            if(navigator && navigator.sendBeacon && realTimeFlg){
                navigator.sendBeacon(userSrc);
            }else{
                //通过Image对象请求后端脚本
                var img = new Image(1, 1);
                img.src = userSrc;
            }
        };
    }
})()
window.tj({'tjtype':'window-onload','tjuid':'tj','tjtag':'pageload'});
