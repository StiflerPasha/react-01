import ava_png from "../ava.jpg";

let initialState = [
		{id: 1, name: "Pasha", ava: ava_png, best: true},
		{id: 2, name: "Andrey", ava: ava_png, best: false},
		{id: 3, name: "John", ava: ava_png, best: false},
		{id: 4, name: "Sasha", ava: ava_png, best: false},
		{id: 5, name: "Smith", ava: ava_png, best: true},
		{id: 6, name: "Valera", ava: ava_png, best: false},
		{id: 7, name: "Yana", ava: ava_png, best: true},
];

const friendsReducer = (state = initialState, action) => {

		return state
};

export default friendsReducer