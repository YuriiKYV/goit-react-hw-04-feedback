import { PropTypes } from 'prop-types';
import css from '../Notification/Notification.module.css';

const Notification = ({ message }) => {
    return (
            <h2 className={css.message}>{message}</h2>
    )
}

export default Notification

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};