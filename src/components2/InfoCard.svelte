<script>
    export let h1;
    export let p;
    export let p2
</script>

<div class="infoCard">
    <h1 class="ff">{h1}</h1>
    <p class="p">{p}</p>
    <div class="view">
    <p class="p2">{p2}</p>
    <div class="img">
    <img src="/images/right-arrow.png" alt="">
    </div>
    </div>
</div>
 
<style>

    .view{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: 20px;
    }

    .infoCard {
        display: flex;
        width: 325px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        transition: transform 0.3s ease;
    }

    .infoCard:hover {
    transform: translateY(-20px);
}
    h1 {
        font-size: 2rem;
        font-weight: 300;
        color: #002333;
        text-align: center;
    }
    .p {
        text-align: center;
    }
    .p2{
        font-weight: 600;
        color: #002333;
    }

    img{
        height: 12px;
        width: 18px;
        object-fit: contain;
        filter: brightness(0) invert(100%);
    }

    .img{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #00EBD3;
        border-radius: 50%;
        height: 30px;
        width: 30px;
    }
</style>