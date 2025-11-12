import "./host.css";

export default function Host({ hostData }) {
  return (
    <div>
      <div className="host">
        <p>{hostData.name}</p>
        <img src={hostData.picture} alt={hostData.name} />
      </div>
    </div>
  );
}
