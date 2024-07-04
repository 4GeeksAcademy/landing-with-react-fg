import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";



export const Card = () => {
    return (
        <div className="col">
            <div className="card text-center">
                <img src={rigoImage} className="card-img-top" alt="Card image" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus similique illo quasi provident ad nobis corporis enim temporibus architecto facilis inventore, officia corrupti dicta quae impedit culpa, quas eveniet nemo?</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary">Find Out More</button>
                </div>
            </div>
        </div>
    );
}