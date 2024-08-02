<div class="outer">
<img src="/images/Brio-Logo-Transparent-Background.png" alt="">
<div class="inner">
    <p>About</p>
    <p>Team <img src="/images/down-arrow.png" alt=""></p>
    <p>Conditions <img src="/images/down-arrow.png" alt=""></p>
    <p>Treatments <img src="/images/down-arrow.png" alt=""></p>
    <p>Testimonials <img src="/images/down-arrow.png" alt=""></p>
    <p>Resources <img src="/images/down-arrow.png" alt=""></p>
    <p>Store </p>
    <p>Contact</p>
</div>
</div>

<style>
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