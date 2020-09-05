<template>
  <div class="iq-works-box round-icon">
    <!--<div class="step">
      {{ step }}
    </div>-->
    <div class="icon-bg center-block">
      <slot name="cardMedia"/>
    </div>
    <div class="text-center">
    <slot name="cardBody"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardStyle5',
  // eslint-disable-next-line vue/require-prop-types
  props: ['step']
}
</script>
