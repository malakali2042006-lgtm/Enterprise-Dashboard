
function StatisticsCard(props) {
  return (
    <div className="stat-card">
      <h3>{props.title}</h3>
      <h2>{props.value}</h2>
      <p>{props.change}</p>
    </div>
  );
}

export default StatisticsCard;
