<template>
    <div>
        <section>
            <span>Share :</span>
            <ShareNetwork
                :description="business.description"
                :title="business.store_name"
                :url="business.url"
                hashtags="Ovaboss,BeFree"
                network="facebook"
                quote="An Ovaboss International Business"
            ><i class="fab fa-facebook"></i></ShareNetwork>
            <ShareNetwork
                :description="business.description"
                :title="business.store_name"
                :url="business.url"
                hashtags="Ovaboss,BeFree"
                network="twitter"
                twitter-user="ovabossIntl"
            >
                <i class="fab fa-twitter"></i>
            </ShareNetwork>
            <ShareNetwork
                :description="business.description"
                :title="business.store_name"
                :url="business.url"
                network="telegram"
            >
                <i class="fab fa-telegram"></i>
            </ShareNetwork>
            <ShareNetwork
                :description="business.description"
                :title="business.store_name"
                :url="business.url"
                network="whatsapp"
            >
                <i class="fab fa-whatsapp"></i>
            </ShareNetwork>
        </section>
    </div>
</template>

<script>
    export default {
        props: {
            business: {
                type: Object,
                required: true,
            },
        },
    };
</script>

<style lang="css" scoped>
    p {
        margin-bottom: -4px;
        font-weight: bold;
    }

    i {
        font-size: 20px;
        padding-left: 10px;
        padding-top: 8px;
    }

    @media (min-width: 320px) and (max-width: 991px) {
        section {
            margin-top: 10px;
            margin-bottom: 10px;
            margin-left: 80px;
        }
    }
</style>
