"use client";
import homeStyles from "@/app/page.module.css";
import divWrap from "@/app/page.module.css";


export default function Home() {

  const titlePage = {
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <main>
      <nav className={homeStyles.homeNav}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">products</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </nav>
      <h1 style={titlePage}>iLaptops</h1>

      <div className={divWrap.wrapper}>
        <div className={divWrap.itemBox}>
          <div className={divWrap.itemImage}></div>
          <div className={divWrap.itemTitle}><h3>Razer Blade 16 Gaming Laptop Windows 11 Home</h3></div>
          <div className={divWrap.itemTitle} ><p>price: $799.99</p></div>
        </div>

        <div className={divWrap.itemBox}>
          <div className={divWrap.itemImage2}></div>
          <div className={divWrap.itemTitle}><h3>HP Pavilion Gaming 15-dk0000 Series</h3></div>
          <div className={divWrap.itemTitle} ><p>price: $799.99</p></div>
        </div>


        <div className={divWrap.itemBox}>
          <div className={divWrap.itemImage3}></div>
          <div className={divWrap.itemTitle}><h3>Acer Nitro 5 Gaming Laptop</h3></div>
          <div className={divWrap.itemTitle} ><p>price: $799.99</p></div>
        </div>

      </div>






    </main>
  );
}
