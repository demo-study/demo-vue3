const children2 = {
template: `
<div style="border: 1px solid lightblue;margin: 10px;padding: 10px">
<div>我是children2 {{age}}</div>
<a-select mode="tags" style="width: 100%" placeholder="Tags Mode" @change="handleChange">
    <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
      {{ (i + 9).toString(36) + i }}
    </a-select-option>
</a-select>
</div>
`,
    setup() {
        const age = ref(18);
        const handleChange = (value)=>{
            console.log(`selected ${value}`);
        };
        return {
            age,
            handleChange
        }
    }
}


