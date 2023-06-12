import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavItem({title, route, icon}) {
  return (
    <li className="nav-item" style={{height: "50px"}}>
        <Link to={route}>
          <div className="nav-link">
            <FontAwesomeIcon icon={icon} style={{width: "50px"}}/>
            <p>{title}</p>
          </div>
        </Link>
    </li>
  );
}

NavItem.propTypes = {
  title : PropTypes.string,
  route : PropTypes.string
}

export default NavItem;
