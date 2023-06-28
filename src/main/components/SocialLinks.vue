<template>
    <!-- Social Media Start Here -->
    <div class="social-links-wrapper">
        <a class="social-link-wrapper social-media bg-fb hover-fb" href="https://facebook.com/OvabossIntl" target="_blank">
            <div class="social-icon">
                <i class="fab fa-facebook-f"></i>
            </div>
        </a>
        <a class="social-link-wrapper social-media bg-twitter hover-twitter" href="https://twitter.com/OvabossIntl" target="_blank">
            <div class="social-icon">
                <i class="fab fa-twitter"></i>
            </div>
        </a>
        <a class="social-link-wrapper social-media bg-instagram hover-instagram" href="https://instagram.com/OvabossIntl" target="_blank">
            <div class="social-icon">
                <i class="fab fa-instagram"></i>
            </div>
        </a>
        <a
            class="social-link-wrapper social-media bg-linkedin hover-linked" href="https://linkedin.com/OvabossIntl"
            target="_blank">
            <div class="social-icon">
                <i class="fab fa-linkedin-in"></i>
            </div>
        </a>
    </div>
    <!-- Social Media End Here -->
</template>

<script>
    export default {
        name: "SocialLinks"
    }
</script>

<style scoped>
    .social-links-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .social-links-wrapper .social-link-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;
        color: #ffffff;
        border-radius: 4px;
        width: 3rem;
        height: 3rem;
        font-weight: bold;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -ms-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
    }

    .social-links-wrapper .social-link-wrapper:not(:last-child) {
        margin-right: 1rem;
    }

</style>
