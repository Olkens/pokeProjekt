<template>
    <div>
      <div class="main">
        <div class="logoContainer">
            <img class="logo" src="../assets/logopok.png">
        </div>
        <div class="buttons">
            <div>
                <button class="home">Home</button>
            </div>
            <div>
                <button class="list">Pokemon List</button>
            </div> 
            <div>
                <button class="about">About</button>
            </div>
        </div>
        <diV>
            <form class="formborder">
                <input class="search" type="text" placeholder="Search Pokemon">
                <button class="spot" type="submit"><img class="lupka" src="../assets/lupka.png"></button>
            </form>
        </diV>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ComponentOne',
};
</script>
<style>
body {
    background-color: #F5F5F5;
}
.main div {
    padding: 10px;
}
.logo {
    width: 400px;
    height: 144.38px;
    margin: 30px;
}
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
}
.buttons {
    display: flex;
}
.home,
.list,
.about {  
    background: #6061C4;
    border-radius: 32px;

    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
}
.home {
    width: 257px;
    height: 64px;
    box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25), 5px 5px 10px rgba(0, 0, 0, 0.25);
    left: 281px;
    top: 230px;
}
.list {
    width: 298px;
    height: 64px;
    left: 571px;
    top: 230px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25);
}
.about {
    width: 257px;
    height: 64px;
    left: 901px;
    top: 230px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25), 10px 10px 20px rgba(0, 0, 0, 0.25);
}
.formborder {
    width: 877px;
    height: 64px;
    left: 281px;
    top: 332px;

    background: #FFFFFF;
    box-shadow: inset -2px -2px 4px rgba(255, 255, 255, 0.5), inset 2px 2px 4px rgba(255, 172, 96, 0.6), inset 5px 5px 10px rgba(255, 172, 96, 0.5), inset -5px -5px 10px #FFFFFF;
    border-radius: 40px;
}
.search {
    position: relative;
    top: 10px;
    left: 15px;

    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    /* identical to box height, or 111% */
    color: #60516B;
    opacity: 0.6;
    border: none;
}


.spot {
    position: relative;
    left: 360px;

    width: 40px;
    height: 40px;
    right: 12px;
    top: calc(50% - 40px/2);
    

    background: #FFCC03;
    /* Shadow 2 */

    box-shadow: 5px 5px 10px rgba(170, 170, 204, 0.5), -5px -5px 10px #FFFFFF;
    border-radius: 32px;
}
.lupka {
    
    
    width: 20px;
    height: 20px;
    left: 6px;
    top: 6px;
    background: #60516B;
}
</style>