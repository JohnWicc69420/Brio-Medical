<script>
  import InfoCard from "./InfoCard.svelte";

</script>
<div class="container">
    <div class="img">
        <img src="/images/testicular.jpg" alt="">
    </div>
    <div class="info">
        <div class="welcome">Welcome to Brio-Medical</div>
        <div class="title ff">
            Your Journey to Recovery Starts Here
        </div>
        <div class="p">
            The intensive cancer program encompasses a range of evidence-based treatments and therapies, including conventional cancer therapies, alternative and complementary therapies, lifestyle modifications, and supportive care. Patients receive individualized attention and support, ensuring their specific needs and goals are met throughout the program. 
        </div>
    </div>
</div>

<div class="cards">
    <InfoCard h1='Exclusive Access to Advanced Therapies' p='Experience cutting-edge treatments like Whole-Body Hyperthermia, Low-Dose Metronomic Chemotherapy, and Personalized Peptide Therapy in Scottsdale, AZ, requiring no need for international travel to access world-class cancer care.' p2='View Treatments' />
    <div class="line"></div>
    <InfoCard h1='State-of-the-Art Facility' p='Our clinic has the latest medical technology, ensuring every patient receives the most advanced care possible. Our dedicated team of specialists is committed to providing personalized treatment for each individual.' p2='About Us'/>
    <div class="line"></div>
    <InfoCard h1='Multi-Disciplinary Team' p='Our team of experienced integrative oncologists, naturopaths, nutritionists, and support staff work together to create a comprehensive, personalized treatment plan for each patient.' p2='View Team'/>
</div>

<style>

    .cards {
        margin: 160px 40px 40px;
        display: flex;
        justify-content: space-around;
    }

    .container{
        display: flex;
        gap: 75px;
        align-items: center;
        justify-content: center;
    }

    .img{
        height: 400px;
        width: 550px;
        border-radius: 24px;
        overflow: hidden;
    }

    img{
        height: 400px;
        width: 550px;
        object-fit: cover;
    }

    .info{
        display: flex;
        align-items: flex-start;
        gap: 16px;
        flex-direction: column;
        width: 40%;
    }

    .welcome{
        color: #c7c7c7;
        text-transform: uppercase;
        font-size: .85rem;
    }

    .title{
        font-size: 3.3rem;
        color: #002333;
    }

    .p {
        color: #6d6d6d;
        font-weight: 300;
    }

</style>