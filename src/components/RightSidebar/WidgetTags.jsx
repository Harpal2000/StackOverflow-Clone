import React from 'react'

import { Link } from 'react-router-dom'

function WidgetTags() {
    const tags = [
        "javascript",
        "php",
        "java",
        "c#",
        "android",
        "jQuey",
        "Ajax",
        "node.js",
    ];

    return (
        <div className="main-tags-div">
            <h4>Related Tags</h4>
            <div className="widget-tags-div">
                {tags.map((tag) => (
                    <Link key={tag} style={{ textDecoration: 'none' }} to={'/Tags'}>
                        <p><span>{tag}</span></p>
                    </Link>
                ))}
                <Link to={'/Tags'} style={{ textDecoration: 'none', fontSize: '13px', marginTop: '5px' }}>more related tags</Link>
            </div>
        </div>
    );
};

export default WidgetTags