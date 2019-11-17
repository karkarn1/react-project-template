import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getCurrentPageId, getPages } from '../selectors/content/pages';


class Header extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        const { pages, currentPageId } = this.props;
        return (
            <div className='Header'>
                {pages.map((item) => {
                    const { label, pathname, id } = item;
                    let classNames = 'link';
                    if (currentPageId === id) {
                        classNames += ' active';
                    }
                    return (
                        <Link
                            className={classNames}
                            key={id}
                            to={{ pathname }}
                        >{label}
                        </Link>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    pages: getPages(state),
    currentPageId: getCurrentPageId(state, props),
});
export default withRouter(connect(mapStateToProps)(Header));
