<script>
  // pages
  import Login from "./pages/Login.svelte";
  import About from "./pages/About.svelte";
  import Products from "./pages/Products.svelte";
  import ProductTemplate from "./pages/ProductTemplate.svelte";
  import Checkout from "./pages/Checkout.svelte";
  import Home from "./pages/Home.svelte";
  // router
  import { Router, Route, Link } from "svelte-routing";
  // components
  import Navbar from "./components/Navbar/Navbar.svelte";
  import Sidebar from "./components/Navbar/Sidebar.svelte";
</script>
<Router>
	<Navbar />
	<Sidebar />
	<!--
	<nav>
		<nav class="navbar">
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/products">Products</Link>
	</nav> 
	-->
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="/login" component={Login} />
	<Route path="/products" component={Products} />
	<Route path="/product/:id" component={ProductTemplate} />

</Router>