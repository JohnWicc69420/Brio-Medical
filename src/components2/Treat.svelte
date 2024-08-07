
<script>
    const data = [{
        name: "Breast Cancer",
        img: "/images/breast.jpg"
    },{
        name: "Colon Cancer",
        img: "/images/colon.jpeg"
    },{
        name: "Prostate Cancer",
        img: "/images/prostate.jpeg"
    },{
        name: "Non-Hodgkin Lymphoma",
        img: "/images/non.jpg"
    },{
        name: "Pancreatic Cancer",
        img: "/images/pancreatic.jpeg"
    },{
        name: "Brain Cancer",
        img: "/images/brain.jpg"
    },{
        name: "Skin Cancer",
        img: "/images/skin.jpeg"
    },{
        name: "Lung Cancer",
        img: "/images/lung.jpg"
    },{
        name: "Cervical Cancer",
        img: "/images/cervical.jpg"
    },]
</script>

<div class="treat">
    <h1 class="ff">Cancers We Treat</h1>
    <h3>Early, Late-Stage, & Metastatic Cancer Specialists</h3>
    <p>At Brio&#45;Medical, we stand at the forefront of cancer treatment by embracing a science&#45;based approach that addresses the root causes of cancer across all stages and types.</p>
    <p>Our philosophy is grounded in harnessing the natural killing power of the body&apos;s immune system, targeting cancer cells while preserving the body&apos;s integrity and health. This approach marks a significant departure from conventional oncology options, which often rely on surgical intervention, radiation, and full&#45;dose chemotherapy &#45; treatment
    <div class="images">
        {#each data as card}
        <div class="card">
            <h1 class="title">{card.name}</h1>
            <img src={card.img} alt="">
        </div>
         
        {/each}
    </div>

</div>

<style>
    .treat{
        padding: 60px 40px;
        background-color: #F6F4F3;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    p{
        text-align: center;
    }

    h1, h3{
        text-align: center;
        color: #002333;
        font-weight: 600;
    }

    h1{
        font-size: 3.3rem;
    }

    h3 {
        font-size: 1.8rem;
        font-weight: 500;
        margin: 0px;
        padding-bottom: 40px;
    }
    .card img{
        height: 200px;
    }
    .card {
        position: relative;
        height: fit-content;
        width: fit-content;
        margin: 19px;
        height: 200px;
        border-radius: 14px;
        overflow: hidden;
    }
    .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease-in-out;
    z-index: 1;
}

.card:hover::before {
    background-color: rgba(16, 125, 118, 0.6);
}

.card:hover .title{
    transform: scale(1.1)
}
    .title{
        font-size: 1.2rem;
        color: #fff;
        position: absolute;
        text-align: center;
        top: 40%;
        margin: 0px auto;
        width: 100%;
        z-index: 10;
        transition: transform 0.3s ease;
    }

    .images{
        width: 100%;
        margin-left: -20px;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

</style>