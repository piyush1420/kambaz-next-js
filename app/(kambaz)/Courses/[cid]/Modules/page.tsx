export default function Modules() {
    return (
      <div>
        {/* buttons to implement DIY*/}
        <button type="button" id="wd-collapse-All">Collapse All</button>

        <button type="button" id="wd-View-Progress">View Progress</button>

        <select id="wd-publish-all">
          <option  value="PUBLISH">Publish All</option>
          <option  value="PUBALL">Publish All modules and items</option>
          <option value="PUBMOD">Publish modules only</option>
          <option  value="UNPUBALL">Unpublish All modules and items</option>
          <option value="UNPUBMOD">Unpublish modules only</option>
        </select>

        <button type="button" id="wd-Module">+Module</button>

        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="wd-module">
            <div className="wd-title">Week 2</div>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 3</div>
          </li>
        </ul>
      </div>
    );
  }