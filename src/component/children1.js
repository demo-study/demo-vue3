const children1 = {
    template: `
<div style="border: 1px solid red; margin: 10px;padding: 10px">
    <button v-on:click="count++">
      You clicked me {{ count }} times.
    </button>
    <button @click="informParent">
        点击即通知父组件
    </button>
    <div>{{age}}</div>
    <div>{{title}}</div>
    <div>{{array}}</div>
</div>
`,
    props: {
        age: '',
    },

    created() {
        // this.$emit('chch')
    },

    setup(props,ctx) {
        const instance = getCurrentInstance();
        console.log('children-instance', instance)
        const count = ref(0)
        const title = inject('childrenTitle')
        const array = inject('arrayChildren')

        //emit
        const informParent = ()=>{
            ctx.emit('chch');
        }

        return {
            count,
            title,
            array,
            informParent
        }
    }
}