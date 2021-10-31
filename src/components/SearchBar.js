import React, {Component} from 'react';

class SearchBar extends Component {
    render() {
        return (
            <form>
                    <input type="text" placeholder="Search..."/>
    
        <p><input type="checkbox" id="check"/>
                <label for="check">Only Show products in stock</label></p>
            </form>
        );
    }
}

export default SearchBar;