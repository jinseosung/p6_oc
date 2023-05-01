import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from "../../utils/style/Collapse.module.css";

const Collaps = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollaps = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer} onClick={toggleCollaps}>
        <p className={styles.Title}>{title}</p>
        {isOpen ? (
          <FontAwesomeIcon className={styles.Arrow} icon={faChevronDown} />
        ) : (
          <FontAwesomeIcon className={styles.Arrow} icon={faChevronUp} />
        )}
      </div>
      {isOpen && (
        <div className={styles.DescriptionContainer}>
          {title === "Équipements" && typeof description === "object" ? (
            <ul className={styles.List}>
              {description.map((li, index) => (
                <li className={styles.ListItem} key={`${li}-${index}`}>
                  {li}
                </li>
              ))}
            </ul>
          ) : (
            <p className={styles.Description}>{description}</p>
          )}
        </div>
      )}
    </div>
  );
};

// Collaps.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   equipement: PropTypes.string,
// }

// Collaps.defaultProps = {
//   title: '',
//   description: '',
//   equipement: '',
// }

export default Collaps;
