import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import favicon from '../images/icon.png';

const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <title>
                {title} | {data.site.siteMetadata.title}
            </title>
            <link rel="icon" type="image/x-icon" href={favicon} />
        </>
    );
};

export default Seo;
