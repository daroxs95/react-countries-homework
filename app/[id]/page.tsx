import {CountryDetails} from "@/types";
import styles from "../page.module.css";
import {API_TOKEN, API_URL} from "@/config";
import Image from "next/image";

export async function generateMetadata({params}: { params: { id: string } }) {
    return {
        title: `Country: ${decodeURIComponent(params.id)}`,
        description: `Details for country: ${params.id}.`,
    }
}

export async function getData(id: string) {
    const response = await fetch(`${API_URL}/countries/${id}`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
        },
    });
    const data: { data: CountryDetails } = await response.json();
    return data.data;
}

export default async function Page({params}: { params: { id: string } }) {
    const data = await getData(params.id);

    return (
        <>
            <Image src={data.href.flag} alt={""} width={250} height={200} style={{
                objectFit: "cover",
            }}/>
            {data.full_name && <p>Full name: {data.full_name}</p>}
            <p>Capital: {data.capital}</p>
            <p>Population: {data.population}</p>
            <a
                className={styles.navbarBtn}
                href={`https://en.wikipedia.org/wiki/${params.id}`}
                target="_blank"
                rel="noopener"
            >
                Wiki -{">"}
            </a>
        </>
    );
}
