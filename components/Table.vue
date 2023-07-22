<script setup>
import moment from "moment";
const props = defineProps({
  headers: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <div class="overflow-x-auto">
    <table class="table-auto w-full border-collapse border border-gray-400">
      <thead>
        <tr class="bg-gray-200">
          <th
            class="px-4 py-3 text-left"
            v-for="header in headers"
            :key="header"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b border-gray-300"
          v-for="item in items"
          :key="item.id"
        >
          <td class="px-4 py-4" v-for="header in headers" :key="header">
            {{
              header == "timestamp"
                ? moment(item[header.toLowerCase()]).format(
                    "YYYY-MM-DD HH:mm:ss"
                  )
                : item[header.toLowerCase()]
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>