<template>
    <v-container>
        <v-layout row justify-center>
            <v-card>
                <v-card-title>
                <v-spacer></v-spacer>
                <v-text-field
                        v-model="search"
                        append-icon="search"
                        label="Поиск"
                        single-line
                        hide-details
                ></v-text-field>
                </v-card-title>
                <v-data-table
                        :headers="headers"
                        :items="users"
                        :search="search"
                >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.email}}</td>
                </template>
                <v-alert slot="no-results" :value="true" color="error" icon="warning">
                    Поиск пользователя "{{ search }}" не дал результатов.
                </v-alert>
                </v-data-table>
            </v-card>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "users",
        data(){
            return{
                headers:[
                    {text:'Пользователи', value:"email", sortable: false}
                ],
                search:''
            }
        },
        computed:{
            users(){
                return this.$store.getters.allUsers;
            }
        },
        mounted(){
            this.$store.dispatch('fetchUsers');
        }
    }
</script>

<style scoped>

</style>