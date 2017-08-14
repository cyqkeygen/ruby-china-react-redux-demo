import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../styles/modules/Nodes.scss';

const cataIds = [1, 6, 8, 2, 5, 4, 3, 7];

function sort(nodes) {
  return nodes.reduce((obj, item) => {
    const { section_id, section_name } = item;
    if (!obj[section_id]) obj[section_id] = {};
    obj[section_id]['name'] = item.section_name;
    if (!obj[section_id]['items']) obj[section_id]['items'] = [];
    obj[section_id]['items'].push(item);
    return obj;
  }, {});
}

class Nodes extends React.Component {

  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    items: PropTypes.array.isRequired,
    receivedAt: PropTypes.number,
    fetch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render(){
    const { items } = this.props;
    const store = sort(items);
    const keys = Object.keys(store);
    const sortKeys = [];
    if (keys.length > 0) {
      cataIds.forEach((id) => {
        if (keys.indexOf(id.toString()) >= 0) sortKeys.push(id);
      })
    }
    return (
      <div className={styles.box}>
        <div className={styles['panel-head']}>讨论节点分类导航</div>
        <div className={styles['panel-body']}>
          {sortKeys.map( key =>
            <div className={styles['node-catagory']} key={key}>
              <div className={styles['left-col']}>
                {store[key]['name']}
              </div>
              <div className={styles['right-col']}>
                {store[key]['items'].map( item => 
                  <Link to={`/topics/node${item.id}`}
                        key={item.id}
                        className={styles['node-item']}>
                    {item.name}
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
        
      </div>
    )
  }
}

export default Nodes;
