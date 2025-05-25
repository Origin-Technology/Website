<script setup lang="ts">
import { VPTeamMembers } from 'vitepress/theme'
import { computed, shallowRef } from 'vue'

const members = computed(() => [
  {
    avatar: 'https://github.com/micishere.png',
    name: 'CuteMic',
    title: 'Leader',
    links: [
      { icon: 'github', link: 'https://github.com/micishere' },
    ],
  },
  {
    avatar: 'https://github.com/xiguajerry.png',
    name: 'Xiguajerry',
    title: 'Member',
    links: [
      { icon: 'github', link: 'https://github.com/xiguajerry' },
    ],
  },
  {
    avatar: 'https://github.com/lingzhigod.png',
    name: 'Trdyun',
    title: 'Member',
    links: [{ icon: 'github', link: 'https://github.com/lingzhigod' }],
  },
])
</script>

<template>
  <div flex="~ col wrap" mt8 items-center>
    <h2 class="out-team-title" text="center gray xl" mt-11 mb-4 pb-2>
      {{ 'Our Team' }}
    </h2>
    <h2 class="out-team-text" text="center gray xl" mt-11 mb-4 pb-2>
      {{ 'Say hello to our awesome team.' }}
    </h2>
    <VPTeamMembers class="w-full px-4" size="small" :members="members" />
  </div>
</template>

<style>
.out-team-title {
  font-size: larger;
  text-align: center;
  margin: 50px 20px 5px;
  padding: 20 20 20;
}

.out-team-text {
  font-size: small;
  text-align: center;
  margin: 5px 20px 20px;
  padding: 20 20 20;
}
</style>
