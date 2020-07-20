<template>
    <div class="menu">
        <ul>
            <li 
                v-for="(item, index) in routes" 
                :key="index" 
            >
                <router-link :to="item.name">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import routes from "@/router/routes";
export default {
    data() {
        return {
            routes: routes.slice(1)
        };
    }
};
</script>