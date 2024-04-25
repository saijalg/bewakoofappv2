import React from "react";
import styles from "../main.module.css";



const Loading = () => {
  return (
    <>
    <div style={{width: "1200px", height : "800px"}} >

      <div   className={styles.loadingCSS} >
     
        <img
          width="250px"
          src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"
          alt="loading..."
          />
       <h1 style={{fontSize :"30px", marginTop : "-50px"}} >Loading...</h1>
      </div>
   </div>
    </>
  );
};

export default Loading;
