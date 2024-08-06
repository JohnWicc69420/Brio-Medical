<script>
    let title = 'Become A Patient'
    let info = ''
    let src = '/images/Patient-Weber-scaled.jpg' 
    let golden = false

    import Banner from "./components/Banner.svelte";

    let data = [
        {
            img: '/images/r1.jpg',
            title: 'PATIENT TESTIMONIALS',
            info: 'The greatest testimony to the benefits and results of the treatments at Brio comes from the inspiring stories told by actual patients and their families'

        },
        {
            img: '/images/r2.jpg',
            title: 'FINANCIAL RESOURCES',
            info: 'You still have the option to choose the treatment that resonates with you.'
        },
        {
            img: '/images/r3.jpg',
            title: 'PREPARING FOR TREATMENT',
            info: 'What do you need to bring to the clinic? What labs and reports do you need? Learn what you need to start you journey to healing.'

        },
        {
            img: '/images/r4.jpg',
            title: 'TRAVELING TO ARIZONA',
            info: 'We have made special arrangements with hotels and accommodations which provide discounts to all Brio Medical patients.'
        },
    ]
</script>

<Banner {title}{info}{src}{golden} />

<div class="container">
    <div class="res">
    <h1>Patient Resources</h1>
    <p>
        As you begin your journey to healing, it is natural to feel overwhelmed or anxious about your decision to receive treatment away from home. When you are ready, a patient care coordinator is awaiting your call to go over your treatment options and help you plan a trip to visit the Brio Medical clinic in Scottsdale, Arizona.  To help you start your journey, we have provided links to patient resources below to help guide you on how to become a patient.
    </p>
</div>
    <div class="cards">
        {#each data as card}
        <div class="card">
        <div class="img">
        <img src={card.img} alt="" srcset="">
        </div>

        <div class="p">
        <h2>{card.title}</h2>
        <p>{card.info}</p>
    </div>
</div>
        {/each}
    </div>

</div>

<style>
.res {
    display: flex;
    align-items: center;
    flex-direction: column;
}

.res p{
    text-align: center;
    width: 80%;
}
h1{
    text-align: center;
    color: #F8C33B;
}
.container {
    background-color: #f6f6f6;
    padding: 40px;
}
    .cards{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
        margin-top: 70px;
    }

    h2 {
        color: rgb(198, 0, 0);
        font-weight: 100;
        line-height: 2rem;
    }

    .card{
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: #fff;
    padding: 20px;
    width: 500px;
    }

    .cards .img{
        height: 180px;
        width: 180px;
    }

    .p p {
        font-size: .9rem;
        line-height: 1.5rem;
        margin: 10px 0px 0px;
    }
    h2 {
        margin: 0px;
    }
    img {
        width: 100%;
        height: 180px;
        width: 180px;
        object-fit: cover;
    }

    .p{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 1000px){
        .card{
            flex-direction: column;
            align-items: center;
    }

    h2 {
        font-size: 1rem;
        text-align: center;
    }
    p {
        text-align: center;
    }

    .p{
        align-items: center;
    }
    }
</style>
