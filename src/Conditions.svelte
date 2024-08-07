<script>
    import Banner from "./components/Banner.svelte";
    let title = 'Cancers We Treat';
    let info = 'A Spectrum of Care for Every Type of Cancer'
    let src = '/images/Patient-Weber-scaled.jpg' 
    let golden = false

    const data = [
    {
        name: "Integrative Oncology",
        img: "/images/breast.jpg"
    },
    {
        name: "Therapy - Chemotherapy",
        img: "/images/colon.jpeg"
    },
    {
        name: "Breast Cancer",
        img: "/images/prostate.jpeg"
    },
    {
        name: "Prostate Cancer",
        img: "/images/non.jpg"
    },
    {
        name: "Oncology - Therapy",
        img: "/images/pancreatic.jpeg"
    },
    {
        name: "Colon Cancer",
        img: "/images/brain.jpg"
    },
    {
        name: "Neoplasm - Cell",
        img: "/images/skin.jpeg"
    },
    {
        name: "Pancreatic Cancer",
        img: "/images/lung.jpg"
    },
    {
        name: "Brain Cancer",
        img: "/images/breast.jpg"
    },
    {
        name: "Adrenal Gland Tumor",
        img: "/images/colon.jpeg"
    },
    {
        name: "Adenoid Cystic Carcinoma",
        img: "/images/adenoid.jpg"
    },
    {
        name: "Amyloidosis",
        img: "/images/amyloidosis.jpg"
    },
    {
        name: "Anal Cancer",
        img: "/images/anal.webp"
    },
    {
        name: "Appendix Cancer",
        img: "/images/brain.jpg"
    },
    {
        name: "Bile Duct Cancer",
        img: "/images/skin.jpeg"
    },
    {
        name: "Bladder Cancer",
        img: "/images/prostate.jpeg"
    },
    {
        name: "Bone Cancer",
        img: "/images/bladder.jpg"
    },
    {
        name: "Cervical Cancer",
        img: "/images/cervical.jpg"
    },
    {
        name: "Eye Cancer",
        img: "/images/eye.jpg"
    },
    {
        name: "Kidney Cancer",
        img: "/images/prostate.jpeg"
    },
    {
        name: "Leukemia",
        img: "/images/non.jpg"
    },
    {
        name: "Lung Cancer",
        img: "/images/pancreatic.jpeg"
    },
    {
        name: "Melanoma",
        img: "/images/melanoma.webp"
    },
    {
        name: "Meningioma",
        img: "/images/skin.jpeg"
    },
    {
        name: "Mesothelioma",
        img: "/images/mesothelioma.jpg"
    },
    {
        name: "Myelodysplastic Syndromes (MDS)",
        img: "/images/cervical.jpg"
    },
    {
        name: "Multiple Myeloma",
        img: "/images/breast.jpg"
    },
    {
        name: "Neuroendocrine Tumors",
        img: "/images/colon.jpeg"
    },
    {
        name: "Non-Hodgkin Lymphoma",
        img: "/images/prostate.jpeg"
    },
    {
        name: "Ovarian Cancer",
        img: "/images/ovarian.jpg"
    },
    {
        name: "Parathyroid Cancer",
        img: "/images/parathyroid.jpeg"
    },
    {
        name: "Penile Cancer",
        img: "/images/penile.jpg"
    },
    {
        name: "Pituitary Gland Tumor",
        img: "/images/skin.jpeg"
    },
    {
        name: "Skin Cancer",
        img: "/images/lung.jpg"
    },
    {
        name: "Stomach Cancer",
        img: "/images/cervical.jpg"
    },
    {
        name: "Testicular Cancer",
        img: "/images/testicular.jpg"
    },
    {
        name: "Thyroid Cancer",
        img: "/images/thyroid.jpg"
    },
    {
        name: "Vaginal Cancer",
        img: "/images/vaginal.jpg"
    },
    {
        name: "Uterine Cancer",
        img: "/images/uterine.jpg"
    }
];

</script>

<Banner {title} {info} {src} {golden}/>

<div class="treat">
    <h1 class="golden">Types of Cancer We Treat</h1>
    <p>Our integrative oncology program combines the best of conventional and alternative modalities based on the recovery of the biological performance of each patient. We take a holistic approach to healing, treating the body, mind, and spirit to treat each patient on an individual level with our personalized medical protocols. </p>
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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    p{
        text-align: center;
    }

    h1{
        text-align: center;
        color: #002333;
        font-weight: 600;
    }

    h1{
        font-size: 3.3rem;
    }

    .card img{
        height: 190px;
    }
    .card {
        position: relative;
        height: fit-content;
        width: fit-content;
        margin: 19px;
        height: 190px;
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

.golden {
    color: #002333 ;
    font-size: 2.6rem;
    line-height: 3.6rem;
  }
</style>