function CopyText() {
	var Url2 = document.getElementById("textfield");
	Url2.select(); // 选择对象		
	document.execCommand("Copy"); // 执行浏览器复制命令

	var bt_2 = document.getElementById("bt2");
	bt_2.innerHTML = '已复制';
	setTimeout(function () {
		bt_2.innerHTML = '复制文本';
	}, 800);
}

function NewText() {
	var num = Math.floor(Math.random() * (len));
	document.getElementById("textfield").value = myArrays[num];
}

function Init() {
	var num = new Date().getMilliseconds();
	document.getElementById("textfield").value = myArrays[num % myArrays.length];
}

var myArrays = new Array("赖小七一定会保持善良，保持努力，勇往直前，向阳而生！",
	"我是一个很没有安全感的人，我希望我的粉丝照顾好身体，再去为小偶像花钱，我一直没给到他们一些承诺，我很怕我自己说了做不到…",
	"我的生活里除了工作就是你们了",
	"红不红对我来说无所谓，但是一定要在一个舞台上唱歌跳舞，然后有喜欢你的人，和你一起并肩的伙伴，我觉得就够了，这件事情本身就是一件很让人开心的事情",
	"让自己健健康康身体好，能够吃好休息好，这样子的话我会毫无保留的接受你的爱",
	"请对未来的我充满好奇与期待，请让我与你们一起成为那颗发光的星球，让我们一起照亮彼此成为那个独一无二的微光",
	"最后一场战役了，不把它打到最精彩，那我觉得你这一整段时间都浪费了",
	"做所有喜欢的事，成为所有想成为的人",
	"认可自己的平凡，但是要相信自己是不渺小的",
	"以前呢，橙色是阳光的颜色。后来呢，橙色是温暖着我们的颜色。以后，橙色是我们的约定。 puleya！",
	"姓赖的人值得信赖",
	"人总是活在当下，但当你去回忆那些经历，你可能会开心、难过、舍不得、各种各样的情绪，最后都会变成美好。",
	"做所有喜欢的事，成为所有想成为的人",
	"希望每个人都能够放过自己",
	"不要忘记努力不要停下来",
	"我们觉得顺风的人，他可能也有他觉得逆风的事",
	"我不会把身高当作是比别人更渺小的理由，这是我特别的地方，你也一定有自己很特别的地方。当你认可你自己是特别的时候，你其实都是在发光的",
	"所以不要担心，哪怕你现在觉得自己非常的平凡，自己非常的普通，但是也千万不要迷茫，因为你一定是这个世界里最独一无二的存在，你一定不渺小",
	"或许对于整个世界，你很渺小；或许对于整个宇宙，你很渺小。请不要忘记，对于你自己，你是最不渺小的存在",
	"世界大你很渺小，但是内心大你就不渺小",
);

len = myArrays.length;