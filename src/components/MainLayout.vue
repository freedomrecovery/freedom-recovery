<template>
  <div>
    <header>
      <div class="logo-title">
        <a href="/" class="logo-link">
          <img src="@/assets/logo.png" alt="Freedom Recovery Logo" class="logo">
        </a>
        <h1 class="site-title">Freedom Recovery</h1>
      </div>
      <nav>
        <router-link to="/" class="nav-link" exact>Home</router-link>
        <router-link to="/about" class="nav-link">About</router-link>
        <router-link to="/membership" class="nav-link">Membership</router-link>
        <router-link to="/contact" class="nav-link">Contact</router-link>
      </nav>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <p>&copy; 2024 Freedom Recovery</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'MainLayout'
}
</script>

<style scoped>
/* Reset some basic elements */
body, h1, h2, h3, h4, h5, h6, p, ul, li {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* General body styles */
body {
    background-color: #4CAF50;
    color: #FFFFFF;
    font-family: Arial, sans-serif;
    line-height: 1.6;
}

/* Header styles */
header {
    text-align: center;
    background-color: #333333;
    color: white;
    padding: 20px;
}

.logo-title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.logo {
    height: 60px; /* Increased the size for better visibility */
    width: auto;
    margin-bottom: 10px; /* Space between logo and title */
}

.site-title {
    font-size: 2em;
    margin: 0;
    margin-bottom: 20px; /* Space between title and navigation */
}

nav {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.nav-link {
    font-size: 1em; /* Smaller font size for the menu items */
    color: white;
    text-decoration: none;
}

.router-link-exact-active {
    font-weight: bold;
}

/* Main content styles */
main {
    padding: 20px;
    text-align: center;
}

/* Footer styles */
footer {
    text-align: center;
    padding: 10px;
    background-color: #333333;
    color: white;
}
</style>
