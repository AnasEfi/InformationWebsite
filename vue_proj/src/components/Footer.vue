<template>
    <footer id="footer">
        <section class="footer-container">
            <div class="contact-section">
                <div class="left-contact-section">
                    <div class="footer-logo"><img src="../assets/images/asu.logo.png" alt="logo"></div>

                    <div class="social-links">
                        <a href="#"><i class="fab fa-vk"></i></a>
                        <a href="#"><i class="fab fa-telegram"></i></a>
                        <a href="#"><i class="fab fa-spotify"></i></a>
                    </div>
                </div>

                <div class="right-contact-section">
                    <h2>Контактная информация</h2>
                    <div class="right-contact-section-text">
                        <div class="contact-info-item">
                            <p>Телефон: +7 (499) 507-8523 
                                E-Mail: asu@gubkin.ru 
                                Раздел на сайте университета</p>
                        </div>
                        <div class="contact-info-item">
                            График работы: ведется прием 
                            с 10:00 до 16:00 ежедневно, 
                            кроме субботы и воскресенья.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </footer>

</template>

<script>
export default {
    name: 'AppFooter'

}
</script>

<style>

.footer-container {
    display:flex;
    flex-direction: row;
    background-color: #333;
    min-height: 150px;
}

.contact-section {

    flex-direction: space-between;
    gap: 40px;
    padding: 5vh 10vw;
    border-top: 3px solid #000000;

    .left-contact-section {
        align-items: center;
        flex: 1;
    }

    .right-contact-section {
        font-style: normal;
        color: white;
        flex: 2;

        h2 {
            text-align: center;
            margin-bottom: 10px;
        }

        .right-contact-section-text {
            display: flex;
            flex-direction: row;
            justify-content: center;
            gap: 70px;
            font-style: normal;
            color: white;
        }
    }
}

.social-links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
}

.social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 10px 0px 0px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: #ffffff;
    transition: all 0.5s ease;

}

.social-links a:hover {
    color: #24262b;
    background-color: #ffffff;
}

.footer-logo {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>