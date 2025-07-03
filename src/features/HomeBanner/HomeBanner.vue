<template>
  <div class="home-banner">
    <div class="home-banner__image"></div>

    <div class="home-banner__content">
      <h1>Отправляйся в приключения с нашими эпическими лут-корзинами и наборами!</h1>
      <h3>
        Развивай свои навыки, следуя мудрым стратегиям мастеров, и поднимайся на новый уровень
        мастерства! С нашей поддержкой каждое твое действие станет частью великого искусства, а
        победы — результатом точного плана и безупречной подготовки!
      </h3>

      <button>В каталог</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.home-banner {
  position: relative;
  color: $background;

  &__image {
    position: absolute;

    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: $background-secondary;
    background: url('@public/images/home-banner.jpg') no-repeat center center / cover;

    @include max-w('lg') {
      background: url('@public/images/home-banner--mobile.jpg') no-repeat center bottom / cover;
    }
  }

  &__content {
    padding: $gap-xl;
    display: flex;
    flex-direction: column;
    gap: $gap-md;
    align-items: start;
    justify-content: center;
    max-width: 700px;
    font-family: 'Tenor Sans', sans-serif;

    @include max-w('lg') {
      justify-content: start;
      max-width: 100%;
      min-height: 800px;
      padding: $gap-lg $gap-sm;
      padding-bottom: 400px;
    }

    & h1 {
      @include text($size: '2xl', $color: $background);

      @include max-w('lg') {
        @include text($size: 'xl', $color: $background);
      }
    }

    & h3 {
      @include text($size: 'md', $color: $background);
      line-height: 1.3;
    }

    & button {
      @include button--primary;
      background: $background;
      color: $secondary;
    }
  }
}
</style>
