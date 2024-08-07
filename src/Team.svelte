<script>
    const data = [
        {
        name: "Dr. Sean Devlin, D.O., MD(H), MS",
        img: "/images/t1.webp",
        title: "Chief Medical Officer"
    },
    {
        name: "Dr. Walter Kim, MD",
        img: "/images/t2.png",
        title: "Integrative Medicine Physician"
    },
    {
        name: "Dr. Rumbidzai Mudzonga, NMD",
        img: "/images/t3.webp",
        title: "Naturopathic Physician"
    },
    {
        name: "Dr. Reuda",
        img: "/images/t4.webp",
        title: "Natural Cancer Doctor"
    },
    {
        name: "Dr. Lauren Rueda NMD (Preceptee)",
        img: "/images/t5.jpg",
        title: "Naturopathic Physician"
    },
    {
        name: "Anita Kyle",
        img: "/images/t6.jpg",
        title: "Mind and Body Specialist"
    },
    {
        name: "Sarah Herrington",
        img: "/images/t7.jpg",
        title: "Licensed Practical Nurse"
    },
    {
        name: "Sarah Herrington",
        img: "/images/t8.jpg",
        title: "Nutritionist"
    },
    {
        name: "Bobbi Brown",
        img: "/images/t9.webp",
        title: "Licensed Practical Nurse"
    },
    {
        name: "Daisy Regmi RN",
        img: "/images/t10.png",
        title: "Registered Nurse"
    },
    {
        name: "Christine Williamson, RN",
        img: "/images/t11.webp",
        title: "Registered Nurse"
    },
    {
        name: "Daniela Diaz RN",
        img: "/images/t12.jpg",
        title: "Registered Nurse"
    },
    {
        name: "James Hyatt RN",
        img: "/images/t13.webp",
        title: "Registered Nurse"
    },
    {
        name: "Morie Van ESS RN",
        img: "/images/t14.jpg",
        title: "Registered Nurse"
    },
    {
        name: "Jodi Taylor RN",
        img: "/images/t15.jpg",
        title: "Registered Nurse"
    },
    {
        name: "Jordan Frerichs, RN",
        img: "/images/t16.webp",
        title: "Registered Nurse"
    },
    {
        name: "Melissa A. Moore LPN",
        img: "/images/t17.png",
        title: "Licensed Practical Nurse"
    },
    {
        name: "Tiffanie Smith LPN",
        img: "/images/t18.webp",
        title: "Licensed Practical Nurse"
    },
    {
        name: "Christina Nicolas, CNA",
        img: "/images/t19.jpg",
        title: "Certified Nursing Assistant"
    },
    {
        name: "Michelle Meyers, LMT, BCTMB, MLD-C",
        img: "/images/t20.webp",
        title: "Massage Therapist"
    },
    {
        name: "Jason Jenkins",
        img: "/images/t21.png",
        title: "Nurse Assistant"
    },
    {
        name: "Jen Schamber",
        img: "/images/t22.jpg",
        title: "Phlebotomist"
    },
    {
        name: "Randall Gallardo",
        img: "/images/t23.jpg",
        title: "Office Manager"
    },
    {
        name: "Colbryn Roberts",
        img: "/images/t24.webp",
        title: "Office Assistant"
    },
]

    import Banner from "./components/Banner.svelte";
    let title = 'Meet The Team';
    let info = 'Multidisciplinary Team of Integrative Cancer Experts'
    let src = '/images/Brio-Medical-Staff-Group-scaled.jpg' 
    let golden = true

</script>

<div>
    <Banner {title} {info} {src} {golden}/>

<div class="team">
    <h1 class="info ff">Meet the Brio&#45;Medical Team</h1>
    <div class="images">
        {#each data as card}
        <div class="card">
            <img src={card.img} alt="">
            <h2 class="name">{card.name}</h2>
            <h2 class="name2">{card.title}</h2>
        </div>
         
        {/each}
    </div>
</div>
</div>

<style>

.name {
    font-size: 1.1rem;
    color: #002333;
    font-weight: 300;
}
.name2 {
    font-size: 1.1rem;
    color: #153439;
    font-weight: 200;
    margin: 0px;
}
.card img{
        height: 230px;
        border-radius: 12px;
    }
    .card {
        height: fit-content;
        width: fit-content;
        margin: 19px;
        display: flex;
        align-items: center;
        flex-direction: column;
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

  .info{
    margin-top: 100px;
    text-align: center;
    font-size: 1.5rem;
    color: #002333;
  }
  @media (min-width: 1000px){


  .info{
    text-align: center;
    font-size: 2rem;
  }
  }

  @media (max-width: 700px){

  .info{
    text-align: center;
    font-size: 1rem;
    padding: 0px 20px;
  }
}
</style>