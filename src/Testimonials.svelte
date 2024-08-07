
<script>
    import Banner from "./components/Banner.svelte";
    let title = 'Patient Testimonials';
    let info = 'From Our Patients: Stories of Resilience and Recovery'
    let src = '/images/Copy-of-Untitled-Design.png' 
    let golden = false
</script>

<div class="banner">
<Banner {title}{info}{src}{golden}/>
</div>

<div class="container">
    <div class="upper">
    <p>
        <span style="font-size: 20px; color: #002333">Voices of Victory, Hope, & Healing</span>
    </p>
<p>
    <span class="ff" style="font-size: 30px; color: #002333">Patient Experiences at Brio-Medical</span>
</p>
<p>
    <span style="font-size: 20px;">
        At Brio-Medical, our patients' journeys are the heart of what we do. Their stories of courage, resilience, and healing are not just testimonials; they are testaments to the power of our integrative cancer treatment approach.
    </span>
</p>
<p>
    <span style="font-size: 20px;">
        Watch the video testimonials of these inspiring stories and see how our unique therapies have made a real difference in the lives of those battling cancer.
    </span>
</p>

    <div class="upperFrame">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GhQL6NxCQTA" frameborder="0" allowfullscreen></iframe>
    </div>

<p style="text-align: left;">
    <span style="font-size: 18px;">
        Charlie is a cancer survivor with an incredible story. He has been confronted with the reality of battling <strong><a href="/cancer/" role="link">five different types of cancer</a></strong>: Colorectal Cancer, Melanoma, Renal Cancer, Leukemia, and Prostate Cancer. He is now <a href="/contact/" role="link"><strong>cancer-free</strong></a>.
    </span>
</p>

</div>

<div class="allFrames">
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/3A_LOk9NInQ" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/d7ADA5eDMnU" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/tiIDy5uCHLs" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/2y0mwD4eHz0" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/WEkqNfLFK_Q" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/AvANB2eQafc" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/FZh7-eSziXM" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/d03UxgEtj04" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/SuGxnr_QCM4" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/AVyxRwNMDqk" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/9a23gBryujw" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/RRLq9jw2qb8" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/bNEqirBgTJU" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/zCykgUPvhAM" frameborder="0" allowfullscreen></iframe>
    <iframe width="392" height="220.5" src="https://www.youtube.com/embed/XF6psKwA3hk" frameborder="0" allowfullscreen></iframe>
</div>

</div>

<style>
    .allFrames {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    iframe{
        border: 1px solid black;
        margin: 20px;
    }
    .container {
        margin: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .banner{
        height: 650px;
        overflow: hidden;
    }

    a{
        text-decoration: none;
        color: #002333;
    }

    .upper{
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    @media (max-width: 1000px){
        .upper{
            width: 80%;
        }

        .upperFrame iframe{
            width: 300px;
            height: fit-content;
        }
    }
</style>