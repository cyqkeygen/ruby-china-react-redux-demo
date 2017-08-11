import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/modules/Cities.scss';

const cities = ['北京', '上海', '深圳', '杭州', '成都', '广州', '武汉', '西安', '南京', '大连', '苏州', '长沙'];

class Cities extends React.Component {
  render(){
    return (
      <div className={styles.box}>
        <div className={styles.panel}>热门城市</div>
        <div className={styles.list}>
          {cities.map( (city, i) => 
            <Link to={`/users/city/${city}`}
                  className={styles.link}
                  key={i}>
              {city}
            </Link>
          )}
        </div>
      </div>
    )
  }
}

export default Cities;
