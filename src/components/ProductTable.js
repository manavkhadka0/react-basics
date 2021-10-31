import React, {Component} from 'react';
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const rows=[];
        let lastCateogry = null;
        
        
        this.props.products.forEach((prod) => {
            if(prod.category !== lastCateogry){
                rows.push(
                    <ProductCategoryRow
                    category={prod.category}
                    key={prod.category}/>
                )
            }
            rows.push(
                <ProductRow
                    prod_name={prod.name}
                stocked={prod.stocked}
                price={prod.price}/>
            )
            lastCateogry= prod.category
        })
        
        
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                    
                </table>
            </div>
        );
    }
}

export default ProductTable;