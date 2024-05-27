import styles from "./page.module.css";
import {API_TOKEN, API_URL} from "@/config";
import {Country} from "@/types";
import {CountriesSelect} from "@/components/CountriesSelect/CountriesSelect";

export const metadata = {
    title: `Countries`,
    description: `Dive your nose in countries`,
};

export async function getData() {
    const response = await fetch(`${API_URL}/countries`, {
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
        },
    });
    const data: { data: Country[] } = await response.json();
    return data.data;
}

export default async function Home() {
    const data = await getData();

    return (
        <CountriesSelect countries={data}/>
    );
}
