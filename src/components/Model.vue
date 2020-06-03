<template>
  <transition name="slide">
    <div class="model" v-show="showModel">
      <div class="mask">
        <div class="model-dialog">
          <div class="model-header">
            <span>{{title}}</span>
            <a href="javasript:;" class="icon-close" @click="$emit('cancel')"></a>
          </div>
          <div class="model-body">
            <slot name="body"></slot>
          </div>
          <div class="model-footer">
            <a
              href="javasript:;"
              v-if="btnType == 1"
              @click="$emit('submit')"
              class="btn"
            >{{sureText}}</a>
            <a
              href="javasript:;"
              v-if="btnType == 2"
              @click="$emit('cancel')"
              class="btn"
            >{{calcelText}}</a>
            <div class="btn-group" v-if="btnType == 3">
              <a href="javasript:;" class="btn" @click="$emit('submit')">{{sureText}}</a>
              <a href="javasript:;" class="btn btn-default" @click="$emit('cancel')">{{calcelText}}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "model",
  props: {
    //弹框类型 small.middle.large.form
    modelType: {
      type: String,
      default: "form"
    },
    title: String,
    //按钮类型   1确认按钮 2取消按钮  3都有
    btnType: String,
    sureText: {
      type: String,
      default: "确定"
    },
    calcelText: {
      type: String,
      default: "取消"
    },
    showModel: Boolean
  }
};
</script>