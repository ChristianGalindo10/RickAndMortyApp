import React from 'react';
import usePageTitle from 'Hooks/usePageTitle';

import styles from "./NotFound.module.scss";

function NotFound() {
  usePageTitle('404 - Page Not Found');
  return <div className={`${styles.divBack}`}></div>;
}

export default NotFound;