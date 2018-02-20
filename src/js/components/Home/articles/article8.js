import React from "react";

export default class Arcticle8 extends React.Component {
  render() {
    return(
      <section className="article8 row"
               style={{backgroundImage: 'url(./public/content/images/articles/article8-background.svg)'}}>
        <div className="article8-main">
          <div className="article8-main-header">
            A NEW REGIME
          </div>
          <div className="article8-main-subheader">
           ALL PROFIT ARE DIVIDED 50/50 BETWEEN
          </div>
          <div className="article8-main-content">
            The content is segmented in parts that becomes symbolic shares of the content
            itself. Each time someone buy a share it reveals multiple new shares, therefore
             new parts of the content. The content is revealed progressively to its popularity.
              The price of shares is directly correlated to its number available : the more shares/content information are visible the more the share-price rise. 
          </div>
        </div>
      </section>
    )
  }
}
