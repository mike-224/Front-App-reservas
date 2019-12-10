<template>
  <div>
    <h3>Cliente</h3>
    <div class="container">
      <form @submit="validateAndSubmit">
        <div v-if="errors.length">
          <div class="alert alert-warning" v-bind:key="index" v-for="(error, index) in errors">{{error}}</div>
        </div>
        <fieldset class="form-group">
          <label>Id</label>
          <input type="text" class="form-control" v-model="idCli" disabled>
        </fieldset>
        <fieldset class="form-group">
          <label>Nombre</label>
          <input type="text" class="form-control" v-model="nombreCli">
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>
<script>
import CourseDataService from "../servicios/CourseDataService";
export default {
  name: "Course",
  data() {
    return {
      nombreCli: "",
      INSTRUCTOR: "appgym",
      errors: []
    };
  },
  computed: {
    idCli() {
      return this.$route.params.idCli;
    }
  },
  methods: {
    refreshCourseDetails() {
        CourseDataService.retrieveCourse(this.INSTRUCTOR, this.idCli).then(res => {
          this.nombreCli = res.data.nombreCli;
        });
    },
    validateAndSubmit(e) {
        e.preventDefault();
        this.errors = [];
        if(!this.nombreCli) {
            this.errors.push("Introduce valores normales");
        } else if(this.nombreCli.length < 5) {
            this.errors.push("El nombre tiene que tener más de 5 letras");
        }
        if(this.errors.length === 0) {
            if (this.idCli === -1) {
                CourseDataService.createCourse(this.INSTRUCTOR, {
                    nombreCli: this.nombreCli
                })
                .then(() => {
                    this.$router.push('/courses');
                });
            } else {
                CourseDataService.updateCourse(this.INSTRUCTOR, this.idCli, {
                    idCli: this.idCli,
                    nombreCli: this.nombreCli
                })
                .then(() => {
                    this.$router.push('/courses');
                });
            }
        }
    }
  },
  created() {
    this.refreshCourseDetails();
  }
};
</script>