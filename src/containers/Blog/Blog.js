import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';

// Using a dynamic import for lazy loading
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})




class Blog extends Component {
    state = {
        auth: false
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
                    {/* {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null} */}
                    {/* <Route path="/new-post" component={NewPost} /> */}
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts" component={Posts} />
                    {/* 
                        To catch any unknown route without a path, a 404 error
                        NOTE: it won't work along with a Redirect from "/"

                     */}
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Route path="/" component={Posts} /> */}
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>


            </div>
        );
    }
}

export default Blog;