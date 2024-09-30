<template>
  <article>
    <section class="card-header">
      <img :src="product.image" :alt="product.description">
    </section>
    <section class="card-footer">
      <div class="main-info">
        <h3>{{ formatedTitle }}</h3>
        <p>{{ product.price }}</p>
      </div>
      <p>{{ formatedDescription }}</p>
      <div class="actions">
        <q-btn color="white" text-color="black" label="Add to cart" @click="handleAddToCart(product)" />
        <q-btn color="primary" label="Buy now" />
      </div>
    </section>
  </article>
</template>

<script setup lang='ts'>
import { computed, defineProps } from 'vue';
import { productProps } from './models';
import { useProductStore } from '../stores/cart_store';

const cartStore = useProductStore();

interface productCardProps {
  product: productProps
}

let props = defineProps<productCardProps>()

let formatedDescription = computed(() => {
  const limit = 50;
  let { description } = props.product;

  return description.length > limit
    ? description.slice(0, limit) + '...'
    : description;
})
let formatedTitle = computed(() => {
  const limit = 20;
  let { title } = props.product;

  return title.length > limit
    ? title.slice(0, limit) + '...'
    : title;
})

function handleAddToCart(product: productProps) {
  cartStore.addToCart(product)
}
</script>

<style lang="scss" scoped>
article {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border: 1px solid grey;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 100%;
    height: 100px;
    object-fit: contain;
  }

  .card-header {
    padding-top: 1.5rem;
  }

  .card-footer {
    width: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .main-info {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      h3 {
        font-size: 1rem;
        font-weight: 700;
        text-align: left;
      }

      p {
        text-align: right;
      }
    }

    .actions {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  }

}
</style>
