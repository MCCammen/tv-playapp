window.onload = function(){
	search()
}

function search(){
	var headerBox = document.getElementsByTagName('header')[0]
	var bannerBox = document.querySelector('.banner')
	// 获取banner图的高度
	var h = bannerBox.offsetHeight
	
	
	// 定义一个监听事件
	window.onscroll = function() {
		var top = document.documentElement.scrollTop
		if (top > h/3) {
			headerBox.style.background = "#FF0000"
		} else{
			headerBox.style.background = "transparent"
		}
	}
	
}