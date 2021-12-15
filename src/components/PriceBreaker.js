const PriceBreaker = () => {


    return ( 
        <section>
            <div className="price-container">
                
                <div className="NDIS-box">
                  <p>Our prices are in line with the NDIS price guide. This rate allows us to ensure our support workers can undertake professional development to provide the best possible support to NDIS participants.</p>
                  <button className="price-btn" type="button">NDIS Price Guide</button>
                  <button className="price-btn" type="button">What we provide</button>
                </div>
                <div className="graph-box">
                        <img className="graph-position" src="graphPanel.png" alt="" />
                   </div>
                 
               
            </div>
        </section>
     );
}
 
export default PriceBreaker;