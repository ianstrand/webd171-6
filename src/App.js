import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Post from './components/Post';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

import './App.css';

const App = (props) => {

	const [objects] = useState([
		{link:"/", title:"Home"},
		{link:"/about", title:"About"},
		{link:"/blog", title:"Blog"},
		{link:"/contact", title:"Contact"}
	]);

	const [posts] = useState([
	    {
	      id: 1,
	      slug: "hello-react",
	      title: "Hello React",
	      content: "Lorem.",
	    },
	    {
	      id: 2,
	      slug: "hello-project",
	      title: "Hello Project",
	      content: "Tothe.",
	    },
	    {
	      id: 3,
	      slug: "hello-blog",
	      title: "Hello Blog",
	      content: "Ipsum.",
	    }
  	]);

    return (
      	<Router>
			<div className="App">
				<Header name="Ian Strand's Navbar" objects={objects} />
				  	<Switch>
				  		<Route exact path="/">
			            	<Home objects={objects} />
			        	</Route> 
			        	<Route exact path="/about">
			            	<About />
			        	</Route>
						<Route exact path="/blog" render={() => <Blog posts={posts} />} />
						<Route path="/post/:postSlug" 
							render={(props) => { 
								const post = posts.find(
									(post) => post.slug === props.match.params.postSlug 
								); 
								if (post) return <Post post={post} />;
								else return <NotFound />;
			 				}}
			 			/>
			 			<Route exact path="/contact">
			            	<Contact />
			        	</Route> 
		 				<Route component={NotFound} />
				  	</Switch>
				<Footer name="Ian Strand's Footer" objects={objects} />
			</div>
		</Router>
	);
};

export default App;