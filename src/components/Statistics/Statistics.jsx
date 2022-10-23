import { PropTypes } from 'prop-types';
import css from '../Statistics/Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
    return (
    <ul className={css.statisticsList}>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercent}%</li>
    </ul>
    )
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercent: PropTypes.number.isRequired,
};