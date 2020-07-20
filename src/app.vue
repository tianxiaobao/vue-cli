<template lang="html">
    <div>
        <Menu />
        <router-view />
    </div>
</template>

<script>
import Menu from "./views/components/menu";
export default {
    components: {
        Menu
    }
};
</script>