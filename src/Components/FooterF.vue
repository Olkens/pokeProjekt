<template>
    <div class="footer-container">
        <footer class="footer">
            <h4 class="groupName">InIn4_FD</h4>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'FooterF',
};
</script>

<style scooped>
body {
    margin: 0;


}

.footer-container {
    display: flex;
    align-items: flex-end;

}

.footer {
    width: 100vw;
    height: 129px;
    box-sizing: border-box;
    background: #FFCC03;
    border-top: 4px solid #0007AA;
}

.groupName {
    font-family: 'Avenir';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;

    letter-spacing: 0.19em;
    color: #1E2F41;
    opacity: 0.7;

    display: flex;
    align-items: center;
    padding: 20px;
}


</style>