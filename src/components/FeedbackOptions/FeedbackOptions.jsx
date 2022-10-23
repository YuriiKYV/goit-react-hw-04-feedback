import { PropTypes } from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';

export function FeedbackOptions ({ options, onLeaveFeedback }) {
       return < div className = { css.buttonsList } >
           {options.map(option => (
            <button onClick={() => onLeaveFeedback(`${option}`)} key={option} className={css.buttons} name={option} type="button">{option}</button>
        ))}
        
    </div>;
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};