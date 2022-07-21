<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  modelValue: { type: Boolean, required: true }
});

defineEmits(["update:modelValue", "close"]);
</script>

<template>
  <section v-if="modelValue" class="modal-container">
    <div class="modal__body">
      <aside class="display justify-content_space-between">
        <span class="modal__title">Почтовые отделения</span>

        <button @click="$emit('close')" class="modal__button_close">
          <img src="../assets/close.png" />
        </button>
      </aside>
      
      <aside class="display justify-content_space-between">
        <input
          placeholder="Укажите адрес или индекс почтового отделения"
          class="address__input"
        />

        <button class="address__button">
          Поиск
        </button>
      </aside>
    </div>
  </section>
</template>

<style lang="scss">
.modal {
  &-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(4, 8, 17, 0.5);
  }

  &__body {
    margin: 120px 235px;

    background-color: white;

    border-radius: 3px;

    padding: 32px 40px;

    width: 970px;
    
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;

    margin-bottom: 16px;

    color: #040811;
  }

  &-action {
    display: flex;
    flex-direction: row;
    gap: 40px;
    justify-content: center;
  }

  &-button {
    cursor: pointer;
    height: 30px;
    padding: 0 25px;
    border: 2px solid #74a2cf;
    border-radius: 5px;
    background-color: #80b2e4;
    color: #fff;
  }
  
  &-close {
    cursor: pointer;
    position: relative;
    align-self: end;
    right: -33px;
    top: -17px;
  }

  &__button_close {
    border: none;
    background-color: transparent;
  }
}

.display {
  display: flex;
  flex-direction: row;
  flex: 1 1 0;
}

.justify-content_space-between {
  justify-content: space-between;
}

.address {
  &__input {
    padding: 10px 16px;
    border: 1px solid #D9DADB;
    border-radius: 3px;
    margin-right: 16px;

    width: 100%;

    &::placeholder {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      
      color: #9B9CA0;
    }
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 130px;
    height: 40px;

    background: #E90D00;
    box-shadow: 0px 0px 15px rgba(233, 13, 0, 0.25);
    border-radius: 3px;
    border: none;

    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #FFFFFF;
  }
}
</style>
