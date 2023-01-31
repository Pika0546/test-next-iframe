import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
    const removeScrollFromChild = (e) => {
        console.log(e);
    }

    const iframeDocRef = useRef();
    useEffect(() => {
        if (window) {
            try {
                setTimeout(() => {
                    iframeDocRef.current = window.frames["myFrame"].contentWindow.document;
                    console.log(iframeDocRef.current);
                    iframeDocRef.current.addEventListener("click", removeScrollFromChild);
                }, [3000]);
            } catch (error) {
                console.log(error);
            }
            // return () => {
            //     if(iframeDocRef.current){
            //         iframeDocRef.current.removeEventListener("click", removeScrollFromChild);
            //     }
            // }
        }
    }, []);
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <iframe
                id="myFrame"
                src="/iframe"
                width="900px"
                height="600px"
            ></iframe>
        </div>
    );
}
