import React, {Component} from 'react';

class ProductRow extends Component {
    render() {
        
        const name = this.props.stocked ? this.props.prod_name : <span style={{color:`red`}}
        >{this.props.prod_name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.price}</td>
            </tr>
        );
    }
}

export default ProductRow;