import React from 'react';

class Prices extends React.Component {
    state = {
        currency: 'EUR'
    };

    render() {

        let list = '';

        switch(this.state.currency) {
            case "USD":
                list = "USD";
                break;
            case "GBP":
                list = "GBP";
                break;
            case "EUR":
                list = "EUR";
                break;
            default:
                list = null;
        };

        let priceContent = (<li className="list-group-item">
        Bitcoin Rate for {this.props.bpi.bpi[list].description}
        : <span class="badge badge-primary">{this.props.bpi.bpi[list].code}</span> 
        <strong>{this.props.bpi.bpi[list].rate}</strong>
    </li>)

        return (
            <div>
                <ul className="list-group">
                    {priceContent}
                </ul>
                <br />
                <select onChange={e => this.setState({ currency: e.target.value })} className="form-control">
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                    <option value="EUR">EUR</option>
                </select>
            </div>
        )
    }
};

export default Prices;