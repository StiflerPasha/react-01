let ava_png = "https://png2.kisspng.com/sh/17024a4fdbf0db9c1cc0a38f5d5b3d46/L0KzQYm3VsI3N6Z8i5H0aYP2gLBuTfF3aaVmip9Ac3X1PbT2jgB2fJZ3Rdtsb372PcT2hwR4aaNqRdZudnXvf8Hskr02amQ3T9VsOXPmQYbtV745P2M8SqkDMEG4Q4G3U8U1OGI9S6g3cH7q/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.png";

let initialState = [
    {id: 1, name: "Pasha", ava: ava_png, best: true},
    {id: 2, name: "Andrey", ava: ava_png, best: false},
    {id: 3, name: "John", ava: ava_png, best: false},
    {id: 4, name: "Sasha", ava: ava_png, best: false},
    {id: 5, name: "Smith", ava: ava_png, best: false},
    {id: 6, name: "Valera", ava: ava_png, best: false},
    {id: 7, name: "Yana", ava: ava_png, best: true},
];

const friendsReducer = (state = initialState, action) => {

    return state
};

export default friendsReducer