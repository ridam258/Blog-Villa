<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style scoped>
.card {
    height: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 0rem auto;
  max-width: 98%;
}
</style>