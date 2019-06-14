let initialState = {
    menu: [
        {id: 1, menuItem: "/profile/1154", name: "Profile"},
        {id: 2, menuItem: "/friends", name: "Friends"},
        {id: 3, menuItem: "/dialogs", name: "Messages"},
        {id: 4, menuItem: "/news", name: "News"},
        {id: 5, menuItem: "/music", name: "Music"},
        {id: 6, menuItem: "/settings", name: "Settings"},
        {id: 7, menuItem: "/users", name: "Users"},
    ],
};

const sideBarReducer = (state = initialState) => {
    return state
};

export default sideBarReducer;