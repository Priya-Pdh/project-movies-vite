const Dropdown = ({ value, onChange }) => {
  return (
    <div>
      <select value={value} onChange={onChange}>
        <option value="popular">Popular</option>
        <option value="topRated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
        <option value="newReleases">New Releases</option>
      </select>
    </div>
  );
};

export default Dropdown;
