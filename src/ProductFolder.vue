<template>
    <div class="container">
        <h2> {{$route.params.object_type}} </h2>
        <table class="table">
            <thead>
                <tr>
                    <th> Titel </th>
                    <th> Author </th>
                    <th> Status </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items">
                    <td> {{item.titel}} </td>
                    <td> {{item.author}} </td>
                    <td> {{item.status}} </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>

export default {
  name: 'ProductFolder',

  data () {
    return {
          items: []
    }
  },
  created() {
      var url = this.$config.API_URL + '/members/' + this.$auth.user().pid + '/' + this.$route.params.object_type
      this.$http.get(url)
          .then(response => {
              console.log(response.data)
              this.items = response.data.items
          })
          .catch(e => {
              console.log(e)
          })

  }

}
</script>
