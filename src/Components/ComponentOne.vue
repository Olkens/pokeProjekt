<template>
    <div class="first">
        <h1>
            Witamy w Pokemon 2.0
        </h1>
        <p>
            Witamy na stronie Pokemon 2.0. Skorzystaj z naszych zasobów, 
            <br>aby dowiedzieć się więcej o pokemonach w Twojej okolicy.
            <br>Intuicyjny interfejs pozwoli Ci zdobyć wiedzę niezbędną 
            <br>do zostania najlepszym trenerem Pokemonów w Twojej okolicy.
        </p>
    </div>
    <div class="second">
        <h1>
            Przewodnik
        </h1>
        <p>
            Aplikacja służy zdobywaniu wiedzy o Pokemonach takich jak wygląd
            <br> czy statystyki. Jeżeli chcesz znaleźć konkretnego Pokemona, 
            <br>przejdź do wyszukiwarki; możesz szukać po nazwie lub zdjęciu.
            <br>Kiedy znajdziesz Pokemona, który Cię interesuje, będziesz miał
            <br> możliwosć porównania go z innymi.
        </p>
    </div>
</template>

<script>
export default {
    name: 'ComponentOne',
};
</script>
<style scoped>
h1 {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    padding: 30px;

}

p {
    line-height: 30px;
    font-family: 'Avenir';
    text-align: center;
    font-size: 20px;
    color: #60516B;

opacity: 0.9;
}

body {
    display: flex;
    flex-direction: column;
    background-color: #FFF9EF;
   
}
.first {
    background-color: #FFF9EF;
}
.second {
    background-color: #FFF9EF;
}
</style>