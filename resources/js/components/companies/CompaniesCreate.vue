<template>

    <div v-if="errors !== ''" class="text-red-600">
        {{ errors }}
    </div>

    <form @submit.prevent="saveCompany">
        <div class="flex flex-col">
            <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Name
                </label>
                <input v-model="form.name" class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text">
            </div>
            <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Email
                </label>
                <input v-model="form.email" class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="email">
            </div>
            <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Address
                </label>
                <input v-model="form.address" class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="text">
            </div>
            <div class="w-full">
                <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase">
                    Website
                </label>
                <input v-model="form.website" class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" type="url">
            </div>
        </div>

        <button class="px-4 py-2 font-bold text-black bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
            Save
        </button>
    </form>

</template>


<script>
import { reactive } from "vue";
import useCompanies from "../../composables/companies";

export default {
    setup() {
        const {errors, storeCompany} = useCompanies();

        const form = reactive({
            'name': '',
            'email': '',
            'address': '',
            'website': ''
        });

        const saveCompany = async () => {
            await storeCompany({...form});
        };

        return {
            form,
            errors,
            saveCompany
        };
    }
}
</script>
