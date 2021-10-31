import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <SearchBar/>
                <ProductTable products={this.props.products}/>
            </div>
        );
    }
}

export default FilterableProductTable;