'use client'

import {Country} from "@/types";
import {useRouter} from "next/navigation";
import {FormEvent, useState} from "react";
import styles from "./CountriesSelect.module.css"

interface CountriesSelectProps {
    countries: Country[]
}

export function CountriesSelect({countries}: CountriesSelectProps) {
    const router = useRouter();

    const [selected, setSelected] = useState<string>("");

    const onSelectChange = (event: FormEvent<HTMLSelectElement>) => {
        setSelected(event.currentTarget.value);
        router.prefetch(`/${event.currentTarget.value}`)
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        router.push(`/${selected}`);
    }

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <select className={styles.select} value={selected} onChange={onSelectChange}>
                <option value="" disabled>Select a country</option>
                {countries.map((country) => (
                    <option key={country.name}>{country.name}</option>
                ))}
            </select>
            <button className={styles.btn} type="submit">Go</button>
        </form>
    );
}