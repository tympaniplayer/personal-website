<template>
  <section class="section">
    <div class="container">
      <h1 class="title">About Me</h1>
      <h2 class="subtitle">
        My name is Nate Palmer.
        <br />I'm currently a Lead Dev at Cox Automotive
        <br />I use .net and .netcore to create web apps that provide measurable value to customers.
      </h2>
    </div>
  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: "HomePage",

  components: {
    Card
  }
};
</script>
