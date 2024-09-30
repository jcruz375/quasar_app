<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <router-link to="/">Fake store</router-link>
        </q-toolbar-title>
        <router-link to="/cart">
          <q-btn square color="primary" icon="shopping_cart">
            <q-badge color="red" floating v-if="cartHasProducts">
              {{ productStore.$state.productsInCart.length }}
            </q-badge>
          </q-btn>
        </router-link>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProductStore } from '../stores/cart_store';
defineOptions({
  name: 'MainLayout'
});

const productStore = useProductStore();

let cartHasProducts = computed(() => productStore.$state.productsInCart.length)

</script>
