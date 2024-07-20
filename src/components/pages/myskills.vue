<template>
  <div class="flex justify-center">

    <the-sidebar></the-sidebar>
    <skill></skill>


  </div>

</template>


<script>

import skill from '../skills/skill.vue';
import TheSidebar from '../TheSidebar.vue';





export default {
components:{
  skill,
  TheSidebar
}


}
</script>