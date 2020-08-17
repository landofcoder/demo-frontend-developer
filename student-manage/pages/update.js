import Head from 'next/head'
import React from "react";
import Form from "../components/form";
const Update = () => {
    const object = {name: 'Nguyen Van Manh'}
    return (
        <>
            <Head>
                <title>Student Manage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Form object={object}></Form>
            </main>
        </>
    )
}
export default Update