let initialState = {
    menu: [
        {id: 1, menuItem: "/profile", name: "Profile"},
        {id: 2, menuItem: "/friends", name: "Friends"},
        {id: 3, menuItem: "/dialogs", name: "Messages"},
        {id: 4, menuItem: "/news", name: "News"},
        {id: 5, menuItem: "/music", name: "Music"},
        {id: 6, menuItem: "/settings", name: "Settings"},
        {id: 7, menuItem: "/test", name: "It's work"},
    ],
};

const sideBarReducer = (state = initialState, action) => {

    return state
};

export default sideBarReducer;