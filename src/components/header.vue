<template>
  <div class="grayBg">
    <div class="socialMedia">
      <a href="https://github.com/TChinasso?tab=repositories" target="_blank"><i class="fab fa-github zoom" id="gitHub"></i></a>
      <a href="https://www.linkedin.com/in/thiago-felipe-84a458181/" target="_blank"><i class="fab fa-linkedin zoom" id="linkedIn"></i></a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.grayBg{
    width: 100vw;
    height: 100%;
    background-color: #24292e;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
h1{
    align-self: center;
    justify-self: center;
    font-size: 80%;
}
#linkedIn{
  color: #2867B2;
  font-size: 5vh;
}
#gitHub{
  color: #f6f8fa;
  font-size: 5vh;
}
#gitHub:hover{
  color: #e0e0e0;
}
.socialMedia{
  margin-right: 5%;
}
a{
  margin-left: 2vw;
}
.zoom{
  transition: transform 0.5s;
}
.zoom:hover{
  transform: scale(1.5);
}

</style>