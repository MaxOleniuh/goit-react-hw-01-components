import PropTypes from "prop-types";
import s from './Statistics.module.css';

const Statistics = (props) => {
    const title = props.title;
  const data = [
    { id: 'id-1', label: '.docx', percentage: 22 },
    { id: 'id-2', label: '.pdf', percentage: 4 },
    { id: 'id-3', label: '.mp3', percentage: 17 },
    { id: 'id-4', label: '.psd', percentage: 47 },
    { id: 'id-5', label: '.pdf', percentage: 10 },
  ];
  return (
      <section className={s.statistics}>
          {title && (
                <h2 className={s.title}>Upload stats</h2>
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
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}
export default Statistics;
