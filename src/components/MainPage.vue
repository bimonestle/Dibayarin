<template>
    <div class="main-page">
        <box-component name="Tagihan Listrik" discount="true" icon="bayar_in_bill_pln.svg" @click.native="gotoPage('/tagihan-listrik')"/>
        <box-component name="BPJS Kesehatan" icon="bayar_in_bpjs.svg" @click.native="gotoPage('/bpjs-kesehatan')"/>
        <box-component name="PDAM" newpromo="true" icon="bayar_in_pdam.svg" @click.native="gotoPage('/pdam')"/>
    </div>
</template>

<script>
import BoxComponent from './BoxComponent.vue';

export default {
  components: {
      'box-component': BoxComponent
  },
  methods: {
      gotoPage(route) {
          this.$router.push(route);
      }
  }
}
</script>

<style>
    .main-page {
        display: grid;
        grid-template-columns: repeat(3, 98px);
        grid-gap: 12px;
        justify-content: center;
        padding: 16px;

    }
</style>
