import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
    const [username, setUsername] = useState(' ')
    const [password, setPassword] = useState(' ')

    const navigate = useNavigate()

    async function inicioSesion(e) {
        e.preventDefault()

        if (username !== "" && password !== "") {
            localStorage.setItem('token', password)

            const token = localStorage.getItem('token')

            if (token === "123456789") {

                navigate('/ListRunner')
                console.log("Inicio de sesión exitoso")

                
            } else {
                console.log("Inicio de sesión fallido")
                localStorage.setItem('token', ' ')
            }
        }

    }

    return (
        <div>
            <h1>Inicio de Sesión</h1>

            <form onSubmit={inicioSesion}>
                <input
                    type="text"
                    placeholder="Usuario"
                    onChange={e => {
                        setUsername(e.target.value)
                    }}
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    onChange={e => {
                        setPassword(e.target.value)
                    }}
                />
                <button type="submit">Iniciar Sesión</button>
            </form>
        </div>
    );
}

