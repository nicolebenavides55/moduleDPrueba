import teams from "../json/teamns.json";
import { BtnRunner } from "./BtnRunners";

export function ListRunner() {
    let corredores = teams.runners

    let limiteCorredores = corredores.slice(0, 14)

    let cantidadFaltante = 14 - corredores.length

    let arrayFaltante = []

    let indexFaltante = corredores.length + 1 


    while (cantidadFaltante > 0) {
        arrayFaltante.push(
            <BtnRunner key={indexFaltante} clase={"btnG"} />
        )
        indexFaltante++
        cantidadFaltante--
    }


    // let btnAdicionales = Array.from({ length: cantidadFaltante }, (_, index) => (
    //     <BtnRunner key={index} clase={"btn2"} />
    // ));

    return <div>
        <div className="nameTeam">
            <p>UB 2023 - Cisco XD</p>
        </div>

        <p className="tap">Tap on your name!</p>

        <div className="runners">
            {
                limiteCorredores.map((corredor) => {
                    return (
                        <BtnRunner
                            key={corredor.id}
                            clase={"btnR"}
                            nombre={corredor.firstName}
                            apellido={corredor.lastName}
                        />
                    )
                })
            }
            {arrayFaltante}
            {/* {btnAdicionales} */}
        </div>
    </div>
}