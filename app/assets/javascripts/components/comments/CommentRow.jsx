import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

@Radium
class CommentRow extends React.Component {
    get styles() {
        return {
            base: {
                cursor: 'pointer',
                listStyle: 'none',
                border: '2px solid #4b4e6d',
                padding: '10px',
                display: 'block',
                marginBottom: '10px',
            },
            header: {
                fontSize: '14px',
                fontWeight: 'bold',
            },
            description: {
                fontSize: '14px',
            }
        };
    }
    render() {
        return (
          <li style={this.styles.base}>
            <div style={this.styles.header}>{this.props.title}</div>
            <div style={this.styles.description}>{this.props.comment}</div>
          </li>
        );
    }
}
CommentRow.contextTypes = {
    router: React.PropTypes.object,
}

export default CommentRow;