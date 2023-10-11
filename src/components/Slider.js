import React from "react";

function Slider({ childrens }) {
  const [itemActual, setItemActual] = React.useState(0);
  const cantidad = childrens?.length;

  // Return prematuro para evitar errores
  if (!Array.isArray(childrens) || cantidad === 0) return;

  const siguienteItem = () => {
    setItemActual(itemActual === cantidad - 1 ? 0 : itemActual + 1);
  };

  const anteriorItem = () => {
    setItemActual(itemActual === 0 ? cantidad - 1 : itemActual - 1);
  };

  setTimeout(
    function () {
      siguienteItem();
    }.bind(this),
    4000
  );

  return (
    <>
      <div className="container_sleder">
        {childrens.map((item, index) => {
          return (
            <div
              key={index}
              className={itemActual === index ? "slide active" : "slide"}>
              {itemActual === index && (
                <>
                  <h1 className="sus-frases-text">"{item.title}</h1>
                  <h2 className="sus-frases-text">{item.body}"</h2>
                </>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Slider;
