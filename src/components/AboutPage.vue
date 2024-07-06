<template>
  <MainLayout>
    <section>
      <p class="intro-text">
        Freedom Recovery is an addiction treatment program for those suffering from alcohol abuse disorder or the addiction to drugs.
        It is a remote-only, open forum, intended to foster communication in a healthy and judgment-free way. In a Freedom Recovery meeting, depending on the specific meeting group, we will cover one or more of the following topics. We will use the term "addiction" often in the program as an umbrella term for the addiction to both drugs and alcohol. Many of the existing recovery support programs are outdated. They use an archaic approach, materials, and resources. It's no longer the 1900's and it's time for a new generation of addiction recovery support!
      </p>
      <ul class="topics-list">
        <li>Living with addiction and the strain it puts on individuals and families</li>
        <li>Relapse prevention and methods that have worked for others</li>
        <li>Rebuilding lives after addiction</li>
        <li>Guilt and shame tied to addiction</li>
        <li>Coping mechanisms for dealing with cravings</li>
        <li>Building a support network</li>
        <li>The role of therapy and counseling in recovery</li>
        <li>Medication-assisted treatment options</li>
        <li>Mindfulness and stress reduction techniques</li>
        <li>Healthy lifestyle choices to support recovery</li>
        <li>Setting and achieving personal goals in recovery</li>
        <li>Understanding and managing triggers</li>
        <li>Financial management and rebuilding after addiction</li>
        <li>Relationships and communication skills in recovery</li>
        <li>Nutrition and physical health in recovery</li>
        <li>Creative outlets and hobbies as coping mechanisms</li>
        <li>The importance of self-care and self-compassion</li>
        <li>Overcoming stigma and societal pressures</li>
        <li>Inspirational stories of recovery and hope</li>
        <li>Strategies for maintaining long-term sobriety</li>
        <li>How to have fun living a sober life!</li>
      </ul>
    </section>
  </MainLayout>
</template>

<script>
import MainLayout from './MainLayout.vue'

export default {
  components: {
    MainLayout
  },
  name: 'AboutPage'
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
  font-size: 3em;
  font-weight: bold;
  margin: 0;
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

main {
  padding: 20px;
  text-align: center;
}

.intro-text {
  font-size: 1.2em;
  margin-bottom: 20px;
  font-style: italic;
  max-width: 800px; /* Increased max-width for better readability */
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
  text-align: left;
}

li {
  margin-bottom: 10px;
  font-size: 1.1em;
}

li::before {
  content: "• ";
  color: #4CAF50;
  font-weight: bold;
}

section {
  margin-bottom: 40px;
}

section h2 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>
