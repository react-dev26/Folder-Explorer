import React from 'react';
import EditableName from './EditableName';
import file from '../images/file.png';
import styles from './folderTreeCSS.css'

const FileComponent = ({ level, filename, setMyName, selectMe, selected }) => (
  <div className={styles.file} style={{marginLeft: getInden(level), marginTop: 10,}}>
    <span className={selected ? [styles.fileText, styles.selected].join(' ') : styles.fileText} onClick={selectMe}>
      <img src={file} style={{marginLeft: '10px'}} />
      <EditableName filename={filename} setMyName={setMyName} selected={selected} />
    </span>

  </div>
);

FileComponent.propTypes = {
  path: React.PropTypes.array.isRequired,
  level: React.PropTypes.number.isRequired,
  checked: React.PropTypes.number.isRequired,
  filename: React.PropTypes.string.isRequired,
  selected: React.PropTypes.number.isRequired,

  selectMe: React.PropTypes.func.isRequired,
  setMyName: React.PropTypes.func.isRequired,
  handleCheck: React.PropTypes.func.isRequired,
};

function getInden(level) {
  return `${5 * level}px`;
}

export default FileComponent;
