// Step 1: Import React
import * as React from 'react';
import favicon from '../images/icon.png';

import Layout from '../components/layout';

// Step 2: Define your component
const IndexPage = () => {
    return (
        <Layout pageTitle="Welcome to my Gatsby site!">
            <p>I'm making this by following the Gatsby Tutorial.</p>
        </Layout>
    );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => (
    <>
        <title>Home Page</title>
        <link rel="icon" type="image/x-icon" href={favicon} />
    </>
);

// Step 3: Export your component
export default IndexPage;
