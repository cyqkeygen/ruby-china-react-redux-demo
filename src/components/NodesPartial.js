import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { sortedCatagIds, sort } from '../lib/nodes';
import homeStyles from '../styles/modules/HomePageNodes.scss';
import topicsStyles from '../styles/modules/TopicsPageNodes.scss';

class NodesPartial extends React.Component {

  static propTypes = {
    partialHeadContent: PropTypes.string.isRequired,
    page: PropTypes.string.isRequired,
    nodes: PropTypes.array.isRequired
  }

  render(){
    const { partialHeadContent, page, nodes } = this.props;
    const styles = page === 'home' ? homeStyles : topicsStyles;
    const store = sort(nodes);
    const keys = Object.keys(store);
    const sortKeys = [];
    if (keys.length > 0) {
      sortedCatagIds.forEach((id) => {
        if (keys.indexOf(id.toString()) >= 0) sortKeys.push(id);
      })
    }
    return (
      <div className={styles.box}>
        <div className={styles['panel-head']}>{partialHeadContent}</div>
        <div className={styles['panel-body']}>
          {sortKeys.map( key =>
            <div className={styles['node-catagories']} key={key}>
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

export default NodesPartial;
