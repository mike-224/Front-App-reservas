<template>
  <div class="container">
    <h1>Clientes</h1>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellidos</th>
            <th>Id</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" v-bind:key="course.idCli">
            <td>{{course.nombreCli}}</td>
            <td>{{course.apellidoCli}}</td>
            <td>{{course.idCli}}</td>
            <td><button class="btn btn-success" v-on:click="updateCourseClicked(course.idCli)">Update</button></td>
            <td><button class="btn btn-warning" v-on:click="deleteCourseClicked(course.idCli)">Delete</button></td>
          </tr>
        </tbody>
      </table>
      <div class="row">
      <button class="btn btn-success" v-on:click="addCourseClicked()">Add</button>
      </div>
      </div>
  </div>
</template>

<script>
import CourseDataService from '../servicios/CourseDataService';
  export default {
    name: "CoursesList",
    data() {
      return {
        courses: [],
        message: null,
        INSTRUCTOR: "appgym"
      };
    },
    methods: {
      refreshCourses() {
        CourseDataService.retrieveAllCourses(this.INSTRUCTOR) //HARDCODED
          .then(response => {
            this.courses = response.data;
          });
      },
      deleteCourseClicked(idCli) {
        CourseDataService.deleteCourse(this.INSTRUCTOR, idCli).then(response => {
          this.message = `Se ha borrado el cliente con id: ${idCli}`;
          this.refreshCourses();
          });
      },
      updateCourseClicked(idCli) {
          this.$router.push(`/courses/${idCli}`);
          },
      addCourseClicked() {
          this.$router.push(`/courses/-1`);
          },
    },
    created() {
      this.refreshCourses();
    }
  };

</script>

<style scoped>

</style>