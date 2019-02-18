import { createSelector } from 'reselect';

const pagesSelector = state => state.content.pages;

const getPages = createSelector(
    pagesSelector,
    pages => pages,
);

const getCurrentPageId = (state, props) => {
    const { location: { pathname } } = props;
    const pages = getPages(state, props);
    const currentPage = pages.find(page => page.pathname === pathname);
    if (currentPage) {
        return currentPage.id;
    }
    return null;
};

export { getPages, getCurrentPageId };
