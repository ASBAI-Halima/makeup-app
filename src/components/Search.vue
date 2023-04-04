<template>

   <div>
    <select  id="fruit" v-model="selected" @change="emitSearch">
        <option value="1" >Felttered by </option>
        <option v-for="item in items" :value="item">{{ item}}</option>
    </select>
    <p>{{selected}}</p>
  </div>
</template>

<script>

export default {

    props: {
    name: String,
    options: Array,
    items: {
            type: Array,
            required: true
        },
       
  },
  data(){
    return {
        selected: ''
    }
  },
  computed:{

  },
   methods: {
    emitSearch() {
        console.log('from search co ---'+this.selected)
      this.$emit('search', this.selected)
    }
  }
}
</script>

<style scoped>
    .container-products {
  height: 100%;
  margin-top: 100px;  
  align-self: center;}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

select {
  display: block;
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #ccc;
  background-color: #fff;
  width: 200%;
  margin-bottom: 1rem;
}

select:focus {
  outline: none;
  border-color: #8ac6d1;
  box-shadow: 0 0 0 2px rgba(138, 198, 209, 0.2);
}
div{
    margin-left: 0%;
    padding-left: 20px;
    padding-right: 20px;
}
</style>