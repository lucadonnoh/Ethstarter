import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();

        return { campaigns };
    }

    renderCampigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaigns</a>,
                fluid: true
            };
        });

        return <Card.Group items={items} />
    }

    render() {
        return (
            <Layout>
                <div>
                    <script src="https://code.jquery.com/jquery-3.1.1.min.js" crossorigin="anonymous"></script>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                    <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
                    <h3>Open Campaigns</h3>
                    {this.renderCampigns()}
                    <Button
                        content="Create Campaign"
                        icon="add circle"
                        primary
                    />
                </div>
            </Layout>
        );
    }

}

export default CampaignIndex;