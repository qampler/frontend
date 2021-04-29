<template>
    <div
        class="w-36 h-36 bg-blue-500 hover:bg-blue-400 duration-300"
        @click="play"
    />
</template>

<script>
import { Howl } from 'howler';

export default {
  
    name: 'SamplerPad',

    props: {
        src: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            sound: new Howl({
                src: [this.src],
            }),
        };
    },

    methods: {
        play() {
            // To reset the sound
            this.sound.pause();
            this.sound.seek(0);
            
            this.sound.play();
        },
    },

};
</script>
