import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
export default props => {
    return (
        <Container>
            <Head>
                <script src="https://code.jquery.com/jquery-3.1.1.min.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js"></script>
            </Head>
            <Header />
            {props.children}
        </Container>
    )
}