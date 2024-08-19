'use client';
import styles from "../page.module.css"
import React, { use, useState } from "react"

export default function SignUpForm() {


    const [signUpData, setSignUpData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        joinNews: false
    })


    function handleSignUp(event: any) {

        const { name, value, checked, type } = event.target

        setSignUpData(prevData => {
            // console.log(signUpData)

            return { ...prevData, [name]: type === "checkbox" ? checked : value }
        })

    }

    function handleSubmit(event: any) {
        event.preventDefault()
        console.log(signUpData)
        if (signUpData.password !== "") {
            if (signUpData.password === signUpData.confirmPassword && signUpData.password !== undefined) {
                console.log("Successfuly sign up")
                if (signUpData.joinNews === true) {
                    console.log("Thanks for signing up to our newsletter!")
                }
            } else console.log("Password is not match")
        } else console.log("Your password can't be empty")

        
    }


    return (
        <div className={styles.form}>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <input className={styles.input} type="email" name="email" placeholder="email@yourmail.com" value={signUpData.email} onChange={handleSignUp} />
                </div>
                <div>
                    <input className={styles.input} type="password" name="password" placeholder="password" value={signUpData.password} onChange={handleSignUp} />
                </div>
                <div>
                    <input className={styles.input} type="password" name="confirmPassword" placeholder="confirm password" value={signUpData.confirmPassword} onChange={handleSignUp} />
                </div>
                <div className={styles.checkbox_section}>
                    <input className={styles.checkbox} id="joinNews" type="checkbox" name="joinNews" checked={signUpData.joinNews} onChange={handleSignUp} />
                    <label htmlFor="joinNews">I want to join the newsletter</label>
                </div>
                <div className={styles.button_section}>
                    <button className={styles.button}>Sign up</button>
                </div>
            </form>
        </div>
    )
}