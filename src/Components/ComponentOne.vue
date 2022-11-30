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
    <div class="footerContainer">
        <footer>
            <h6 class="group">InIn4_FD</h6>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'ComponentOne',
};
</script>
<style scoped>
body {
    background-color: #F5F5F5;
    width: auto;
    height: auto;
    margin: 0;
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
    outline: none;
}


.spot {
    position: relative;
    top: 10px;
    left: 370px;
    width: 40px;
    height: 40px;



    background: #FFCC03;
    /* Shadow 2 */

    box-shadow: 5px 5px 10px rgba(170, 170, 204, 0.5), -5px -5px 10px #FFFFFF;
    border-radius: 32px;
}

.lupka {
    position: relative;
    left: -1px;
    top: 1px;
    width: 25px;
    height: 25px;

    background: #60516B;
}

footer {
    background-color: #FFCC03;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4rem;
    box-sizing: border-box;
    border-top: 4px solid #0007AA;


}

.group {
    position: absolute;
    bottom: -30px;
    left: 46px;

    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 40px;
    letter-spacing: 0.19em;
    color: #1E2F41;

    opacity: 0.7;
}
</style>