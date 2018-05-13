<template>
  <div class="pdam">
    <div class="pdam-header-page">
      <div class="turn-back">
        <router-link to="/">
          <img class="arrow-back" src="../assets/icon/arrow_back.svg" alt="">
        </router-link>
      </div>
      <h1 class="pdam-header">PDAM</h1>
    </div>
    <!-- END .pdam-header-page -->
    <div class="pdam-input-container">
      <div class="pdam-no-pelanggan top-input-container">
        <div class="pdam-no-pelanggan-input-container">
          <i class="pdam-icon-input"
          v-bind:class="{'onInput': onInputText}"
          v-show="iconPDAM">
            <img src="../assets/icon/water_white.svg" alt="">
          </i>
          <i class="pdam-icon-input"
          v-bind:class="{'onInput': onInputText}"
          v-show="bluePDAM">
            <img src="../assets/icon/water_blue.svg" alt="">
          </i>
          <p class="placeholder-top" v-show="onHaveText">No.Pelanggan</p>
          <input class="pdam-no-pelanggan-input" ref="input" id=""
          type="number" name="pdam-no-pelanggan-input"
          placeholder="No. Pelanggan" maxlength="13"
          v-model="noPelanggan" v-on:focus="showBluePDAM(), onFocusInput()"
          v-on:blur="onBlurInput()">
          <img class="clear-button" src="../assets/icon/close_circle.svg" alt="" v-on:click="clearInput()">
          <div class="pdam-logo-popup">
            <p>PAM</p>
            <div class="pdam-logo">
              <img src="../assets/icon/aetra.png" alt="">
            </div>
          </div>
        </div>
        <!-- END pdam-no-pelanggan-input-container -->
      </div>
      <!-- END .pdam-no-pelanggan -->
      <div class="pdam-periode bottom-input-container">
        <div class="pdam-periode-input-container">
          <i class="pdam-icon-periode"><img src="../assets/icon/dari_provinsi_grey.svg" alt="" srcset=""></i>
          <p class="placeholder-top">Periode Tagihan</p>
          <input class="pdam-periode-input" id="" type="month" name="pdam-periode-input" placeholder="Periode Tagihan" >
          <img class="arrow-next" src="../assets/icon/arrow_blue_bayarin.svg" alt="">
        </div>
      </div>
      <!-- END .pdam-periode -->
    </div>
    <!-- END .pdam-input-container -->
    <div class="customer-info-background">
      <div class="customer-info" v-bind:class="{'animated': displayInfo}">
        <div class="customer-info-header">
          <p class="customer-name">Andara Nasta</p>
          <hr>
        </div>
        <!-- END .customer-info-header -->
        <div class="customer-info-content">
          <div class="receipt customer-info-va">
            <p>No. Pelanggan</p>
            <p class="receipt-number">{{ noPelanggan }}</p>
          </div>
          <div class="receipt customer-info-jumlah-bulan">
            <p>PAM</p>
            <p class="receipt-number">PDAM AETRA</p>
          </div>
          <div class="receipt customer-info-periode">
            <p>Periode Tagihan</p>
            <p class="receipt-number">Mei 2018</p>
          </div>
          <div class="receipt customer-info-biaya-admin">
            <p>Biaya Admin</p>
            <p class="receipt-number">Rp. 1.500</p>
          </div>
          <hr class="total-bayar-line">
        </div>
        <!-- END .customer-info-content -->
        <div class="customer-info-bayar">
          <div class="receipt customer-info-total-bayar">
            <p>Total Bayar</p>
            <p class="receipt-number total-bayar">Rp. 28.000</p>
          </div>
        </div>
        <!-- END .customer-info-total -->
      </div>
      <!-- END .customer-info -->
    </div>
    <!-- END .customer-info-background -->
    <div class="pdam-footer">
      <label class="pdam-favorit">
        <input type="checkbox" name="check-favorit" id="" checked>
        <span class="checkmark"></span>
        <p>Simpan sebagai favorit</p>
      </label>
      <div class="slide-container" v-show="viewSlide">
        <div class="circle" v-on:click="showSaldo()">
          <i class="icon icon-topup"></i>
        </div>
        <VueDrag
          :width="262"
					:height="50"
					:background="'#f7f7f7'"
					:progressBarBg="'#2140d2'"
					:completedBg="'#2140d2'"
					:text="'Bayar'"
					:successText="'Success'"
					:handlerBg="'#2140d2'"
					:textSize="'18px'"
          :passCallBack="successSlide()"/>
      </div>
      <div class="slide-container" v-show="!viewSlide">
        <div class="circle" v-on:click="showSlide()">
          <i class="icon icon-bill"></i>
        </div>
        <div class="saldo-bar">
          <p>Saldo Kamu Rp.{{ saldoFormat }}</p>
        </div>
      </div>
    </div>
    <!-- END .pdam-footer -->
  </div>
  <!-- END .pdam -->
</template>

