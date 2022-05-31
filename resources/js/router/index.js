import { createRouter, createWebHistory } from "vue-router";

import CompanyIndex from "../components/companies/CompaniesIndex";
import CompanyCreate from "../components/companies/CompaniesCreate";
import CompanyEdit from "../components/companies/CompaniesEdit";

const routes = [
    {
        path: "/dashboard",
        name: "companies.index",
        component: CompanyIndex,
    },
    {
        path: "/companies/create",
        name: "companies.create",
        component: CompanyCreate,
    },
    {
        path: "/companies/:id/edit",
        name: "companies.edit",
        component: CompanyEdit,
        props: true
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
