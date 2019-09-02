import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';


class Blog extends Component {
    state = {
        selectedPostId: null,
        error: false
    }


    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            <li>
                                <NavLink
                                    to="/posts/"
                                    exact
                                    activeClassName="active"
                                    activeStyle={{
                                        color: '#fa923f',
                                        textDecoration: 'underline'
                                        }}>
                                    Posts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={{
                                        pathname: "/new-post",
                                        hash: '#submit',
                                        search: "?quick-submit=true"
                                    }}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}

                {/* 
                    Order is important 
                    Switch limits to only firing one route, by default React would load all that match
                */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/posts" component={Posts} />
                    {/* <Route path="/" component={Posts} /> */}
                    <Redirect from="/" to="/posts" />
                </Switch>


            </div>
        );
    }
}

export default Blog;