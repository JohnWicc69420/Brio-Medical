<div class="outer">
    <!-- 
    <a href="#/"><img src="/images/Brio-Logo-Transparent-Background.png" alt=""></a>
    -->


    <div class="inner">
    <a href="#/">
    <p>Home</p>
    </a>
    <a href="#/about">
    <p>About</p>
    </a>
    <a href="#/team">    
        <p>Team</p>
    </a>
    <a href="#/conditions">
    <p>Conditions</p>
    </a>
    <a href="#/treatments">
    <p>Treatments</p>
    </a>
    <a href="#/testimonials">
    <p>Testimonials</p>
    </a>
    <a href="#/resources">
    <p>Resources</p>
    </a>
    <!--
    <a 
    href="https://briomedicalessentials.com/">
    <p>Store </p>
    </a>
    -->
</div>
</div>

<style>
    a{
        text-decoration: none;
    }
    .outer {
        padding: 30px 40px 0px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .inner{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap; 
        padding: 20px;
       }

    p {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.15rem;
    font-weight: 500;
    gap: 5px;
    position: relative; 
    cursor: pointer;
    margin: 4px;
    transition: color 0.3s ease-in-out;
}
p:hover {
    color: rgb(0, 235, 211);
}

p::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    border-bottom: 2px solid rgb(0, 235, 211);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

p:hover::after {
    opacity: 1;
}

</style>