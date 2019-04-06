let initialState = {
    menu: [
        {id: 1, menuItem: "/profile", name: "Profile"},
        {id: 2, menuItem: "/dialogs", name: "Messages"},
        {id: 3, menuItem: "/news", name: "News"},
        {id: 4, menuItem: "/music", name: "Music"},
        {id: 5, menuItem: "/settings", name: "Settings"},
        {id: 6, menuItem: "/test", name: "It's work"},
    ],
};

const sideBarReducer = (state = initialState, action) => {

    return state
};

export default sideBarReducer;