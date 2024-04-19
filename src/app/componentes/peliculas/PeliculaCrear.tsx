import developer1 from "../../../assets/img/viaje-chihiro-ghibli-1579597094.jpg";
import developer2 from "../../../assets/img/ponyo.jpg";

export const Acerca = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src={developer1}
                  className="card-img-top"
                  alt="viaje-chihiro-ghibli-1579597094.jpg"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Arquitecto</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Sung Jin Woo cazador de rango E muy inteligente y capaz de
                    mantener la calma en todo tipo de situaciones, incluso en
                    aquellas donde la muerte acecha o donde cazadores más
                    experimentados se vuelven locos.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={developer2}
                  className="card-img-top"
                  alt="ponyo.jpg"
                />
                <div className="card-body">
                  <h3 className="card-title fw-bold">Desarrolladora senior</h3>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Rhaenyra Targaryen Rhaenyra Targaryen es la hija mayor del
                    rey Viserys Targaryen, designada sucesora al no lograr este
                    descendencia masculina. Al menos así fue hasta la muerte de
                    su primera esposa y su nueva relación con Alicent Hightower,
                    quien sí dio a luz a Aegon y Aemond, comenzando así una
                    eterna lucha por la sucesión
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
