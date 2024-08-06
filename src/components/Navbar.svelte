<div class="outer">
    <a href="#/"><img src="/images/Brio-Logo-Transparent-Background.png" alt=""></a>


    <div class="inner">
    <a href="#/about">
    <p>About</p>
    </a>
    <a href="#/team">    
        <p>Team <img src="/images/down-arrow.png" alt=""></p>
    </a>
    <a href="#/conditions">
    <p>Conditions <img src="/images/down-arrow.png" alt=""></p>
    </a>
    <a href="#/treatments">
    <p>Treatments <img src="/images/down-arrow.png" alt=""></p>
    </a>
    <a href="#/testimonials">
    <p>Testimonials <img src="/images/down-arrow.png" alt=""></p>
    </a>
    <a href="#/resources">
    <p>Resources <img src="/images/down-arrow.png" alt=""></p>
    </a>
    <a href="https://briomedicalessentials.com/">
    <p>Store </p>
    </a>
</div>
</div>

<style>
    a{
        text-decoration: none;
    }
    .outer {
        margin-top: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    img {
        text-align: center;
        max-height: 120px;
    }

    .inner{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap; 
        padding: 20px;
       }

    p {
    display: flex;
    align-items: center;
    color: rgb(0, 0, 123);
    font-size: 1.3rem;
    gap: 5px;
    position: relative; 
    cursor: pointer;
    margin: 4px;
}

p::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid rgb(0, 0, 123);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

p img {
    filter: brightness(0) saturate(100%) invert(23%) sepia(100%) saturate(747%) hue-rotate(186deg) brightness(98%) contrast(102%);
    height: 20px;
    font-weight: 800;
}

p:hover::after {
    opacity: 1;
}

</style>