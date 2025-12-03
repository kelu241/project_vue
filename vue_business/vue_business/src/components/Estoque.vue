

<script setup lang="ts">
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net-dt'
import "datatables.net-dt/css/dataTables.dataTables.css";
import type {Product} from './../models/Product'
const props = defineProps<{
  produtos_estoque: Product[]
}>()

// registra o core dentro do componente DataTable
DataTable.use(DataTablesCore)

const columns = [
  { data: 'id', title: 'ID' },
  { data: 'name', title: 'Produto' },
  { data: 'price', title: 'Preço' }
]


</script>

<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Tabela</h1>

      <DataTable
        :columns="columns"
        :data="produtos_estoque"
        class="table is-striped is-hoverable"
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
      </DataTable>
    </div>
  </section>
</template>
