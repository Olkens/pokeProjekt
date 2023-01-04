<template>
  <div class="main-container">
    <div class="logo-container">
      <img class="logo" src="../assets/logopok.png" alt="" />
    </div>
    <header>
      <nav>
        <ul>
          <li>
            <router-link class="nav-router-link" to="/">Home</router-link>
          </li>

          <li>
            <router-link class="nav-router-link" to="/pokemonPages/PokemonSearch">Wyszukiwarka</router-link>
          </li>
          <li>
            <router-link class="nav-router-link" to="/">About</router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.main-container {
  display: flex;
  flex-direction: column;
  padding-top: 65px;
  padding-bottom: 65px;
  

  .logo {
    max-width: 400px;
    max-height: 144px;
  }

  header {
    margin-top: 45px;

    nav {
      ul {
        display: flex;
        list-style: none;
        justify-content: center;
        gap: 33px;

        .nav-router-link {
          background: #6061c4;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25),
            10px 10px 20px rgba(0, 0, 0, 0.25);
          border-radius: 32px;
          padding: 16px 60px;
          font-family: 'Montserrat', sans-serif;
          font-style: normal;
          text-decoration: none;
          font-size: 18px;
          color: #fff;
          letter-spacing: 0.19em;

          &:hover {
            background: #ffcc03;
            color: #6061c4;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 376px) {
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    

    .logo {
      max-width: 200px;
      max-height: 100px;
    }

    header nav ul {
      
      gap: 9px;

      .nav-router-link {
        padding: 10px 16px;
        font-size: 10px;
        letter-spacing: 0.1em;
      }
    }
  }
}
@media only screen and (max-width: 415px) {
  
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    

    .logo {
      max-width: 220px;
      max-height: 100px;
      margin-left: 40px;
    }

    header nav ul {
      
      gap: 9px;

      .nav-router-link {
        padding: 12px 18px;
        font-size: 10px;
        letter-spacing: 0.1em;
      }
    }
  }
}
@media only screen and (max-width: 541px) {
  
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    

    .logo {
      max-width: 220px;
      max-height: 100px;
    }

    header nav ul {
      
      gap: 20px;

      .nav-router-link {
        padding: 12px 22px;
        font-size: 13px;
        letter-spacing: 0.1em;
      }
    }
  }
}
@media only screen and (max-width: 281px) {
  
  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    

    .logo {
      max-width: 200px;
      max-height: 100px;
      margin-left: 40px;
    }

    header nav ul {
      
      gap: 10px;

      .nav-router-link {
        padding: 10px 16px;
        font-size: 10px;
        letter-spacing: 0.1em;
      }
    }
  }
}
</style>