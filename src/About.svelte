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
    let title = 'About Brio-Medical';
    let info = "Arizona's Premier Integrative Cancer Treatment Center"
    let src = '/images/Brio-Medical-Staff-Group-scaled.jpg' 
    let golden = true

</script>

<div>
    <Banner {title} {info} {src} {golden}/>
    <div class="container">
        <div class="textContainer">
    <h1>Welcome To The Brio Family</h1>
    <p>The mission of Brio-Medical is to fulfill your quest for total health and wellness at our state-of-the-art facility with science-backed natural treatments for the management of cancer, Lyme Disease, and other chronic illness.</p>
    <p>The caring environment of everyone at the Brio-Medical family is here to help you. Our family here looks forward to joining you and giving you a “Brio-Welcome”.</p>
    <img src="/images/Brio-Medical-Staff-Group-scaled.jpg" alt="">
    <p>The philosophy behind the Brio-Care System is the synergistic intersection of alternative and conventional medicine based on the principle that a healthy body does not develop the disease with an intact immune defense system.</p>
    <p>The Brio-Care System believes each person is unique, and the approach to maintaining and improving health and healing should be holistic, treating the mind, body, and spirit. Our approach seeks to restore and strengthen the biological capacities of the body to renew, repair, and heal, with specific emphasis on the immune system.  Our treatments are designed to “kick start” self-renewal and healing.</p>
    </div>
    
    <form class="form" action="/submit" method="post">
        <img src="/images/Brio-Logo-Transparent-Background.png" alt="">
        <label for="first-name">Patient First Name:*</label>
        <input placeholder="First Name" type="text" id="first-name" name="first-name" required>
      
        <label for="last-name">Patient Last Name:*</label>
        <input placeholder="Last Name" type="text" id="last-name" name="last-name" required>
      
        <label for="email">Email:*</label>
        <input placeholder="E-mail" type="email" id="email" name="email" required>
      
        <label for="phone">Phone:*</label>
        <input placeholder="Phone Number" type="tel" id="phone" name="phone" required>
      
        <label for="condition">Condition:</label>
        <input placeholder="What is the primary concern?" type="text" id="condition" name="condition">
      
        <label for="how-can-we-help">How Can We Help? (Optional):</label>
        <textarea placeholder="What is your story" id="how-can-we-help" name="how-can-we-help"></textarea>
      
      
        <button type="submit" class="button1">Submit</button>
      </form>
      
    </div>
    
    <style>
    
        h1{
            line-height: 2.6rem;
            color: #F8C33B;
        }
    
    .textContainer {
        width: 70%;
    }

    .textContainer img{
        width: 90%;
        margin: 40px 0px;
    }
    
    textarea {
        font-family: inherit;
        padding: 10px;
        height: 100px;
        width: 90%;
    }
        .form{
            padding: 25px 25px;
            margin-left: 50px;
            width: 400px;
            display: flex;
            align-items: flex-start;
            gap: 20px;
            flex-direction: column;
            background-color: #f6f6f6;
        }
    
        .form input{
            width: 90%;
            padding: 20px 10px;
            border: 1px solid black;
            outline: none;
            font-family: inherit;
            color: black;
            background-color: #FAF0E0;
        }
        input::placeholder {
            color: black;
        }
        .form label{
            color: #013365;
            font-weight: 800;
            margin-top: 30px;
        }
    
        .form img{
            height: 100px;
        }
        .el{
            display: flex;
            align-items: start;
            flex-direction: column;
        }
        .container {
            display: flex;
            align-items: flex-start;
            margin: 40px;
        }
    h3 {
        color: rgb(205, 0, 0);
    }
    a{
        text-decoration: none;
        color: rgb(205, 0, 0);
    }
    p {
        font-size: .9rem;
    }
    
    li{
        font-size: .8rem;
        margin-bottom: 10px;
    }
    </style>

<div class="team">
    <h1 class="info">Meet the Brio&#45;Medical Team</h1>
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
    color: rgb(207, 0, 0);
    font-weight: 200;
}
.name2 {
    font-size: 1.1rem;
    color: #153439;
    font-weight: 200;
    margin: 0px;
}
.card img{
        height: 230px;
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
    color: #F8C33B;
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