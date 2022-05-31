<template>
    <div v-if="errors !== ''" class="text-red-600">
        {{ errors }}
    </div>

    <form v-on:submit.prevent="saveCompany">
        <div class="flex flex-col">
            <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Name
                </label>
                <input v-model="company.name" class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="name">
            </div>
            <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Email
                </label>
                <input v-model="company.email" class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="email" name="email" >
            </div>
            <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Address
                </label>
                <input v-model="company.address" class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="address">
            </div>
            <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Website
                </label>
                <input v-model="company.website" class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="url" name="website">
            </div>
        </div>

        <button class="px-4 py-2 font-bold text-black bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
            Save
        </button>
    </form>
</template>

<script>
import useCompanies from '../../composables/companies';
import { onMounted } from '@vue/runtime-core';

export default ({
    props: {
        id: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const {
            company,
            errors,
            getCompany,
            updateCompany
        } = useCompanies();

        onMounted(
            getCompany(props.id)
        );

        const saveCompany = async () => {
            await updateCompany(props.id);
        };

        return {
            company,
            errors,
            saveCompany
        };
    },
})
</script>
