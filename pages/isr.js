// pages/isr.js
export default function Isr({ data }) {
    return (
        <>
            <h1>ISR rendered page</h1>
            <p>
                This page is ISR rendered. It was rendered on {data}.
            </p>
            <br/><br/>
            <p>
                <a href="/">HOMEPAGE</a>
            </p>
        </>
    );
}

/*export async function getServerSideProps() {
    const renderDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(renderDate);
    console.log(
        `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
    );
    return { props: { formattedDate } };
}*/

export const getStaticProps = () => {

    const renderDate = Date.now();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
        timeStyle: "long",
    }).format(renderDate);
    console.log(
        `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
    );

    return {
        props: {
            data: formattedDate,
        },
        revalidate: 60,
};
};