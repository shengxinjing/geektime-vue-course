<template>
  <Heading :level="1">标题1</Heading>
  <Heading :level="2">标题2</Heading>
  <Heading :level="3">标题3</Heading>
  <Heading :level="4">标题4</Heading>

  <hr />
  <Timeline />
  <hr />
  <Timeline :reverse="true" />
</template>

<script setup>
import Heading from '../components/Heading.jsx'
import { Timeline } from '../components/Todo.jsx'
</script>
