<template>
    <div class="first-and-second">
        <div class="first">
            <h1>
                Witamy w Pokemon 2.0
            </h1>
            <p>
                Witamy na stronie Pokemon 2.0. Skorzystaj z naszych zasobów, aby dowiedzieć się więcej o pokemonach w
                Twojej okolicy.
                Intuicyjny interfejs pozwoli Ci zdobyć wiedzę niezbędną
                do zostania najlepszym trenerem Pokemonów..
            </p>
        </div>
        <div class="second">
            <h1>
                Przewodnik
            </h1>
            <p>
                Aplikacja służy zdobywaniu wiedzy o Pokemonach takich jak wyglądczy statystyki. Jeżeli chcesz znaleźć
                konkretnego Pokemona,
                przejdź do wyszukiwarki; możesz szukać po nazwie lub zdjęciu.
                Kiedy znajdziesz Pokemona, który Cię interesuje, będziesz miał
                możliwosć porównania go z innymi.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ComponentOne',
};
</script>
<style scoped lang="scss">
body {
    display: flex;
    flex-direction: column;
    background-color: #FFF9EF;

    .first-and-second {
        display: flex;
        flex-direction: column;
        align-items: center;

        .first,
        .second {
            max-width: 700px;

            h1 {
                font-family: 'Montserrat', sans-serif;
                font-style: normal;
                font-weight: 100;
                font-size: 36px;
                line-height: 40px;
                text-align: center;
                padding: 10px;
            }

            p {
                line-height: 30px;
                font-family: 'Montserrat', sans-serif;
                font-style: normal;
                text-align: justify;
                font-size: 20px;
                color: #60516B;
                opacity: 0.9;
            }
        }
    }
}

@media only screen and (max-width: 376px) {
    body {
        display: flex;
        flex-direction: column;

        .first-and-second {
            display: flex;
            flex-direction: column;
            align-items: center;

            .first,
            .second {
                max-width: 370px;

                h1 {
                    font-size: 26px;
                    padding: 10px;
                }
                p {
                    line-height: 30px;
                    font-size: 16px;
                    margin: 20px;
                }
            }
        }
    }
}
@media only screen and (max-width: 541px) {
    body {
        display: flex;
        flex-direction: column;

        .first-and-second {
            display: flex;
            flex-direction: column;
            align-items: center;

            .first,
            .second {
                max-width: 400px;

                h1 {
                    font-size: 30px;
                    padding: 10px;
                }
                p {
                    line-height: 30px;
                    font-size: 16px;
                    margin: 10px;
                }
            }
        }
    }
}
</style>