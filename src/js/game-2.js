import createElement from "./createElement.js";
import showScreen from "./showScreen";
import showgGameThreeScreen from "./game-3.js";
import {returnGreeting} from "./main.js";

const gameTwoScreen = createElement(`<div><header class="header">
	<button class="back">
		<span class="visually-hidden">Вернуться к началу</span>
		<img src="img/sprite/arrow-left.svg">
		<img src="img/sprite/logo-small.svg">
	</button>
	<div class="game__timer">NN</div>
	<div class="game__lives">
		<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">
		<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
		<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">
	</div>
	</header>
	<section class="game">
	<p class="game__task">Угадай, фото или рисунок?</p>
	<form class="game__content  game__content--wide">
		<div class="game__option">
			<img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
			<label class="game__answer  game__answer--photo">
				<input class="visually-hidden" name="question1" type="radio" value="photo">
				<span>Фото</span>
			</label>
			<label class="game__answer  game__answer--paint">
				<input class="visually-hidden" name="question1" type="radio" value="paint">
				<span>Рисунок</span>
			</label>
		</div>
	</form>
	<ul class="stats">
		<li class="stats__result stats__result--wrong"></li>
		<li class="stats__result stats__result--slow"></li>
		<li class="stats__result stats__result--fast"></li>
		<li class="stats__result stats__result--correct"></li>
		<li class="stats__result stats__result--wrong"></li>
		<li class="stats__result stats__result--unknown"></li>
		<li class="stats__result stats__result--slow"></li>
		<li class="stats__result stats__result--unknown"></li>
		<li class="stats__result stats__result--fast"></li>
		<li class="stats__result stats__result--unknown"></li>
	</ul>
	</section></div>`);

function showgGameTwoScreen() {
	showScreen(gameTwoScreen);

	gameTwoScreen.classList.remove(`hidden`);

	returnGreeting();

	const gameTwoRadioButtons = gameTwoScreen.querySelectorAll(`input`);

	gameTwoRadioButtons.forEach((gameTwoRadioButton) => {
		gameTwoRadioButton.addEventListener(`change`, function () {
			showgGameThreeScreen();

			gameTwoScreen.classList.add(`hidden`);
		});
	});
}

export default showgGameTwoScreen;
