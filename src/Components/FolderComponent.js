import React from 'react';
import EditableName from './EditableName';
import pImg from '../images/pImg.png';
import mImg from '../images/mImg.png';
import folder from '../images/folder.png';
import privateFolder from '../images/privateFolder.png';
import styles from './folderTreeCSS.css';

const FolderComponent = ({ level, filename, toggleFolder, open, setMyName, selectMe, selected }) => (
  <div className={styles.folder} style={{marginLeft: getInden(level), marginTop: 10,}}>

    <a onClick={toggleFolder}><img src={open? mImg  : pImg } /> </a>

    <span className={selected ? [styles.folderText, styles.selected].join(' ') : styles.folderText} onClick={selectMe}>
      <img src={getFolderShape(filename)} />
      <EditableName filename={filename} setMyName={setMyName} selected={selected} />
    </span>

  </div>
);
function getFolderShape(filename) {
  if (filename==='Private Folder') {
    return privateFolder
  }
  else {
    return folder
  }
}
FolderComponent.propTypes = {
  open: React.PropTypes.bool.isRequired,
  path: React.PropTypes.array.isRequired,
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  filename: React.PropTypes.string.isRequired,
  selected: React.PropTypes.number.isRequired,

  selectMe: React.PropTypes.func.isRequired,
  setMyName: React.PropTypes.func.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
  toggleFolder: React.PropTypes.func.isRequired,
}

function getInden(level) {
  return `${5 * level}px`;
}

export default FolderComponent;
