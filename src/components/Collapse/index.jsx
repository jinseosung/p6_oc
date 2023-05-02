import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import styles from "../../utils/style/Collapse.module.css";

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => {
    !isOpen ? setIsOpen(true) : setIsOpen(false);
  };

  return (
    <div className={styles.Container}>
      <div className={styles.TitleContainer} onClick={toggleCollapse}>
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

export default Collapse;