<script>
import VueDrag from 'vue-drag-verify';
export default {
  components: {
    'VueDrag': VueDrag
  },
  data() {
    return {
      onInputText: false,
      onHaveText: false,
      saldo: 30000,
      viewSlide: true,
      noPelanggan: '',
      bluePDAM: false,
      iconPDAM: true,
    };
  },
  computed: {
    saldoFormat() {
      return this.saldo.toLocaleString('id-ID');
    },
    displayInfo() {
      if (this.noPelanggan.length >= 11) return true;
      else return false;
    }
  },
  methods: {
      gotoPage(route) {
          this.$router.push(route);
      },
      successSlide() {
        console.log('success slide');
      },
      showSlide() {
        this.viewSlide = true;
      },
      showSaldo() {
        this.viewSlide = false;
      },
      onFocusInput() {
        this.onInputText = true;
        this.onHaveText = true;
      },
      showBluePDAM() {
        this.bluePDAM = true;
        this.iconPDAM = false;
      },
      onBlurInput() {
        this.onInputText = false;

        if (this.noPelanggan.length == 0) this.onHaveText = false;
        else this.onHaveText = true;

        this.bluePDAM = false;
        this.iconPDAM = true;
      },
      clearInput() {
        this.noPelanggan = '';
        this.$refs.input.focus();
      },
  }
}
</script>

<style scoped>
  /* HEADER */
  .pdam {
    padding: 10px 22px 16px;
  }
  .pdam-header-page {
    padding-bottom: 8px;
    background-color: white;
  }
  img.arrow-back {
    margin-bottom: 16px;
  }

  /* INPUT CONTAINER */
  .pdam-input-container {
    border: solid 1px #dddddd;
    border-radius: 4px;
    background-color: white;
    padding: 34px 24px 24px 16px;
  }
  .pdam-no-pelanggan.top-input-container {
    display: flex;
    align-items: center;
    position: relative;
  }
  .pdam-no-pelanggan-input-container {
    position: relative;
    width: 80%;
  }
  /* TOP INPUT CONTAINER */
  i.pdam-icon-input {
    position: absolute;
  }
  p.placeholder-top {
    font-size: 12px;
    color: #888888;
    position: absolute;
    left: 32px;
    top: -7px;
  }
  input.pdam-no-pelanggan-input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #ddd;
    padding: 5px 23px 8px 32px;
    outline: 0;
    font-size: 16px;
    font-family: "Proxima Nova", sans-serif;
  }
  input.pdam-no-pelanggan-input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  img.clear-button {
    position: absolute;
    top: 3px;
    right: 0px;
    width: 18px;
    height: 18px;
  }
  .pdam-logo-popup {
    position: absolute;
    top: -10px;
    right: -55px;
  }
  .pdam-logo-popup p {
    font-size: 13px;
    color: #888888;
  }
  .pdam-logo-popup img {
    width: 40px;
  }
  .pdam-periode-input-container {
    position: relative;
    width: 80%;
  }
  .pdam-periode.bottom-input-container {
    margin-top: 39px;
    display: flex;
    align-items: center;
    position: relative;
  }
  input.pdam-periode-input {
    width: 100%;
    padding-right: 20px;
    border: 0;
    border-bottom: 1px solid #ddd;
    outline: 0;
    font-size: 16px;
    font-family: "Proxima Nova", sans-serif;
  }
  img.arrow-next {
    position: absolute;
    right: 0px;
    bottom: 5px;
    height: 16px;
    width: 16px;
  }
  .customer-info {
    background-image: url('/src/assets/image/rectangle_11.png');
    background-repeat: no-repeat;
    background-size: 100%;
    background-position-y: -85px;
    width: 296px;
    margin: 0 auto;
    padding: 16px 16px 22px;
    position: relative;
    top: -195px;
    z-index: -1;
    transition-property: top;
    transition-duration: 1s;
    transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .customer-info.animated {
    top: -10px;
  }
  p.customer-name {
    font-size: 16px;
    color: #2140d2;
  }
  hr {
    margin-top: 4px;
    margin-bottom: 8px;
  }
  hr.total-bayar-line {
    margin-top: 8px;
    margin-bottom: 8px;
  }
  .receipt {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .receipt p {
    font-size: 14px;
    color: #888888;
    line-height: 18px;
  }
  .receipt p.receipt-number {
    color: #000;
  }
  p.receipt-number.total-bayar {
    color: #2140d2;
  }
  .pdam-favorit {
    display: inline-flex;
    flex-direction: row;
    margin-bottom: 28px;
    align-items: center;
    cursor: pointer;
  }
  .pdam-favorit input {
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    height: 24px;
    width: 24px;
    background-color: white;
    border-radius: 3px;
    border: solid 2px #ddd;
  }
  .pdam-favorit input:checked ~ .checkmark {
    background-color: #2140d2;
    border: 2px solid #2140d2; 
  }
  .checkmark:after {
    position: absolute;
    content: "";
    display: none;
  }
  .pdam-favorit input:checked ~ .checkmark:after {
    display: block;
  }
  .pdam-favorit .checkmark:after {
    left: 7px;
    top: 2px;
    width: 5px;
    height: 11px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  .pdam-favorit p {
    position: relative;
    left: 26px;
    font-size: 13px;
    color: #888;
  }
  .slide-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .circle {
    background-color: #a28ffd;
    padding: 13px;
    border-radius: 25px;
  }
  .circle i {
    color: white;
  }
  .saldo-bar {
    background-color: white;
    width: 262px;
    height: 50px;
    text-align: center;
    border: solid 1px #ddd;
    border-radius: 25px;
    display: table;
  }
  .saldo-bar p {
    display: table-cell;
    vertical-align: middle;
  }
</style>
