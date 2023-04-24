import PropTypes from "prop-types";

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
      <section className="statistics">
          {title && (
                <h2 className="title">Upload stats</h2>
        )}
          <ul className="stat-list">{data.map(({ id, label, percentage }) => <li key={id} className = "stat-item">
          <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
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
