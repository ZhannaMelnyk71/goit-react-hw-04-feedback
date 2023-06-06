import PropTypes from 'prop-types'
import css from './Options.module.css'

export const Options = ({ options, onLeaveFeedback }) => (

    <div className= {css.options}>
        {options.map((option) => (
            <button
                className={css.options}
                key={option}
                type="button"
                onClick={() => { onLeaveFeedback(option) }}
                name={option}>{option}
            </button>))}
    </div>
)

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};