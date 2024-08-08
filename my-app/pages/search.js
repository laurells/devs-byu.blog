import { withRouter } from 'next/router';
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import { listSearch } from '../actions/blog';

const Search = ({ router }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        // console.log('router query in search page', router.query.searchQuery);
        listSearch({ search: router.query.searchQuery }).then(data => {
            setResults(data);
        });
    }, [router.query.searchQuery]);
    return (
        <React.Fragment>
            <Layout>
                <main>
                    <div className="container-fluid">
                        <header>
                            <div className="col-md-12 pt-3">
                                <h1 className="font-weight-bold text-center">Search</h1>
                            </div>
                            <section>
                                <div className="pb-5 text-center">
                                    <p>show search results here</p>
                                    {JSON.stringify(results)}
                                </div>
                            </section>
                        </header>
                    </div>
                </main>
            </Layout>
        </React.Fragment>
    );
};

export default withRouter(Search);