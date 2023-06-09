import PropTypes from "prop-types";
import s from './Statistics.module.css';

const Statistics = ({data, title}) => {
  return (
      <section className={s.statistics}>
          {title && (
                <h2 className={s.title}>{title}</h2>
        )}
          <ul className={s.statList}>{data.map(({ id, label, percentage }) => <li key={id} className = {s.statItem}>
          <span className={s.label}>{label}</span>
              <span className={s.percentage}>{percentage}%</span>
      </li>)}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }))
}
export default Statistics;
