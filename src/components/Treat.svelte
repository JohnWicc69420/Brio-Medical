
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
    <h1>Cancers We Treat</h1>
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
    <h2 class="button1">Cancers We Treat</h2>

</div>

<style>
    .treat{
        padding: 80px 40px;
        background-color: #F6F6F6;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1, h3{
        text-align: center;
    }

    .card img{
        height: 200px;
    }
    .card {
        position: relative;
        height: fit-content;
        width: fit-content;
        margin: 19px;
    }

    .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 52, 105, 0.6); 
    transition: background-color 0.3s ease-in-out;
    height: 200px;
    z-index: 1;
}

.card:hover::before {
    background-color: rgba(248, 195, 59, 1);
}

.card::after {
    content: '';
    position: absolute;
    top: 30px;
    left: 30px;
    width: calc(100% - 60px);
    height: calc(100% - 60px); 
    border: 1px solid transparent;
    box-sizing: border-box; 
    transition: border-width 0.3s ease-in-out, top 0.3s ease-in-out, left 0.3s ease-in-out, width 0.3s ease-in-out, height 0.3s ease-in-out, border 0.3s ease-in-out;
    z-index: 2;
}

.card:hover::after {
    top: 40px;
    left: 40px;
    width: calc(100% - 80px);
    height: calc(100% - 80px); 
    border: 1px solid white;
    border-width: 1px;
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
    }

    .images{
        width: 100%;
        margin-left: -20px;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    h2{
        border-radius: 5px;
        color: white;
    }

    h2:hover{
        background-color: #F8C33B;
    }

</style>