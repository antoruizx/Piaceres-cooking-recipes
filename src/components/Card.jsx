import React from 'react';
import '../styles/Card.css';

const Card = (props) => {
  return (
    <div>
        <div className="caja-titulo">
      <h1 className="titulo-principal">Comidas fáciles, ricas y caseras </h1>
    </div>
    
    <div id='div-cards' className="row row-cols-1 row-cols-md-3 g-4">
      <div className="col">
        <div className="card h-100">
          <img src={props.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Dumplings</h5>
            <p className="card-text">Masas rellenas de distintos ingredientes parecidas a una empanada.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Dificultad: media.</small>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src={props.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Dumplings</h5>
            <p className="card-text">Masas rellenas de distintos ingredientes parecidas a una empanada.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Dificultad: media.</small>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src={props.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Dumplings</h5>
            <p className="card-text">Masas rellenas de distintos ingredientes parecidas a una empanada.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Dificultad: media.</small>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src={props.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Dumplings</h5>
            <p className="card-text">Masas rellenas de distintos ingredientes parecidas a una empanada.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Dificultad: media.</small>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src={props.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Dumplings</h5>
            <p className="card-text">Masas rellenas de distintos ingredientes parecidas a una empanada.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Dificultad: media.</small>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <img src={props.img} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Dumplings</h5>
            <p className="card-text">Masas rellenas de distintos ingredientes parecidas a una empanada.</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">Dificultad: media.</small>
          </div>
        </div>
      </div>
    </div>

    <div  className="d-grid gap-2 col-6 mx-auto justify-content-center">
      <button id='btn-cards' type="button" className="btn btn-success">Ver más</button>
    </div>
    </div>
  );
};

export default Card;