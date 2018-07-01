<template>
    <v-container>
        <v-flex xs12 sm6 offset-sm3>
            <v-data-table
                    :headers="headers"
                    :items="places"
                    hide-actions
                    item-key="id"
            >
                <template slot="items" slot-scope="props">
                    <tr @click="props.expanded = !props.expanded">
                        <td class="text-xs-center">{{ props.item.title }}</td>
                    </tr>
                </template>
                <template slot="expand" slot-scope="props">
                    <v-card flat>
                        <v-card-text>{{props.item.description}}</v-card-text>
                    </v-card>
                </template>
            </v-data-table>
        </v-flex>
    </v-container>
</template>

<script>
    export default {
        name: "places",
        data(){
            return{
                headers:[
                    {text: 'Название',value: 'title'},
                ]
            }
        },
        computed:{
            places(){
                return this.$store.getters.ads;
            },
            loading () {
                return this.$store.getters.loading;
            }
        }
    }
</script>

<style scoped>

</style>