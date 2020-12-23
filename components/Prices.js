import React from 'react';

class Prices extends React.Component {
    state = {
        currency: 'USD'
    };

    render() {

        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        Bitcoin Rate for {this.props.bpi.bpi.USD.description}
                        : <span class="badge badge-primary">{this.props.bpi.bpi.USD.code}</span> 
                        <strong>{this.props.bpi.bpi.USD.rate}</strong>
                    </li>
                </ul>
            </div>
        )
    }
};

export default Prices;