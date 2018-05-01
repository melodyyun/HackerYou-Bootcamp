const app = {
	drinks : {
		coffee: [
			{
				title: 'Early Bird',
				price: '$$'
			},
			{
				title: 'Dark Horse',
				price: '$'
			},
			{
				title: 'Le Gourmand',
				price: '$'
			}
		],
		tea: [
			{
				title: 'David\'s Tea',
				price: '$'
			},
			{
				title: 'Tealish',
				price: '$$'
			},
			{
				title: 'Teavana',
				price: '$'
			}
		]
	}
};

app.selection = [];

app.randomize = () => {
	const length = app.selection.length;
	return Math.floor(Math.random()*length);
};

app.getChoices = () => {
	const inputDrink = $('input[name=beverage]:checked').val();
	const inputPrice = $('input[name=price]:checked').val();
	const beverageChoice =app.drinks[inputDrink]

	for(let i = 0; i<beverageChoice.length; i++){
		if(beverageChoice[i]['price'] === inputPrice){
			let finalChoices = beverageChoice[i]['title']
			app.selection.push(finalChoices);
		}
	}
	app.printResults();
};

app.printResults = () => {
	const randomNum = app.randomize();
	console.log(randomNum);
	const results = $('.results');
	results.empty();
	const final = app.selection[randomNum];
	console.log(final);
	results.append(`You should check out ${final}`);
}

app.submit = () => {
	$('form').on('submit', function(e){
		e.preventDefault();
		app.getChoices();
	});
};


$(function() {
	app.submit();
});

