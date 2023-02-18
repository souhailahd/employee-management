import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "/employee/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Détails d'un employé</h2>
                </div>
                <div className="card-body"></div>

                {empdata &&
                    <div>
                        <h2>Le nom de l'employé est : <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h3>Contact détails</h3>
                        <h5>Email est : {empdata.email}</h5>
                        <h5>Téléphone est : {empdata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Retour</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default EmpDetail;