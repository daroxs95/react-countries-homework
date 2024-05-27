import {INTERNAL_FACTS_API_URL} from "@/config";
import {Fact} from "@/types";

export const metadata = {
    title: `Fun or useless facts`,
    description: `You can find here fun or useless facts.`,
};

export async function getData() {
    const response = await fetch(INTERNAL_FACTS_API_URL, {
        cache: "no-store"
    });
    const data: Fact = await response.json();
    return data;
}

export default async function Home() {
    const data = await getData();

    return (
        <p
            style={{
                fontSize: "20px",
                textAlign: "center",
                maxWidth: "300px",
                lineHeight: "150%",
            }}
        >
            {data.text}
        </p>
    );
}
