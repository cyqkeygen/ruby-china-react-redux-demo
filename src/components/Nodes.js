import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/modules/Nodes.scss';

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
    return (
      <div className={styles.box}>
        <div className={styles.title}>讨论节点分类导航</div>
        {keys.map( key =>
          <div key={key}>
            <div className={styles['left-col']}>
              {store[key]['name']}
            </div>
            <div className={styles['right-col']}>
              {store[key]['items'].map( item => 
                <span key={item.id}
                      className={styles['node-item']}>
                  {item.name}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Nodes;
