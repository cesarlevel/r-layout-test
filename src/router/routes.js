import Main from '@/views/Main.vue';
import Forms from '@/views/Forms.vue';
import Details from '@/views/Details.vue';
import CustomerDetails from '@/views/CustomerDetails.vue';
import Settings from '@/views/Settings.vue';

export const routes = [
    {path: '/', component: Main},
    {path: '/forms', component: Forms, name: 'forms'},
    {path: '/details', component: Details, name: 'details'},
    {path: '/customer-details', component: CustomerDetails, name: 'customer-details'},
    {path: '/settings', component: Settings, name: 'settings'},
];