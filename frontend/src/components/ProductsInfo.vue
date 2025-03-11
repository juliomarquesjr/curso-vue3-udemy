<template>
  <div>
    <p>Likes: {{ likes }}</p>
    <p>Comments: {{ comments }}</p>
  </div>
</template>

<script setup>
defineProps({
    likes: Number,
    comments: Number
});
</script>