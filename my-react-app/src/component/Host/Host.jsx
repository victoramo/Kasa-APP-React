import "./host.css";

function Host({ host }) {
  if (!host) return null;

  // Separation prénom / nom
  const [first, last] = host.name.split(" ");

  return (
    <div className="host">
      <div className="host_name">
        <span>{first}</span>
        <span>{last}</span>
      </div>

      <img
        className="host_image"
        src={host.picture}
        alt={host.name}
      />
    </div>
  );
}

export default Host;
