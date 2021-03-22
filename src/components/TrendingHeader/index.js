import React from 'react';
import './styles.scss';

const TrendingHeader = () => {
    return(
        <div className="trendingHeader">
            <div className="trendingTitle">
                <span className="title">Trending Page</span>
            </div>
            <div className="trendingInfo">
                <p>Top-7 trending coins in the last 24 hours (according to <a href="coingecko.com">coingecko.com</a>).</p>
            </div>
        </div>
    );
};

export default TrendingHeader;