// 1. 定义变量和函数
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
// 随机选择数组中的任一内容
function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}


// 2. 纯文本字符串
let Text = '今天气温 34 摄氏度，:inserta:出去遛弯。当走到:insertb:门前时，突然就:insertc:。人们都惊呆了，李雷全程目睹但并没有慌，因为:inserta:是一个 130 公斤的胖子，天气又辣么热。'
let a = ['怪兽威利','大老爹','圣诞老人']
let b = ['肯德基','迪士尼乐园','白宫']
let c = ['自燃了','在人行道化成了一坨泥','变成一条鼻涕虫爬走了']


// 3. 事件监听器和未完成的函数定义
randomize.addEventListener('click', result);

function result() {
	
	let newStory = Text
	let aItem = randomValueFromArray(a)
	let bItem = randomValueFromArray(b)
	let cItem = randomValueFromArray(c)
	
	newStory = newStory.replace(':inserta',aItem)
	newStory = newStory.replace(':inserta',aItem)
	newStory = newStory.replace(':insertb',bItem)
	newStory = newStory.replace(':insertc',cItem)

  	if(customName.value !== '') {
   		let name = customName.value;
    	newStory = newStory.replace('李雷', name)
  	}

	// 点击更换成美制
  	if(document.getElementById("american").checked) {
    	let weight = Math.round(130 * 2.20462) + ' 磅';
    	let temperature =  Math.round(34 * 9 / 5 + 32) + ' 华氏度';
    	newStory = newStory.replace('34 摄氏度', temperature)
    	newStory = newStory.replace('130 公斤', weight)
	}

  story.textContent = newStory;
  story.style.visibility = 'visible';
}










