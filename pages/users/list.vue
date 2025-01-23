<template>
  <div>
    <AppButton label="Verify" />
    <Card class="mt-16">
      <template #title>
        <h3 class="m-0">Users</h3>
      </template>
      <template #content>
        <DataTable :value="users" tableStyle="min-width: 50rem">
          <Column field="name" header="Name"></Column>
          <Column field="username" header="Username"></Column>
          <Column field="email" header="Email"></Column>
          <Column field="phone" header="Phone"></Column>
          <Column field="isActive" header="Active"></Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Card from 'primevue/card';
import Column from 'primevue/column';

const users = [
  {
    name: 'John Doe',
    username: 'johndoe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    isActive: true
  },
  {
    name: 'Jane Smith',
    username: 'janesmith',
    email: 'janesmith@example.com',
    phone: '098-765-4321',
    isActive: false
  },
  {
    name: 'Alice Johnson',
    username: 'alicej',
    email: 'alicej@example.com',
    phone: '555-123-4567',
    isActive: true
  },
  {
    name: 'Bob Brown',
    username: 'bobbrown',
    email: 'bobbrown@example.com',
    phone: '444-555-6666',
    isActive: false
  }
];
</script>
