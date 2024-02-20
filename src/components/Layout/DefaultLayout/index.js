import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
// import styles from `~/DefaultLayout.module.scss`;
import SideBar from '~/Sidebar';
import styles from '~/Sidebar.module.scss';

const cx = classNames.bind(styles);

function DefalutLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefalutLayout;
