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

      <aside class="display_col card">
        <span class="card__title">Параметры фильма</span>
      
        <section class="params">
          <section class="params-inputs_location">
            <select>
              <option select>Область</option>
            </select>

            <select>
              <option select>Город</option>
            </select>

            <select>
              <option select>Район/Округ</option>
            </select>
            
            <button class="params__button">
              Применить
            </button>
          </section>
          
          <aside class="params__buttons">
            <button class="params__buttons_square" >
              <img src="../assets/list.png" />
            </button>

            <button class="params__buttons_square">
              <img src="../assets/grid.png" />
            </button>

            <button class="params__buttons_square">
              <img src="../assets/printer.png" />
            </button>
          </aside>
        </section>
      </aside>

      <aside class="map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa9f2cfe5c9cec244c907c53a36f61dc9136db03f48d5bbd7c9819ebdc4641443&amp;source=constructor"
          width="890"
          height="400"
          frameborder="0"
          style="border-radius: 3px;"
        />
      </aside>

      <aside class="display">
        <button class="full-button_red">
          Добавить все отобранные отделения
        </button>
      </aside>

      <aside class="table">
        <div v-for="n in 9" :key="n" class="small-card_blue">
          <span class="small-card_blue__black-font">
            Россия, Москва <br /> ул. Коштоянца, 33
          </span>

          <button class="small-card_blue__adding">
            + Добавить
          </button>
        </div>
      </aside>

      <hr class="hr-line">

      <aside class="pagination">
        <button class="chevron">
          <img src="../assets/chevron-down.png" />
        </button>
        
        <button class="chevron">
          1
        </button>

        <button class="chevron">
          2
        </button>

        <button class="chevron">
          3
        </button>

        <button class="chevron">
          ...
        </button>

        <button class="chevron">
          5
        </button>

        <button class="chevron">
          <img src="../assets/chevron-down2.png" />
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

    max-width: 970px;
    
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

  &_col {
    display: flex;
    flex-direction: column;
  }
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

.card {
  border: 1px solid #D9DADB;
  border-radius: 3px;
  margin-top: 25px;

  &__title {
    margin-top: -15px;
    background-color: white;

    width: 173px;

    font-weight: 600;
    font-size: 14px;
    line-height: 22px;

    text-transform: uppercase;

    color: #040811;
  }
}

.params {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 1 1 0;

  padding: 24px;

  &-inputs_location {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-right: 61px;

    select {
      border: 1px solid #D9DADB;
      border-radius: 3px;
      padding: 0 16px;

      width: 160px;

      margin-right: 8px;
    }
  }

  &__button {
    padding: 12px 24px;

    border: none;

    width: 137px;

    cursor: pointer;

    background: #EEF2FB;
    border-radius: 3px;

    font-weight: 700;
    font-size: 12px;
    line-height: 16px;

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: #040811;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex: 1 1 0;

    &_square {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      border: none;

      background: #EEF2FB;
      border-radius: 3px;

      width: 40px;
      height: 40px;
    }    
  }
}

.map {
  display: flex;
  margin-top: 24px;
  margin-bottom: 16px;
}

.full-button_red {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 0;

  background: #E90D00;
  box-shadow: 0px 0px 15px rgba(233, 13, 0, 0.25);
  border-radius: 3px;
  border: none;

  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  color: #FFFFFF;


  padding: 14px 0;
}

.table {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex: 1 1 0;

  height: 380px;

  margin-top: 32px;
}

.small-card_blue {
  background: #EEF2FB;
  border-radius: 3px;
  width: 238px;

  padding: 24px;
  margin: 8px 0;

  &__black-font {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    
    color: #040811;
  }

  &__adding {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    text-decoration-line: underline;

    color: #2D00FF;

    border: none;
    background-color: transparent;
  }
}

.hr-line {
  width: 890px;

  margin-top: calc(24px - 8px);

  border: none;
  border: 1px solid #D9DADB;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;
}

.chevron {
  width: 48px;
  height: 48px;

  background: #EEF2FB;
  border-radius: 50%;
  border: none;
}
</style>
