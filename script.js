//var
	let body = document.querySelector('body');
	let nav = document.querySelector('nav');
	let tg = document.getElementById('tg');
	let container = document.querySelector('.container');
	let ul = document.getElementById('ul');
	let div1 = document.getElementById('div1');
	let div2 = document.getElementById('div2');
	let div3 = document.getElementById('div3');
	let div4 = document.getElementById('div4');
	let div5 =  document.getElementById('div5');
	let div6 =  document.getElementById('div6');
	const titles = ['Red', 'Green', 'White', 'Yellow', 'Blue', 'Black'];
	const intro = ": your personality characteris the following";
	const colors = ['red', 'green', 'white', '#cfcf23', 'blue', 'black'];
	const redC = ['Passionate about life',
				 'Search better envirnment',
				  'Love to travel new places'];
	const greenC = ["Nature mind",
					 "Carefully consider consequences prior to making any decision ",
					 "Prefer to fulfill the needs of others consequently neglecting your own needs"];
	const whiteC = ["Open book",
					 "Think before do task",
					  "Simplicity",
					  " Live in neat ",
					  " Clean envirnment"];
	const yellowC = ["Jolly nature ",
					" Pleasant mood",
					"Keep an upbeat attitude in tense situation",
					 "Creativity help to easily find solution for big problems"];
	const blueC = ["Honest loyal and trustworthy",
				 "Perform tasks responsibly",
				 "Have a friendly disposition"];
	const blackC = ["Sensitive people ",
					" Concious in life",
					"Avoid make new relationships",
					"Independents individuals"]
	let desc = [redC, greenC, whiteC, yellowC, blueC, blackC];

//fun
	divFn = (i) => {
		container.innerHTML = '';
		container.style.margin = "auto";
		document.title = titles[i];
		body.style.background = 'radial-gradient('+ colors[i] +', transparent)';
		let div = document.createElement('div');
		div.classList.add('content');
		div.style.background = colors[i];
		div.style.display = 'flex';
		div.style.flexDirection = 'column';
		div.setAttribute('width', '100%');
		let h2 = document.createElement('h2');
		h2.appendChild(document.createTextNode(titles[i]));
		h2.classList.add('h2Cont');
		div.appendChild(h2);
		let ul = document.createElement('ul');
		for (var j = 0; j < desc[i].length; j++) {
			let li = document.createElement('li');
			li.appendChild(document.createTextNode(desc[i][j]))
			ul.appendChild(li)
		}
		let p = document.createElement('p');
		p.appendChild(document.createTextNode(titles[i] + intro));
		p.appendChild(ul);
		if (i === 2) {
			p.style.color = 'black';
			body.style.background = 'radial-gradient( grey, transparent)';
		}
		div.appendChild(p)
		container.appendChild(div);
	}
	tgFn = () => { ul.classList.toggle("active") }
	divChangeE = (i) => { 
		document.title = titles[i];
		body.style.background = 'radial-gradient('+ colors[i] +', transparent)';
		nav.style.background = colors[i];
		if (i === 2) {
			body.style.background = 'radial-gradient( grey, transparent)';
			nav.style.background = '#6c5d5d';
		}
	 }
	divChangeL = () => { 
		document.title = 'Personality';
		body.style.background = 'white';
		nav.style.background = '#858585';
	}

//event
	tg.addEventListener('click', tgFn);
	div1.addEventListener('click', () => { divFn(0) });
	div2.addEventListener('click', () => { divFn(1) });
	div3.addEventListener('click', () => { divFn(2) });
	div4.addEventListener('click', () => { divFn(3) });
	div5.addEventListener('click', () => { divFn(4) });
	div6.addEventListener('click', () => { divFn(5) });

	div1.addEventListener('mouseenter', () => { divChangeE(0) });
	div2.addEventListener('mouseenter', () => { divChangeE(1) });
	div3.addEventListener('mouseenter', () => { divChangeE(2) });
	div4.addEventListener('mouseenter', () => { divChangeE(3) });
	div5.addEventListener('mouseenter', () => { divChangeE(4) });
	div6.addEventListener('mouseenter', () => { divChangeE(5) });

	div1.addEventListener('mouseleave', divChangeL );
	div2.addEventListener('mouseleave', divChangeL );
	div3.addEventListener('mouseleave', divChangeL );
	div4.addEventListener('mouseleave', divChangeL );
	div5.addEventListener('mouseleave', divChangeL );
	div6.addEventListener('mouseleave', divChangeL );