<template>
<div class="menuToggle">
  <div class="footer-menu-container">
      <div class="footer-menu">
         <div class="col_2">
            <div>
              <h3 class="title">Over ons</h3>
            </div>
            <ul>
              <li><a href="/overons">Wie wij zijn</a></li>
              <li><a href="/hand-made">Hand-made</a></li>
              <li><a href="/nieuws">Nieuws</a></li>
              <li><a href="">Occasions</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
         </div>
         <div class="col_3">
           <div>
             <h3 class="title">Boten</h3>
           </div>
           <ul>
             <li><a href="#">Sloep Raptor</a></li>
             <li><a href="#">Sloep Crafter</a></li>
             <li><a href="#">Sportboot Marshall</a></li>
             <li><a href="#">Sportboot Moonraker</a></li>
            </ul>
         </div>
         <div class="col_4">
           <div>
             <h3 class="title">Jachthaven</h3>
           </div>
           <ul>
              <li><a href="/jachthaven">Over de werf</a></li>
              <li><a href="#">Onderhoud</a></li>
              <li><a href="#">Winterstalling</a></li>
              <li><a href="#">D&O Shop</a></li>
              <li><a href="#">Aanbod onderdelen en occasions</a></li>
            </ul>
         </div>
         <div class="col_5">
           <img src="@/assets/img/14.jpeg" alt="haven" class="nav-image">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  list-style: none;
}
.nav-image{
  width: 90%;
  height: auto;
  display: none;
}
.footer-menu{
  margin: 0 auto;
}
.footer-menu-container .footer-menu .title {
 height: 40px;
 line-height: 1.52;
 color: white;
 margin-bottom: 10px;
 margin-top: 20px;
 margin-left: 30px;
}
.footer-menu-container .footer-menu .title a{
 color: white;
}
ul li{
   margin-left: 30px;
}
.footer-menu-container .footer-menu ul li a{
  font-size: 12px;
  font-weight: 500;
  line-height: 2;
  letter-spacing: 1px;
  color: white;
}

@media (min-width: 500px) {
  li a{
    display: block;
  }
  .footer-menu-container .footer-menu .title {
   margin-top: 0px;
  }
  .nav-image{
    width: 300px;
    height: auto;
  }
  .footer-menu{
   display: grid;
   grid-template-columns: repeat(6, minmax(0, 1fr));
   grid-template-rows: repeat(2, minmax(0, 1fr));
   width: 100%;
   margin-bottom: 20px;
   margin-top: 30px;
  }
  .footer-menu > .col_2{
   grid-column: 1 / span 2;
   grid-row: 1;
  }
  .footer-menu > .col_3{
   grid-column: 3 / span 2;
   grid-row: 1;

  }
  .footer-menu > .col_4{
   grid-column: 5 / span 2;
   grid-row: 1;
  }
  .footer-menu-container{
     padding: 0 20px;
     margin-left: 20px;
  }
  .footer-menu-container .footer-menu ul li a{
    font-size: 15px;
    line-height: 2.4;
  }
  .footer-menu-container .footer-menu ul li a:hover,
  .footer-menu-container .footer-menu .title a:hover
  {
    text-decoration: underline;
  }
  .footer-menu-container a{
    color:#53B2C8;
  }
  .nav-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
}

@media (min-width:1200px) {
  li a{
    display: block;
  }
  .footer-menu-container .footer-menu .title {
   margin-top: 0px;
  }
  .nav-image{
    width: 600px;
    height: 300px;
    display: block;
  }
  .footer-menu{
   grid-template-rows: repeat(1, minmax(0, 1fr));
   margin-top: 50px;
  }
  .footer-menu > .col_2{
   grid-column: 1 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_3{
   grid-column: 2 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_4{
   grid-column: 3 / span 1;
   grid-row: 1;
  }
  .footer-menu > .col_5{
   grid-column: 4 / span 1;
   grid-row: 1;
  }
  .footer-menu-container{
     padding: 0 30px;
     margin-left: 120px;
  }
  ul{
    width: 200px;
  }
}
</style>
