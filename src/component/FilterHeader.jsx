import * as FiIcon from "react-icons/fi";
import { useState } from "react";

function FilterHeader({ sidebar }) {
  const [filter, setFilter] = useState(false);

  const showfilter = () => setFilter(!filter);
  return (
    <div>
      <header className={sidebar ? "page-head active" : "page-head"}>
        <h4 className={sidebar ? "filter active" : "filter"}>Filter Block</h4>

        <FiIcon.FiSettings className="setting-icon" onClick={showfilter} />
      </header>
      <div>
        {filter && (
          <div className="input-container">
            <div className="input-set1">
              <input
                type="text"
                placeholder="Date from"
                onfocus="(this.type='date')"
                id="date"
              />
              <input
                type="text"
                placeholder="Date to"
                onfocus="(this.type='date')"
                id="date"
              />
              <input
                type="text"
                placeholder="Date from"
                onfocus="(this.type='date')"
                id="date"
              />
              <input
                type="text"
                placeholder="Date to"
                onfocus="(this.type='date')"
                id="date"
              />
            </div>
            <div className="input-set2">
              <input type="text" placeholder="Name of client" />
              <input type="number" placeholder="Telephone" />
              <input type="text" placeholder="Name of client" />
              <input type="number" placeholder="Telephone" />
            </div>
          </div>
        )}
      </div>
      ;
    </div>
  );
}

export default FilterHeader;
