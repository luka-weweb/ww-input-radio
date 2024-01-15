<template>
    <button class="ww-radio" role="radio" aria-checked="true">
        <div class="ww-radio-wrapper" :style="style"></div>
    </button>
</template>

<script>
export default {
    props: {
        content: { type: Object, required: true },
    },
    computed: {
        style() {
            return {
                backgroundColor: this.content.color,
                width: this.content.size,
                height: this.content.size,
            };
        },
    },
};
</script>

<style scoped lang="scss">
.ww-radio {
    display: flex;
    justify-content: center;
    align-items: center;
}

.ww-radio-wrapper {
    border-radius: 50%;
    display: block;
}
</style>
