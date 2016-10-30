/*
	id : 插入的父元素
	cb : 必须要传（回调函数）
	active:当前页码的样式（类名）
	all ： 总页数
	num ： 当前页
	
*/

function createPage(json){
		var num = json.num;
		var all = json.all;
		var box = json.id;
		var cb = json.cb || function(){};
		var active = json.active;
		box.innerHTML = '';
		if(all <= 5){
			for(var i=1;i<=5;i++){
				var a = document.createElement('a');
				a.href = 'javascript:;';
				if(i == num){
					a.className = active;
				}
				a.innerHTML = i;
				box.appendChild(a);
			}
		}else{
			for(var i=1;i<=5;i++){
				var a = document.createElement('a');
				a.href = 'javascript:;';
				if(all-num < 2){
					if((all-5+i) == num){
						a.className = active;
					}
					a.innerHTML = (all-5+i);
				}else if(num<3){
					if(num == i){
						a.className = active;
					}
					a.innerHTML = i;
				}else{
					if(num == (num-3+i)){
						a.className = active;
					}
					a.innerHTML = (num-3+i);
				}
				
				box.appendChild(a);
			}
		}
		box.onclick = function(ev){
			if(ev.target.tagName == 'A'){
				var num1 = ev.target.innerHTML*1;
				createPage({
					id:json.id,
					num:num1,
					all:all,
					cb:cb,
					active:active
				});
				cb(num1,all);
			}
		}
	}
	