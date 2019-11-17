const pageContentInitialState = {
    pages: [
        {
            label: 'Home Page',
            pathname: '/',
            id: 0,
        },
        {
            label: 'About',
            pathname: '/about',
            id: 1,
        },
        {
            label: 'Blog',
            pathname: '/blog',
            id: 3,
        },
        {
            label: 'Contact',
            pathname: '/contact',
            id: 4,
        },
    ],
    initialized: true,
};
export default (state = pageContentInitialState, action) => {
    const { type } = action;
    switch (type) {
        default: {
            return state;
        }
    }
};
