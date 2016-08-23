(function() {
	var advertisement = {
		//默认参数
		default_parameter: function() {
			return {
				final_box: null,
				second_box: null,
				third_box: null,
				time: null,
				time_final: null,
				kind: 1,
				max_message: 0,
				//默认参数
				parameter: {
					width: "100%",
					proportion: "auto",
					style: "",
					random: "close",
					url: "/v20/user/tip.html",
					position: "H5-B1",
					loop: false,
					num: "max",
					how: "after",
					where: "body",
					close: "close",
					userid: "0",
					time_adv: "6000",
					onload_down: "close",
					lastnum: -1,
					childclass: "",
					voice_url: "/images/blue_voice.png",
					special: false,
					identifying:true,
					identifying_word:"广告"
				},
				//公共点击和统计
				get_tap: [],
				get_tj_load: [],
				get_tj_click: [],
				//图片内容路径
				get_img_url: [],
				//文字内容
				get_word_message: []
			}
		},
		//加入外层后回调
		outsideback: function(default_in) {
			advertisement.bulid_inside_box(default_in)
			advertisement.build_message(default_in)
			advertisement.loop(default_in, default_in.final_box.offsetWidth, default_in.max_message)
			advertisement.close_btn(default_in)
			advertisement.adv_identifying(default_in)
		},
		//获取数据后回调
		callback: function(default_in) {
			advertisement.css()
			advertisement.build_outside_box(default_in)
			advertisement.writein(default_in, advertisement.outsideback)
		},
		css: function() {
			if ($("#adv_css").length != 0) {
				return
			}
			var dd = document.createElement("link");
			dd.type = 'text/css';
			dd.id = "adv_css";
			dd.rel = "stylesheet";
			dd.href = 'http://hd.youyuan.com/html/public/css/flex-css-layout.min.css';
			document.querySelector('head').appendChild(dd);
		},
		add: function() {
			//获得传入参数并重写数据		
			var default_in = advertisement.default_parameter();
			$.extend(default_in.parameter, arguments[0]);
			advertisement.getmessage(default_in, advertisement.callback)
		},
		//获取内容数据
		getmessage: function(default_in, callback) {
			$.ajax({
				url: default_in.parameter.url,
				type: 'get',
				data: {
					position: default_in.parameter.position,
					userId: default_in.parameter.userid
				},
				dataType: "jsonp",
				jsonp: "Jsoncallback",
				success: function(data) {
					var item = data.advert;
					if (item == null) {
						return
					}
					$.each(item, function(index, element) {
						//图片
						if (element.type == 1 && !default_in.parameter.special) {
							default_in.kind = 1;
							default_in.get_img_url.push(element.picUrl)
							default_in.max_message = default_in.get_img_url.length;
							//文字
						} else if (element.type == 0 && !default_in.parameter.special) {
							default_in.kind = 0;
							default_in.get_word_message.push(element.content)
							default_in.max_message = default_in.get_word_message.length;
							//特殊
						} else if (default_in.parameter.special) {
							default_in.parameter.special = true;

						}
						default_in.get_tap.push(element.linkUrl)
						var putin = element;
						var tj_load = function(putin) {
							tj({
								'tjtype': 'adStatistics',
								'tjuid': default_in.parameter.userid,
								'tjtag': 'ggOnLoad',
								'eventid': element.activeid,
								"positionid": default_in.parameter.position,
								"provinceid": data.province,
								"userid": default_in.parameter.userid,
								"adtype": "OnLoad"
							});
						}
						var tj_Click = function(putin) {
							tj({
								'tjtype': 'adStatistics',
								'tjuid': default_in.parameter.userid,
								'tjtag': 'ggclick',
								'eventid': element.activeid,
								"positionid": default_in.parameter.position,
								"provinceid": data.province,
								"userid": default_in.parameter.userid,
								"adtype": "Click"
							});
						}
						default_in.get_tj_load.push(tj_load);
						default_in.get_tj_click.push(tj_Click);
					})
					default_in.get_tj_load = default_in.get_tj_load.concat(default_in.get_tj_load);
					callback(default_in)
				}
			})
		},
		//创建外层盒子
		build_outside_box: function(default_in) {
			var outside_box = document.createElement("div");
			outside_box.setAttribute("class", "advertisement_box");
			outside_box.setAttribute("style", default_in.parameter.style);
			outside_box.style.width = default_in.parameter.width;
			default_in.final_box = outside_box;
		},
		//创建内层盒子
		bulid_inside_box: function(default_in) {
			if (default_in.parameter.proportion == "auto") {
				default_in.final_box.style.height = "auto"
			} else {
				default_in.final_box.style.height = default_in.final_box.offsetWidth * default_in.parameter.proportion + "px";
			}
			var inside_box = document.createElement("div");
			inside_box.setAttribute("class", "advertisement_message");
			//内层盒子宽度
			inside_box.style.width = 2 * default_in.get_tap.length * default_in.final_box.offsetWidth + "px";
			default_in.second_box = inside_box;
			default_in.final_box.appendChild(default_in.second_box);
			//随机取得一个
			if (default_in.kind == 0) {
				//添加外层盒子样式
				default_in.final_box.className += " " + "advertisement_word_outside";
				default_in.final_box.style.height = 30 + "px";
				default_in.second_box.setAttribute("flex", "dir:left");
				//创建文字模块
				var wordImg = document.createElement("img");
				wordImg.src = default_in.parameter.voice_url;
				wordImg.setAttribute("class", "advertisement_wordImg");
				wordImg.setAttribute("flex-box", "0");
				var word_box = document.createElement("ul");
				word_box.setAttribute("flex-box", "1");
				word_box.setAttribute("flex", "dir:top");
				default_in.second_box.appendChild(wordImg);
				default_in.second_box.appendChild(word_box);
				default_in.third_box = word_box;
			}
		},
		//内容模块
		build_message: function(default_in) {
			if (default_in.kind == 0 && default_in.parameter.random == "open") {
				default_in.second_box.style.width = "";
				var i = Math.floor(Math.random() * default_in.get_tap.length);
				var word = document.createElement("li");
				word.setAttribute("flex-box", "0");
				word.innerText = default_in.get_word_message[i];
				default_in.third_box.appendChild(word);
				default_in.get_tj_load[i]();
				word.addEventListener('tap', function(e) {
					default_in.get_tj_click[i]();
					// 延迟处理，防止get请求没有发出
					setTimeout(function() {
						location.href = default_in.get_tap[i]
					}, 100)
				}, false)
			} else if (default_in.kind == 1 && default_in.parameter.random == "open") {
				var i = Math.floor(Math.random() * default_in.get_tap.length);
				var img = document.createElement("img");
				default_in.second_box.appendChild(img);
				img.src = default_in.get_img_url[i];
				img.style.width = default_in.final_box.offsetWidth + "px";
				if (default_in.parameter.proportion == "auto") {
					img.style.height = "auto";
				} else {
					img.style.height = default_in.final_box.offsetWidth * default_in.parameter.proportion + "px";
				}
				default_in.get_tj_load[i]();
				img.addEventListener('tap', function(e) {
					default_in.get_tj_click[i]();
					setTimeout(function() {
						location.href = default_in.get_tap[i]
					}, 100)
				}, false);
			} else if (default_in.kind == 0 && default_in.parameter.random != "open") {
				if(default_in.get_word_message.length == 1){
					default_in.get_tj_load[0]();
				}
				default_in.second_box.style.width = "";
				for (var a = 0; a < 2; a++) {
					for (var i = 0; i < default_in.get_tap.length; i++) {
						(function() {
							var t = i;
							var word = document.createElement("li");
							word.setAttribute("flex-box", "0");
							word.innerText = default_in.get_word_message[t];
							default_in.third_box.appendChild(word);
							word.addEventListener('tap', function(e) {
								default_in.get_tj_click[t]();
								// 延迟处理，防止get请求没有发出
								setTimeout(function() {
									location.href = default_in.get_tap[t]
								}, 100)
							}, false)
						})()
					}
				};
			} else if (default_in.kind == 1 && default_in.parameter.random != "open") {
				if(default_in.get_img_url.length == 1){
					default_in.get_tj_load[0]();
				}
				for (var a = 0; a < 2; a++) {
					for (var i = 0; i < default_in.get_tap.length; i++) {
						(function() {
							var t = i;
							var img = document.createElement("img");
							default_in.second_box.appendChild(img);
							img.src = default_in.get_img_url[t];
							img.style.width = default_in.final_box.offsetWidth + "px";
							if (default_in.parameter.proportion == "auto") {
								img.style.height = "auto";
							} else {
								img.style.height = default_in.final_box.offsetWidth * default_in.parameter.proportion + "px";
							}
							img.addEventListener('tap', function(e) {
								default_in.get_tj_click[t]();
								setTimeout(function() {
									location.href = default_in.get_tap[t]
								}, 100)
							}, false);
						})()
					}
				};
			}
		},
		//新广告模块
		build_newadv: function() {

		},
		//轮播方向
		loop: function(default_in, width, max) {
			if (default_in.get_img_url.length != 1 && default_in.parameter.loop && default_in.kind == 1 && default_in.parameter.random != "open") {
				var num = 1;
				default_in.get_tj_load[0]();
				setInterval(function() {
					default_in.get_tj_load[num]();
					default_in.second_box.style.webkitTransform = "translateX(" + num * (-width) + "px)";
					default_in.second_box.style.webkitTransition = "-webkit-transform 0.5s linear 0s";
					num += 1;
					if (num == max * 2) {
						num = max;
						setTimeout(function() {
							default_in.second_box.style.webkitTransform = "translateX(" + (num - 1) * (-width) + "px)";
							default_in.second_box.style.webkitTransition = "-webkit-transform 0s";
						}, 1000)
					}
				}, default_in.parameter.time_adv);
			} else if (default_in.get_word_message.length != 1 && default_in.parameter.loop && default_in.kind == 0 && default_in.parameter.random != "open") {
				var num = 1;
				default_in.get_tj_load[0]();
				setInterval(function() {
					default_in.get_tj_load[num]();
					default_in.third_box.style.webkitTransform = "translateY(" + num * (-30) + "px)";
					default_in.third_box.style.webkitTransition = "-webkit-transform 0.5s linear 0s";
					num += 1;
					if (num == max * 2) {
						num = max;
						setTimeout(function() {
							default_in.third_box.style.webkitTransform = "translateY(" + (num - 1) * (-30) + "px)";
							default_in.third_box.style.webkitTransition = "-webkit-transform 0s";
						}, 1000)
					}
				}, default_in.parameter.time_adv);
			}
		},
		//延迟选择顺序加载
		writein: function(default_in, callback) {
			switch (default_in.parameter.how) {
				case "after":
					advertisement.where_after(default_in);
					callback(default_in);
					break;
				case "in":
					if (default_in.parameter.onload_down == "close") {
						advertisement.where_in(default_in)
						callback(default_in);
					} else {
						default_in.time = setInterval(function() {
							if ($(default_in.parameter.where).children(default_in.parameter.childclass).length > 0 && $(default_in.parameter.where).children().eq(default_in.parameter.lastnum).attr("class") != "advertisement_box") {
								$(default_in.parameter.where).children(default_in.parameter.childclass).eq(default_in.parameter.lastnum).after(default_in.final_box);
								callback(default_in);
								clearInterval(default_in.time);
								clearTimeout(default_in.time_final);
							}
						}, 50);
						default_in.time_final = setTimeout(function() {
							callback(default_in);
							clearInterval(default_in.time);
						}, 1000)
					}
					break;
				case "before":
					advertisement.where_before(default_in);
					callback(default_in);
					break;
				case "prepend":
					advertisement.where_prepend(default_in);
					callback(default_in);
					break;
				default:
					advertisement.where_after(default_in);
					callback(default_in);
			}

		},
		//加入位置--在之后
		where_after: function(default_in) {
			$(default_in.parameter.where).after(default_in.final_box);
		},
		//加入位置--在之中(最后或者第几个位置)
		where_in: function(default_in) {
			$(default_in.parameter.where).append(default_in.final_box);
		},
		//加入位置--在之前
		where_before: function(default_in) {
			$(default_in.parameter.where).before(default_in.final_box);
		},
		//加入位置--在之中（第一个位置）
		where_prepend: function(default_in) {
			$(default_in.parameter.where).prepend(default_in.final_box);
		},
		close_btn: function(default_in) {
			if (default_in.parameter.close == "open") {
				var close_box = document.createElement("div");
				close_box.setAttribute("class", "advertisement_close");
				close_box.innerHTML = "关闭";
				default_in.final_box.appendChild(close_box);
				close_box.addEventListener('tap', function(e) {
					default_in.final_box.style.display = "none";
				}, false)
			}
		},
		adv_identifying:function(default_in){
			if(default_in.parameter.identifying){
				var identifying_box=document.createElement("div");
				identifying_box.setAttribute("class", "advertisement_identifying");
				identifying_box.innerHTML = default_in.parameter.identifying_word;
				default_in.final_box.appendChild(identifying_box);
			}
		}
	}
	window.advertisement = advertisement;
	return advertisement;
})();

	// *为必写
	// 所有参数：
	//  kind(广告种类)=word为文字，不填为图片；
	// 	width(宽度)=默认为100%,可以调整0~100%;
	// 	proportion(宽高比)=默认auto,可调整0~100;
	// 	style(拓展属性)=默认为空,可自定义添加css样式;
	// 	random(随机选择图片)=默认关闭,选项为close&open;
	// 	url(广告接口地址)=默认为/v20/user/tip.html,可自定义调整;		
	// 	loop(是否轮播)=默认为关闭，选项为true&false;
	// 	num(图片数量)=默认为全部,可自定义，一般与random配合使用;
	// 	close(关闭图标-可点击关闭)=默认为没有，选项有close&open;
	// 	time_adv(轮播时间)=默认为6秒,可自定义;
	// 	onload_down(判断广告是否最后加载)=默认为关闭，一般用于广告随数据写入页面时使用;
	// 	*position(广告版位)=自定义添加;
	// 	*how(加入方式)=选现有(1)after(2)in(3)prepend(4)before与jquery加入元素方式相同;
	// 	*where(加入地方)=css选择器选择位置;
	// 	*userid(用户id)=再加入广告前获取id,在写入进广告配置;
	// 	例子：var userid=$("#GUID").attr("value")||sessionStorage.getItem("id");
	//	图片广告	advertisement.add({num:"max",loop:"true",how:"in",where:"body",position:"H5-SXQ-2",style:"position:fixed;bottom:70px;z-index:2000;",close:"open",userid:userid});
	//	文字广告	advertisement.add({kind:"word",loop:"true",num:"max",where:"body",position:"H5-A1");