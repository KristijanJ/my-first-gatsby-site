import * as React from 'react';

import favicon from '../images/icon.png';
import useSiteMetadata from '../services/useSiteMetadata';

const Seo = ({ title }) => {
    const metadata = useSiteMetadata();

    return (
        <>
            <title>
                {title} | {metadata.title}
            </title>
            <link rel="icon" type="image/x-icon" href={favicon} />
        </>
    );
};

export default Seo;
