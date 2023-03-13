import React from 'react';

function Home() {
    return (
        <div className="jumbotron">
            <h1 className="display-3">Welcome!</h1>
            <p className="lead">Your balance to this month is $100</p>
            <hr className="my-4"/>
            <p className="lead">
                <a className="btn btn-danger btn-lg" href="" role="button"><i className="fa fa-users"></i>Add launch</a>
            </p>
        </div>
    );
}

export default Home;
