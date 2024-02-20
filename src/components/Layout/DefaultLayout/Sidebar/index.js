import classNames from 'classnames/bind';
import styles from '~/Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    // return <h2>Sidebar</h2>;
    return (
        <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
        </aside>
    );
}
export default Sidebar;
