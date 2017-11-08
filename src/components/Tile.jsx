import React from "react";

class Tile extends React.Component {

  tileClicked() {
    this.props.onTileClick(this.props.position)
  }

  render() {
    return (
      <div className="indiv-tile"
        onClick ={()=> this.tileClicked()}>
        <div className="picture">
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default Tile;
