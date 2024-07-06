<template>
  <MainLayout>
    <section id="home">
      <h2>Welcome to Freedom Recovery</h2>
      <h3>Our only rule is to be kind and be clothed 😊</h3>
      <p>Our program helps individuals recover from addiction through support and community using a modern and no pressure approach.</p>
      <button @click="findMeeting">Find a Meeting</button>
    </section>
    <section id="meetings" v-if="showMeetings">
      <h2>Find a Meeting</h2>
      <div class="search-bar">
        <input type="text" v-model="location" placeholder="Enter your location">
        <button @click="searchMeetings">Search</button>
      </div>
      <ul>
        <li v-for="meeting in meetings" :key="meeting.id">
          <strong>{{ meeting.title }}</strong> - {{ meeting.time }}
          <a :href="meeting.zoomLink" target="_blank">Zoom Link</a>
        </li>
      </ul>
    </section>
  </MainLayout>
</template>

<script>
import axios from 'axios'
import MainLayout from './MainLayout.vue'

export default {
  components: {
    MainLayout
  },
  data () {
    return {
      showMeetings: false,
      location: '',
      meetings: []
    }
  },
  methods: {
    findMeeting () {
      this.showMeetings = true
    },
    async searchMeetings () {
      const MOCK_API_URL = 'https://jsonplaceholder.typicode.com/posts'
      const meetingTitles = [
        'Young adult meeting (18-30)',
        'Adult meeting in English (31 years and up)',
        'Women\'s recovery group',
        'Men\'s support group',
        'LGBTQ+ safe space meeting',
        'Family and friends support meeting',
        'Teen recovery group (13-17)',
        'Meditation and mindfulness recovery meeting',
        'Early morning recovery meeting',
        'Evening recovery meeting'
      ]
      try {
        const response = await axios.get(MOCK_API_URL)
        this.meetings = response.data.slice(0, 10).map((post, index) => {
          return {
            id: post.id,
            title: meetingTitles[index],
            time: '10:00 AM', // Mock time
            zoomLink: 'https://zoom.us/meeting' + post.id // Mock Zoom link
          }
        })
      } catch (error) {
        console.error('Error fetching meetings:', error)
        alert('Error fetching meetings. Please try again later.')
      }
    }
  }
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 1em 0;
  text-align: center;
  position: relative;
}

header h1 {
  font-size: 2.5em;
}

nav {
  position: absolute;
  top: 0;
  left: 0;
  margin: 20px;
}

nav .home-link {
  font-weight: bold;
  font-size: 1.2em;
  color: white;
  text-decoration: none;
}

nav a {
  margin: 0 15px;
  color: white;
  text-decoration: none;
}

main {
  padding: 20px;
}

button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

footer {
  text-align: center;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
}

h1 {
  font-size: 2.5em;
}

h3 {
  color: #333;
  font-weight: normal;
}
</style>
