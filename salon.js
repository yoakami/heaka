* {
  margin: 0;
  /* background: rgb(255, 255, 255); */
}

main {
  background-image: url(../../../img/salon/isetan2.jpg);
  background-size: cover;
  height: 900px;
  width: 100%;
}

header img {
  margin-left: 15px;
  float: left;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  width: 70%;
  text-align: center;
  height: 80px;
}

nav ul li {

  position: relative;
  padding-top: 20px;
  margin-left: 50px;
}

nav ul li a {
  display: block;
  width: 100px;
  
}

nav ul li a::after,
nav ul li a::before {
  display: block;
  content: " ";
  position: absolute;
}

nav ul li a::after {
  left: 50%;
  width: 5px;
  height: 5px;
  background-color: #555;
  border-radius: 100%;
}

nav ul li a:hover:after {
  background-color: #555;
  width: 150%;
  left: -25%;
  border-radius: 5px;
}

nav ul li a {
  text-decoration: none;
  color:rgb(61, 41, 41);
}

nav ul li a.current {
  color:#555;
}

h1 {
  text-align: center;
  padding-top: 150px;
  padding-bottom: 50px;
}

#about1 {
  width: 800px;
  margin: 0 auto;
  padding: 15px;
  background-color: rgba(225, 225, 225, 0.7);
  line-height: 28px;
  letter-spacing: 0.7px;
  border-radius: 10px;
}

#about2 {
  width: 800px;
  margin: 80px auto;
  padding: 15px;
  background-color: rgba(225, 225, 225, 0.7);
  line-height: 28px;
  letter-spacing: 0.7px;
  border-radius: 10px;
}

.small {
  display: inline-block;
  margin: 20px 175px;
  padding-left: 470px;
}

/* responsive */
@media screen and (max-width: 767px){

  #nav-drawer{
    display: none;
  }

  h1 {
    text-align: center;
    padding-top: 150px;
    padding-bottom: 50px;
    font-size: 24px;
  }
  


  main {
    background-image: url(../../../img/salon/isetan2.jpg);
    background-size: cover;
    height: 210px;
    width: 100%;
    margin-top: 0;
  }

  #about1 {
    width: 80%;
    margin: 20px auto;
    padding: 15px;
    background-color: rgba(225, 225, 225, 0.7);
    line-height: 28px;
    letter-spacing: 0.7px;
    border-radius: 10px;
  }
  
  #about2 {
    width: 80%;
    margin: 80px auto;
    padding: 15px;
    background-color: rgba(225, 225, 225, 0.7);
    line-height: 28px;
    letter-spacing: 0.7px;
    border-radius: 10px;
  }

  header img {
    margin-left: 0px;
    float: left;
    width: 40%;
    height: 20%;
  }

  nav ul {
    padding-top: 40px;
    list-style: none;
    width: 0%;
    /* text-align: center; */
    height: 10px;
    /* overflow: hidden; */
    font-size: 15px;
    display: block;
  }

  nav ul li {
    position: relative;
    padding-top:0;
    margin-left: 260px;
    display: list-item;
    background-color: rgba(124, 124, 124,0.5);
  }

  nav ul li a {
    display: list-item;
    width: 80px;
    padding-top: 40px;
    
  }

  nav ul li a::after,
nav ul li a::before {
  display: block;
  content: " ";
  position: absolute;
  display: none;
}

nav ul li a::after {
  left: 50%;
  width: 5px;
  height: 5px;
  background-color: #555;
  border-radius: 100%;
  display: none;
}

nav ul li a:hover:after {
  background-color: #555;
  width: 150%;
  left: -25%;
  border-radius: 5px;
}

nav ul li a {
  text-decoration: none;
  color:rgb(61, 41, 41);
}

nav ul li a.current {
  color:#555;
}

  .small {
   text-align: center;
   padding: 900px 0 5px 80px;
   margin: 0;
   font-size: 12px;
  }
/*　ハンバーガーボタン　*/
.hamburger {
  display : block;
  position: fixed;
  z-index : 3;
  right : 13px;
  top   : 12px;
  width : 42px;
  height: 42px;
  cursor: pointer;
  text-align: center;
}
.hamburger span {
  display : block;
  position: absolute;
  width   : 30px;
  height  : 2px ;
  left    : 6px;
  background : #555;
  -webkit-transition: 0.3s ease-in-out;
  -moz-transition   : 0.3s ease-in-out;
  transition        : 0.3s ease-in-out;
}
.hamburger span:nth-child(1) {
  top: 10px;
}
.hamburger span:nth-child(2) {
  top: 20px;
}
.hamburger span:nth-child(3) {
  top: 30px;
}

/* ナビ開いてる時のボタン */
.hamburger.active span:nth-child(1) {
  top : 16px;
  left: 6px;
  background :#fff;
  -webkit-transform: rotate(-45deg);
  -moz-transform   : rotate(-45deg);
  transform        : rotate(-45deg);
}

.hamburger.active span:nth-child(2),
.hamburger.active span:nth-child(3) {
  top: 16px;
  background :#fff;
  -webkit-transform: rotate(45deg);
  -moz-transform   : rotate(45deg);
  transform        : rotate(45deg);
}

nav.globalMenuSp {
  position: fixed;
  z-index : 2;
  top  : 55px;
  left : 0;
  color: #fff;
  /* background: rgba(0,0,0,0.7); */
  text-align: center;
  width: 100%;
  opacity: 0;
  transition: opacity .6s ease, visibility .6s ease;
}

nav.globalMenuSp ul {
  margin: 0 auto;
  padding: 0;
  width: 100%;
}

nav.globalMenuSp ul li {
  list-style-type: none;
  padding: 0;
  width: 30%;
  transition: .4s all;
  font-size: 12px;
  display: list-item;
  text-transform: uppercase;
}
nav.globalMenuSp ul li:last-child {
  padding-bottom: 0;
}
nav.globalMenuSp ul li:hover{
  background :#ddd;
}

nav.globalMenuSp ul li a {
  display: block;
  color: #fff;
  padding: 10px;
  text-decoration :none;
  
}

/* このクラスを、jQueryで付与・削除する */
nav.globalMenuSp.active {
  opacity: 100;

}


}
