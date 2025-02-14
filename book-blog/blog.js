const articles = [
	{
		id: 1,
		title: 'Fablehaven',
		date: 'June 14th, 2006',
		description:
			'For centuries mystical creatures of all description were gathered into a hidden refuge called Fablehaven to prevent their extinction. The sanctuary survives today as one of the last strongholds of true magic. Enchanting? Absolutely. Exciting? You bet. Safe? Well, actually, quite the opposite.\n Kendra and her brother, Seth, have no idea that their grandfather is the current caretaker of Fablehaven. Inside the gated woods, ancient laws keep relative order among greedy trolls, mischievous satyrs, plotting witches, spiteful imps, and jealous fairies. However, when the rules get broken -- Seth is a bit too curious and reckless for his own good -- powerful forces of evil are unleashed, and Kendra and her brother face the greatest challenge of their lives. To save their family, Fablehaven, and perhaps even the world, Kendra and Seth must find the courage to do what they fear most',
            
		imgSrc: 'images/Fable.jpeg',
		imgAlt: 'Book cover for Fablehaven book 1',
		ages: '8-12',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'Magnus Chase has always been a troubled kid. Since his mother’s mysterious death, he’s lived alone on the streets of Boston, surviving by his wits, keeping one step ahead of the police and the truant officers.One day, he’s tracked down by an uncle he barely knows—a man his mother claimed was dangerous. Uncle Randolph tells him an impossible secret: Magnus is the son of a Norse god.The Viking myths are true. The gods of Asgard are preparing for war. Trolls, giants and worse monsters are stirring for doomsday. To prevent Ragnarok, Magnus must search the Nine Worlds for a weapon that has been lost for thousands of years. When an attack by fire giants forces him to choose between his own safety and the lives of hundreds of innocents, Magnus makes a fatal decision. Sometimes, the only way to start a new life is to die...',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: 'The LIghtning Thief',
		date: 'April 1st, 2006',
		description:
			"Percy Jackson is about to be kicked out of boarding school again—he can't seem to stay out of trouble. Is he supposed to stand by while a bully picks on his scrawny best friend? Or not defend himself when his teacher turns into a monster and tries to kill him Mythical creatures seem to be walking straight out of the pages of Percy's Greek mythology textbook and into his life. What’s worse, he's angered a few of them: Zeus's master lightning bolt has been stolen, and Percy is the prime suspect. Percy and his friends Grover the satyr, and Annabeth, the demigod daughter of Athena, must find and return Zeus's stolen property and bring peace to a warring Mount Olympus. They travel cross country to the gates of the Underworld in Los Angeles, facing a host of enemies determined to stop them." ,
		imgSrc:
			'images/book.jpg',
		imgAlt: 'The Lightning Thief- Percy Jackson and the Olympians book 1',
		ages: '9-12',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
]

console.log(articles[1].title);

const container=document.querySelector('#blog-articles');
articles.forEach(function(item){
	let book = document.createElement('article');

	book.setAttribute('class', 'book');


	let html =
	`
	<div class="card1">
	<emp><p>${ClipboardItem.date}</p></emp>
	<p>${item.ages}</p>
	<p>${item.genre}</p>
	<p>${item.stars}</p>
	<h2>${item.title}</h2>
	<img src="${item.imgSrc}" alt="F${item.imgAlt}">
	<p>${item.description}</p>
	</div>
	`
	book.innerHTML = html;
	container.appendChild(book);

})

