const Dropdown = ({ value, onChange }) => {
  return (
    <div className="dropdown">
      <select id="standard-select" value={value} onChange={onChange}>
        <option value="" disabled>
          Filter by
        </option>
        <option value="popular">Popular</option>
        <option value="topRated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
        <option value="newReleases">New Releases</option>
      </select>
    </div>
  );
};

export default Dropdown;
