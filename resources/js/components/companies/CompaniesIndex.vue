<template>
    <button>
        <router-link :to="{ name: 'companies.create' }">
            Create Company
        </router-link>
    </button>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Website</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in companies" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.website }}</td>
                <td>
                    <router-link :to="{ name: 'companies.edit', params: { id: item.id } }">Edit</router-link>
                    <a href="#" @click="deleteCompany(item.id)">Delete</a>

                </td>
            </tr>
        </tbody>
    </table>

</template>

<script>
import { onMounted } from '@vue/runtime-core';
import useCompanies from '../../composables/companies';

export default {
    setup() {
        const {companies, getCompanies, destroyCompany} = useCompanies();

        onMounted(getCompanies);

        const deleteCompany = async (id) => {
            if (!window.confirm('Are you sure?')) {
                return;
            }

            await destroyCompany(id);
            await getCompanies();
        };

        return {
            companies,
            deleteCompany
        };
    }
}
</script>
