<script setup>
import { computed } from 'vue'

const props = defineProps({
  placeholder: String,
  options: {
    mode: String,
    type: String,
  },
})

const options = computed(() => ({
  type: 'text',
  mode: 'text',
  borderless: false,
  ...props.options,
}))
</script>

<template>
  <div :class="`input-component ${options.borderless ? '' : 'input-component--has-border'}`">
    <input
      :placeholder="props.placeholder"
      :type="options.type"
      :inputmode="options.mode"
      :class="`input-component__input`"
    />

    <div class="input-component__post">
      <slot name="input-post" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.input-component {
  @include flex-center;
  width: 100%;
  border-radius: $rounded-lg;

  &--has-border {
    border: 1px solid $border;
  }

  &__input {
    width: 100%;
    height: 50px;
    border-radius: $rounded-lg;
    background: $background;
    outline: none;
    font-family: inherit;
    font-size: inherit;
    padding: 0 $gap-sm;
  }

  &__post {
    padding-right: $gap-xs;
  }
}
</style>
