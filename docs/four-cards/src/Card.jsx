export default function Card({ title, description, icon, borderColor, className }) {
    return (
      <div className={`card ${className}`} style={{ borderTop: `6px solid ${borderColor}` }}>
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p className="card-content-p">{description}</p>
        </div>
        <div className="card-icon">
          {icon}
        </div>
      </div>
    );
  }