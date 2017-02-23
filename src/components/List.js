import React from 'react';
import Item from './Item';

class List extends React.Component {
  render() {
    let items = this.props.items.map( (item, i) => {
      return (
        <Item
          key={i}
          {...item}
          onTodoClick={this.props.onTodoClick}
        />
      )
    });

    return (
      <ul style={styles.list}>
        {items}
      </ul>
    )
  }
}

const styles = {
  list: { listStyle: 'none' }
}

export default List;
