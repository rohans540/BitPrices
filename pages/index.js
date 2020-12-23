import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => 
(
    <Layout>
        <div>
            <h1>Welcome to NextJs App</h1>
            <p>Check current bitcoin rates:</p>
            <Prices bpi={props.bpi} />
            {/* {props.bpi.bpi.USD.description} */}
        </div>
    </Layout>
);

Index.getInitialProps = async function() {
    const resp = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await resp.json();

    return {
        bpi: data
    }
}

export default Index;