<template>
  <table border="1">
    <tr v-for="(item, key) in data" :key="key">
      <td>{{ key.toUpperCase() }}:</td>
      <td v-if="key === 'avatar_url'"> <img  width="30" :src="item" /></td>
      <td v-else>
        <h4>
        {{ item }}
        </h4>
      </td>
    </tr>
  </table>
</template>

<script>
import { emitter } from "../main.js";
import axios from "axios";

export default {
  name: "Content",
  data: function () {
    return {
      data: {},
      issueData: [],
    };
  },
  methods: {
    getData(url) {
      axios.get(url).then((res) => {
        if (res.data[0] === undefined) {
          this.data = res.data;
        } else {
          this.data = res.data[0];
        }
      });
    },
  },
  mounted() {
    emitter.on("change-data-option", (value) => this.getData(value));
  },
};
</script>

<style >
table {
  width: 100%;
}
</style>
