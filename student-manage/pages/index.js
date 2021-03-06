import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Table from "../components/table";
import * as Boostrap from "react-bootstrap";
import React from "react";
import StudentDashboard from '../components/studentDashboard';
export default function Home() {
  return (
      <React.Fragment>
          <Head>
              <title>Student Manage</title>
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
              {/* <Boostrap.Container>
                  <Table></Table>
              </Boostrap.Container>
              <Link href='/update'>
                  <a title="update">Update</a>
              </Link> */}
              <StudentDashboard></StudentDashboard>
          </main>
          <footer className={styles.footer}>
              <a
                  href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  Powered by{' '}
                  <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
              </a>
          </footer>
      </React.Fragment>
  )
}
